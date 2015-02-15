var Column = function(columnName, previousColumn)
{
	var name = columnName;
	var columnPrevious = previousColumn;
	var WIPLimit = 10;
	var tasks = [];


	this.setName = function(value)
	{
		name = value;
	};

	this.getName = function()
	{
		return name;
	};

	this.getPrevious = function()
	{
		//if (typeof previousColumn === 'undefined') {
		//	previousColumn = null;
		//}

		return previousColumn;
	};

	this.findInChain = function(columnName)
	{
		var col = this.getPrevious();
		var result;

		while (typeof col !== "undefined") {
			console.log('previous: ' + col.getName());

			result = col;
			col = col.getPrevious();
		}

		return result;
	};

	this.setWIPLimit = function(value)
	{
		WIPLimit = value;
	};

	this.addTask = function(task)
	{
		task.setColumnName(name);
		tasks.push(task);
	};

	this.removeTask = function(task)
	{
		for (taskNr in tasks) {
			if (tasks[taskNr].getName() === task.getName()) {
				tasks.splice(taskNr);
			}
		}
	};

	this.getTasks = function()
	{
		return tasks;
	};
};
