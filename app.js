var App = function()
{
	var board;

	this.init = function()
	{
		board = new Board();

		board.addColumn(new Coloumn('To Do'));
		board.addColumn(new Coloumn('In Progress'));
		board.addColumn(new Coloumn('Review'));
		board.addColumn(new Coloumn('Done'));

		//board.getColumn('To Do').addTask(new Task('App-Rahmen schreiben'));
		board.getColumn('To Do').addTask(new Task('Tests schreiben'));
		board.getColumn('To Do').addTask(new Task('Neuen Kaffee kaufen'));
	};

	this.printColumns = function()
	{
		var columns = board.getColumns();

		for (nr in columns) {
			console.log('Coloumn: ' + columns[nr].getName());

			var tasks = columns[nr].getTasks();

			for (taskNr in tasks)
			{
				console.log('   Task: ' + tasks[taskNr].getName());
			}

		}
	}
};

var app = new App();
app.init();

app.printColumns();
