/**
 * Column
 *
 * @param columnName
 * @param limit
 * @param previousColumn
 * @constructor
 */
var Column = function(columnName, limit, previousColumn)
{
	var name = columnName;
	var columnPrevious = previousColumn;
	var WIPLimit = limit;
	var tasks = 0;

	/**
	 * Set column name
	 * @param value
	 */
	this.setName = function(value)
	{
		name = value;
	};

	/**
	 * Get column name
	 *
	 * @returns {*}
	 */
	this.getName = function()
	{
		return name;
	};

	/**
	 * Get previous column
	 * @returns {*}
	 */
	this.getPrevious = function()
	{
		return previousColumn;
	};

	/**
	 * Find Column in chain
	 *
	 * @param columnName
	 * @returns {*}
	 */
	this.findInChain = function(columnName)
	{
		var col = this.getPrevious();
		var result;

		while (typeof col !== "undefined") {
			result = col;
			col = col.getPrevious();
		}

		return result;
	};

	/**
	 * Get Work In Progress Limit
	 * @returns {*}
	 */
	this.getWIPLimit = function()
	{
		return WIPLimit;
	};

	/**
	 * Set Work In Progress limit
	 *
	 * @param value
	 */
	this.setWIPLimit = function(value)
	{
		WIPLimit = value;
	};

	/**
	 * add task
	 */
	this.addTask = function()
	{
		tasks++;
	};

	/**
	 * remove task
	 */
	this.removeTask = function()
	{
		tasks--;
	};

	/**
	 * Get amount of task
	 * for this column
	 *
	 * @returns {number}
	 */
	this.getTasksCount = function()
	{
		return tasks;
	};
};
