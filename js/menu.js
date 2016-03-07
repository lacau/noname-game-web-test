
function createButton(_buttonName, _link) {
	return {
		buttonName: _buttonName,
		link: _link
	};
}

function createMenu(arrayButton) {
	var menuHeight = 0;
	var buttons = [];
	arrayButton.forEach(function(el, index) {
		buttons.push(createButtonElement(el, index));
		menuHeight += 40;
	});
	menuHeight += 'px';

	var container = jQuery(document.createElement('div'));
	container.addClass('sub-menu');
	container.attr('id', 'menu-container');
	container.css({height: menuHeight});
	container.append(buttons);

	return container;
}

function createButtonElement(button, index) {
	var buttonEl = jQuery(document.createElement('div'));
	buttonEl.addClass('sub-menu-button');
	var _top = 10;
	if(index != 0)
		_top += (index * 20) + 10;

	buttonEl.css({top: _top + 'px'});
	buttonEl.append(button.buttonName);

	return buttonEl;
}

function openMenu(menu) {
	var _height = menu.height() + 'px';

	menu.css({height: '0px'});
	jQuery('body').append(menu);
	menu.animate({height: _height});
}

function closeMenu(menu) {
	menu.animate({height: '0px'});
	setTimeout(function() { menu.remove() }, 1000);
}