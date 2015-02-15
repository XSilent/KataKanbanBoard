var Task = function(taskName)
{
	var name = taskName;
	var user = '';
	var columnName = '';

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
	}
}
