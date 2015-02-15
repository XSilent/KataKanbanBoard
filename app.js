/**
 * Application
 *
 * @constructor
 */
var App = function()
{
	/**
	 * Board
	 */
	var board;

	/**
	 * Tasks
	 */
	var tasks;

	/**
	 * Init board and data
	 */
	this.init = function()
	{
		var that = this;
		board = new Board();
		tasks = new Tasks();

		var toDo = new Column('To Do', 10);
		var progress = new Column('Progress', 3, toDo);
		var review = new Column('Review', 3, progress);
		var done = new Column('Done', 10, review);

		board.addColumn(toDo);
		board.addColumn(progress);
		board.addColumn(review);
		board.addColumn(done);

		tasks.addTask(new Task('Milch kaufen', 'To Do'));
		tasks.addTask(new Task('Kaffee kaufen', 'To Do'));
		board.getColumn('To Do').addTask();
		board.getColumn('To Do').addTask();

		// register event listeners
		document.getElementById('taskNew').onclick = function()  { that.doTaskNew(); };
	};

	/**
	 * render board
	 */
	this.render = function()
	{
		var view = new View('Columns', this);

		view.setColumns(board.getColumns());
		view.setTasks(tasks);

		view.render();
	};

	/**
	 * new task
	 */
	this.doTaskNew = function()
	{
		var taskName = window.prompt('Enter task name', '');
		if (taskName === '') {
			return;
		}

		tasks.addTask(new Task(taskName, 'To Do'));
		board.getColumn('To Do').addTask();

		this.render();
	};

	/**
	 * Task dropped in other column
	 * (move task on board)
	 *
	 * @param event
	 * @param columnNr
	 */
	this.doTaskDrop = function(event, columnNr)
	{
		var column = board.getColumnByIndex(columnNr);

		var newColumnName = column.getName();
		var task = tasks.getTaskByIndex(event.dataTransfer.getData('text'));
		var oldColumnName = task.getColumnName();


		if (column.getTasksCount() === column.getWIPLimit()) {
			alert('The WIP limit for this column is already reached!');

			return;
		}

		var moveOk = false;

		if (typeof column.getPrevious() === "undefined") {
			moveOk = true;
			task.setUser('');
		} else {
			if (column.getPrevious().getName() === oldColumnName) {
				moveOk = true;
			}
		}

		if (moveOk === true) {

			// Set user for task
			if (oldColumnName === 'To Do') {
				var userName = prompt('Name of team member', '');

				if ((userName == '') || (userName === null)) {
					return;
				}

				task.setUser(userName);
			}

			task.setColumnName(newColumnName);
			column.addTask();
			board.getColumn(oldColumnName).removeTask();
			this.render();
		} else {
			alert('This task move is not possible!');
		}
	};
};

var app = new App();
app.init();

app.render();
