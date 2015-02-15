var ViewConsole = function(viewName)
{
	var name = viewName;
	var columns = [];

	this.setColumns = function(boardColumns)
	{
		columns = boardColumns;

		return this;
	}

	this.render = function()
	{
		for (nr in columns) {

			console.log('Coloumn: ' + columns[nr].getName());

			var tasks = columns[nr].getTasks();

			for (taskNr in tasks)
			{
				console.log('   Task: ' + tasks[taskNr].getName());
			}
		}
	}
}
