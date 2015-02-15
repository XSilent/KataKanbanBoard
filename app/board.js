var Board = function()
{
	var columns = [];

	this.addColumn = function(column)
	{
		columns.push(column);
	};

	this.getColumn = function(name)
	{
		for (nr in columns) {
			if (columns[nr].getName() === name) {
				return columns[nr];
			}
		}
	};

	this.getColumns = function()
	{
		return columns;
	};

	this.getColumnByIndex = function(index)
	{
		return columns[index];
	};

};
