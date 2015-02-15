/**
 * Application
 *
 * @constructor
 */
var App = function()
{
	var board;
	var tasks;

	/**
	 * Init board and data
	 */
	this.init = function()
	{
		var that = this;
		board = new Board();
		tasks = new Tasks();

		var toDo = new Column('To Do');
		var progress = new Column('Progress', toDo);
		var review = new Column('Review', progress);
		var done = new Column('Done', review);

		board.addColumn(toDo);
		board.addColumn(progress);
		board.addColumn(review);
		board.addColumn(done);

		tasks.addTask(new Task('Milch kaufen', 'To Do'));
		tasks.addTask(new Task('Kaffee kaufen', 'To Do'));

		// register event listeners
		document.getElementById('taskNew').onclick = function()  { that.doTaskNew(); };
		document.getElementById('taskTake').onclick = function() { that.doTaskTake(); };
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

		var task = new Task(taskName);
		board.getColumn('To Do').addTask(tasks.addTask(task));
		this.render();
	};

	/**
	 * Take task (start working)
	 */
	this.doTaskTake = function()
	{
		alert('take task');
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

		var found = column.findInChain(oldColumnName);

		// Set user for task
		if (oldColumnName === 'To Do') {
			var userName = prompt('Name of team member', '');

			if (userName === '') {
				return;
			}

			task.setUser(userName);
		}

		var moveOk = false;
		if (typeof column.getPrevious() === "undefined") {

			moveOk = true
			task.setUser('');
		} else {
			if (column.getPrevious().getName() === oldColumnName) {
				moveOk = true;
			}
		}

		if (moveOk === true) {
			task.setColumnName(newColumnName);
			this.render();
		} else {
			alert('This task move is not possible!');
		}
	};
};

var app = new App();
app.init();

app.render();
