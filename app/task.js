var Task = function(taskName, column)
{
	var name = taskName;
	var columnName = column;
	var user = '';

	this.setUser = function(value)
	{
		user = value;
	};

	this.setName = function(value)
	{
		name = value;
	};

	this.setColumnName = function(name)
	{
		columnName = name;
	};

	this.getColumnName = function()
	{
		return columnName;
	};

	this.getUser = function()
	{
		return user;
	};

	this.getName = function()
	{
		return name;
	};

	this.new = function(name)
	{
		return new Task(name);
	};
};
