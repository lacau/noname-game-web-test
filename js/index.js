jQuery(document).ready(function() {
	var visibleMenu = null;

	jQuery("#menu-account").click({menuName:'account'}, function(event) {showMenu(event)});
	jQuery("#menu-hero").click({menuName:'hero'}, function(event) {showMenu(event)});

	var showMenu = function(event) {
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
		var b1 = createButton('Register', '');
		var b2 = createButton('Login', '');
		var menu = createMenu([b1,b2]);

		var menuPos = jQuery(element).offset();
		menu.css({top:menuPos.top + element.height});

		openMenu(menu);
	}

	function createHeroMenu(element) {
		var b1 = createButton('Create', '');
		var b2 = createButton('List', '');
		var menu = createMenu([b1,b2]);

		var menuPos = jQuery(element).offset();
		menu.css({top:menuPos.top + element.height});

		openMenu(menu);
	}
});