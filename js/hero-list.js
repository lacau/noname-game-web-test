jQuery(document).ready(function() {
	
	function onload() {
		var header = createTableHeader();
		jQuery('#hero-table').append(header);
		retrieveHeroList()
	}

	function retrieveHeroList() {
		var path = "hero/list";
		ajaxGet(path, successFunction);
	}

	function successFunction(data) {
		console.log(data);
	}

	function createTableHeader() {
		var columns = ['Name', 'Level', 'Action'];
		var columnsLength = [40, 40, 20];
		var headerDiv = jQuery(document.createElement('div'));
		headerDiv.addClass('table-header');
		headerDiv.append(createTableHeaderColumns(columns, columnsLength));

		return headerDiv;
	}

	function createTableHeaderColumns(columns, columnsLength) {
		var divs = [];
		columns.forEach(function(el, index) {
			var d = jQuery(document.createElement('div'));
			d.addClass('table-header-column');
			d.css({width: columnsLength[index] + '%'});
			d.append(el);
			divs.push(d);
		});
		return divs;
	}

	onload();
});