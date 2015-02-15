/**
 * Task
 *
 * @param taskName
 * @param column
 * @constructor
 */
var Task = function(taskName, column)
{
	var name = taskName;
	var columnName = column;
	var user = '';

	/**
	 * Set user
	 *
	 * @param value
	 */
	this.setUser = function(value)
	{
		user = value;
	};

	/**
	 * Set name
	 *
	 * @param value
	 */
	this.setName = function(value)
	{
		name = value;
	};

	/**
	 * Set name of column
	 * to which this task
	 * is assigned
	 *
	 * @param name
	 */
	this.setColumnName = function(name)
	{
		columnName = name;
	};

	/**
	 * Get column name for
	 * which this task is assigend to
	 *
	 * @returns {*}
	 */
	this.getColumnName = function()
	{
		return columnName;
	};

	/**
	 * Get user
	 *
	 * @returns {string}
	 */
	this.getUser = function()
	{
		return user;
	};

	/**
	 * Get name
	 *
	 * @returns {*}
	 */
	this.getName = function()
	{
		return name;
	};
};
