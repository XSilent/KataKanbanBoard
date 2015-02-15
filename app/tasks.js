/**
 * Task collection
 *
 * @constructor
 */
var Tasks = function()
{
	/**
	 * Tasks
	 *
	 * @type {Array}
	 */
	var taskCollection = [];

	/**
	 * Add task
	 *
	 * @param task
	 * @returns {*}
	 */
	this.addTask = function(task)
	{
		taskCollection.push(task);

		return task;
	}

	/**
	 * Remove task
	 *
	 * @param task
	 */
	this.removeTask = function(task)
	{
		for (taskNr in taskCollection) {
			if (taskCollection[taskNr].getName() === task.getName()) {
				taskCollection.splice(taskNr);
			}
		}
	};

	/**
	 * Get all tasks
	 *
	 * @returns {Array}
	 */
	this.getTasks = function()
	{
		return taskCollection;
	};

	/**
	 * Get task by index
	 *
	 * @param index
	 * @returns {*}
	 */
	this.getTaskByIndex = function(index)
	{
		return taskCollection[index];
	};

	/**
	 * Get task for the given
	 * column name
	 *
	 * @param columnName
	 * @returns {Array}
	 */
	this.getTasksForColumn = function (columnName)
	{
		var tasks = [];

		for (taskNr in taskCollection) {
			if (taskCollection[taskNr].getColumnName() === columnName) {
				tasks.push(taskCollection[taskNr]);
			}
		}

		return tasks;
	};
}
