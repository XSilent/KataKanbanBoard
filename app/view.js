/**
 * View
 *
 * @param viewName
 * @constructor
 */
var View = function(viewName, appHandle)
{
	/**
	 * view name
	 */
	var name = viewName;
	var app = appHandle;


	/**
	 * columns to be rendered
	 *
	 * @type {Array}
	 */
	var columns = [];

	/**
	 * tasks
	 *
	 * @type {Array}
	 */
	var tasks = [];

	/**
	 * Set columns
	 *
	 * @param boardColumns
	 * @returns {View}
	 */
	this.setColumns = function(boardColumns)
	{
		columns = boardColumns;

		return this;
	}

	/**
	 * Set tasks
	 *
	 * @param boardTasks
	 * @returns {View}
	 */
	this.setTasks = function(boardTasks)
	{
		tasks = boardTasks;

		return this;
	}

	/**
	 * Render columns and
	 * associated tasks
	 */
	this.render = function()
	{
		getElementColumns();

		return this;
	}

	/**
	 * DOM Elements for Columns
	 */
	function getElementColumns()
	{
		var elemBoard = document.getElementById('board');
		elemBoard.innerHTML = '';
		var that = this;

		for (colNr in columns) {
			// new column
			var elemCol = document.createElement('div');
			elemCol.className = 'column';
			elemCol.id = 'col_' + colNr;

			// header
			var elemColHeader = document.createElement('div');
			elemColHeader.className = 'columnHeader';
			elemColHeader.id = 'colHeader_' + colNr;
			elemColHeader.innerHTML = columns[colNr].getName();
			elemCol.appendChild(elemColHeader);
			elemCol.ondragover = function(event) { event.preventDefault(); };
			elemCol.ondrop = function(event) { that.app.doTaskDrop(event, this.getAttribute('data-colNr')); };
			elemCol.setAttribute("data-colNr", colNr);

			// tasks
			elemCol.appendChild(getElementTasks(columns[colNr].getName()));

			elemBoard.appendChild(elemCol);
		}
	}

	/**
	 * Create DOM-Element with child-elements
	 * for each task in the given column
	 *
	 * @param columnName
	 * @returns {HTMLElement}
	 */
	function getElementTasks(columnName)
	{
		var elemContainer = document.createElement('ul');
		var taskColl = tasks.getTasks();

		// create elements for each task
		// in found column
		for (taskNr in taskColl) {

			if (taskColl[taskNr].getColumnName() !== columnName) {
				continue;
			}

			var elemItem = document.createElement('li');
			elemItem.className = 'task';
			elemItem.id = 'task_' + colNr;
			elemItem.innerHTML = taskColl[taskNr].getName();
			elemItem.setAttribute("data-taskNr", taskNr);
			elemItem.ondragstart = function(event) { event.dataTransfer.setData('text', this.getAttribute('data-taskNr')); };
			elemItem.draggable = true;

			var elemItemUser = document.createElement('span');
			elemItemUser.className = 'user';
			elemItemUser.innerHTML = taskColl[taskNr].getUser();

			if (taskColl[taskNr].getUser() !== '') {
				elemItem.appendChild(elemItemUser);
			}

			elemContainer.appendChild(elemItem);
		}

		return elemContainer;
	}
};
