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

		board.addColumn(new Coloumn('To Do'));
		board.addColumn(new Coloumn('In Progress'));
		board.addColumn(new Coloumn('Review'));
		board.addColumn(new Coloumn('Done'));

		tasks.addTask(new Task('Tests schreiben', 'To Do'));
		tasks.addTask(new Task('Neuen Kaffee kaufen', 'To Do'));

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

		task.setColumnName(newColumnName);

		this.render();
	};
};

var app = new App();
app.init();

app.render();
