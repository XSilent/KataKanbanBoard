var Task = function(taskName)
{
	var name = taskName;
	var user = '';

	this.setUser = function(value)
	{
		user = value;
	}

	this.setName = function(value)
	{
		name = value;
	}

	this.getUser = function()
	{
		return user;
	}

	this.getName = function()
	{
		return name;
	}
}
