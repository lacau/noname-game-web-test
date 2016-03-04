jQuery(document).ready(function() {

	jQuery("#menu-account").click({menuName:'account'}, function(event) {showMenu(event)});
	
	var showMenu = function(event) {
		switch(event.data.menuName) {
			case 'account':
				createAccountMenu(event.target);
		}
	}

	function createAccountMenu(element) {
		var b1 = createButton('', '');
		var b2 = createButton('', '');
		var menu = createMenu([b1,b2]);

		var menuPos = jQuery(element).offset();
		menu.css({top:menuPos.top + element.height});

		animateMenu(menu);
	}

	function createButton(_buttonName, _link) {
		return {
			buttonName: _buttonName,
			link: _link
		};
	}

	function createMenu(arrayButton) {
		var menuHeight = 0;
		arrayButton.forEach(function(el, index) {
			menuHeight += 40;
		});
		menuHeight += 'px';

		var container = jQuery(document.createElement('div'));
		container.addClass('sub-menu');
		container.css({height: menuHeight});

		return container;
	}

	function animateMenu(menu) {
		var _height = menu.height() + 'px';

		menu.css({height: '0px'});
		jQuery('body').append(menu);
		menu.animate({height: _height});
	}
});