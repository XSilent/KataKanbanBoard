var Coloumn = function(columnName)
{
	var name = columnName;
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
