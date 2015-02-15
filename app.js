function test()
{
	console.log('test called!');
}

var App = function()
{
	var board;
	var tasks;

	this.init = function()
	{
		var that = this;
		board = new Board();
		tasks = new Tasks();

		board.addColumn(new Coloumn('To Do'));
		board.addColumn(new Coloumn('In Progress'));
		board.addColumn(new Coloumn('Review'));
		board.addColumn(new Coloumn('Done'));

		board.getColumn('To Do').addTask(tasks.addTask(new Task('Tests schreiben')));
		board.getColumn('To Do').addTask(tasks.addTask(new Task('Neuen Kaffee kaufen')));

		// register event listeners
		document.getElementById('taskNew').onclick = function()  { that.doTaskNew(); };
		document.getElementById('taskTake').onclick = function() { that.doTaskTake(); };
	};

	this.render = function()
	{
		var view = new View('Columns', this);

		view.setColumns(board.getColumns());
		view.render();
	};

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

	this.doTaskTake = function()
	{
		alert('take task');
	};

	this.doTaskDrop = function(event, columnNr)
	{
		var taskNr = event.dataTransfer.getData('text');
		var column = board.getColumnByIndex(columnNr);
		var newColumn = column.getName();

		var task = tasks.getTaskByIndex(taskNr);
		var oldColumn = task.getColumnName();

		board.getColumn(oldColumn).removeTask(task);
		board.getColumn(newColumn).addTask(task);

		this.render();
	};

};

var app = new App();
app.init();

app.render();
