jQuery(document).ready(function() {
	var visibleMenu = null;
	var MENU_ANIMATE_TIME = 300;

	jQuery("#menu-account").click({menuName:'account'}, function(event) {showMenu(event)});
	jQuery("#menu-hero").click({menuName:'hero'}, function(event) {showMenu(event)});

	function showMenu(event) {
		var menu = document.getElementById('menu-container');
		if(menu) {
			closeMenu(jQuery(menu));
			window.setTimeout(function() { func(event); }, 1000);
		} else
			func(event);
	}

	function func(event) {
		if(visibleMenu != event.data.menuName) {
			switch(event.data.menuName) {
				case 'account':
					createAccountMenu(event.target);
					break;
				case 'hero':
					createHeroMenu(event.target);
					break;
			}
			visibleMenu = event.data.menuName;
		} else
			visibleMenu = null;
	}

	function createAccountMenu(element) {
		var b1 = createButton('Register', 'register-account');
		var b2 = createButton('Login', 'login');
		var menu = createMenu([b1,b2]);

		var menuPos = jQuery(element).offset();
		menu.css({top:menuPos.top + element.height});

		openMenu(menu);
	}

	function createHeroMenu(element) {
		var b1 = createButton('Create', 'hero-create');
		var b2 = createButton('List', 'hero-list');
		var b3 = createButton('Hero', 'hero');
		var menu = createMenu([b1,b2,b3]);

		var menuPos = jQuery(element).offset();
		menu.css({top:menuPos.top + element.height});

		openMenu(menu);
	}

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
			menuHeight += 35;
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
		var _top = (index * 25) + 10;

		buttonEl.css({top: _top + 'px'});
		buttonEl.append(button.buttonName);
		buttonEl.click(function() {
			redirect(button.link);
		});

		return buttonEl;
	}

	function openMenu(menu) {
		var _height = menu.height() + 'px';

		menu.css({height: '0px'});
		jQuery('body').append(menu);
		menu.animate({height: _height}, MENU_ANIMATE_TIME);
	}

	function closeMenu(menu, menus) {
		menu.empty();
		menu.animate({height: '0px'}, MENU_ANIMATE_TIME);
		setTimeout(function() { menu.remove() }, MENU_ANIMATE_TIME);
	}
});