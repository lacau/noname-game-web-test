jQuery(document).ready(function() {
	
	function onload() {
		var header = createTableHeader();
		jQuery('#hero-table').append(header);
		retrieveHeroList();
	}

	function retrieveHeroList() {
		var path = "hero/list";
		ajaxGet(path, successRetrieveHeroList);
	}

	function successRetrieveHeroList(data) {
		var lines = [];
		data.forEach(function(el, index) {
			lines.push(createTableLine(el, index));
			jQuery(lines[index].children()[2]).html(createSelectButton(el.id));
		});
		jQuery('#hero-table').append(lines);
	}

	function createTableLine(hero, index) {
		var columns = [hero.name, hero.level, '&nbsp;'];
		var columnsLength = [40, 40, 20];

		return createTableColumns(columns, columnsLength, index, false);
	}

	function createTableHeader() {
		var columns = ['Name', 'Level', 'Action'];
		var columnsLength = [40, 40, 20];

		return createTableColumns(columns, columnsLength, null, true);
	}

	function createSelectButton(id) {
		var path = "hero/" + id;
		var button = jQuery(document.createElement('div'));
		button.addClass('button-select');
		button.append('Select');
		button.click(function(event) {
			ajaxGet(path, successSelectHero);
		});
		return button;
	}

	function successSelectHero(data) {
		selectedHero = data;
		redirect('hero');
	}

	function createTableColumns(columns, columnsLength, lineIndex, isHeader) {
		var lineDiv = jQuery(document.createElement('div'));
		lineDiv.attr('id', isHeader ? 'table-header' : ('table-line-' + lineIndex));
		var divs = [];
		columns.forEach(function(el, index) {
			var d = jQuery(document.createElement('div'));
			d.addClass(isHeader ? 'table-header-column' : 'table-line-column');
			d.css({width: columnsLength[index] + '%'});
			d.attr('id', (isHeader ? 'table-header-column-' : 'table-line-column-') + index);
			d.append(el);
			divs.push(d);
		});
		lineDiv.addClass(isHeader ? 'table-header' : 'table-line');
		lineDiv.append(divs);

		return lineDiv;
	}

	onload();
});