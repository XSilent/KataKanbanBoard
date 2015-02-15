var Tasks = function()
{
	var taskCollection = [];

	this.addTask = function(task)
	{
		taskCollection.push(task);

		return task;
	}

	this.removeTask = function(task)
	{
		for (taskNr in taskCollection) {
			if (taskCollection[taskNr].getName() === task.getName()) {
				taskCollection.splice(taskNr);
			}
		}
	};

	this.getTaskByIndex = function(index)
	{
		return taskCollection[index];
	};
}
