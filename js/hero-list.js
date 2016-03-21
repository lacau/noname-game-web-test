jQuery(document).ready(function() {
	
	function onload() {
		var header = createTableHeader();
		jQuery('#hero-table').append(header);
		retrieveHeroList();
	}

	function retrieveHeroList() {
		var path = "hero/list";
		ajaxGet(path, successFunction);
	}

	function successFunction(data) {
		var lines = [];
		data.forEach(function(el, index) {
			lines.push(createTableLine(el));
		});
		jQuery('#hero-table').append(lines);
	}

	function createTableLine(hero) {
		var columns = [hero.name, hero.level, '&nbsp;'];
		var columnsLength = [40, 40, 20];

		return createTableColumns(columns, columnsLength, 'table-line-column', false);
	}

	function createTableHeader() {
		var columns = ['Name', 'Level', 'Action'];
		var columnsLength = [40, 40, 20];

		return createTableColumns(columns, columnsLength, 'table-header-column', true);
	}

	function createTableColumns(columns, columnsLength, cssClass, isHeader) {
		var lineDiv = jQuery(document.createElement('div'));
		var divs = [];
		columns.forEach(function(el, index) {
			var d = jQuery(document.createElement('div'));
			d.addClass(cssClass);
			d.css({width: columnsLength[index] + '%'});
			d.append(el);
			divs.push(d);
		});
		lineDiv.addClass(isHeader ? 'table-header' : 'table-line');
		lineDiv.append(divs);

		return lineDiv;
	}

	onload();
});