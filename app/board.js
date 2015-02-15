/**
 * Board
 *
 * @constructor
 */
var Board = function()
{
	/**
	 * Columns
	 *
	 * @type {Array}
	 */
	var columns = [];

	/**
	 * Add column
	 *
	 * @param column
	 */
	this.addColumn = function(column)
	{
		columns.push(column);
	};

	/**
	 * Get column
	 *
	 * @param name
	 * @returns {*}
	 */
	this.getColumn = function(name)
	{
		for (nr in columns) {
			if (columns[nr].getName() === name) {
				return columns[nr];
			}
		}
	};

	/**
	 * Get columns
	 *
	 * @returns {Array}
	 */
	this.getColumns = function()
	{
		return columns;
	};

	/**
	 * Get column by index
	 * @param index
	 * @returns {*}
	 */
	this.getColumnByIndex = function(index)
	{
		return columns[index];
	};

};
