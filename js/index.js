jQuery(document).ready(function() {

	jQuery("#menu-account").click({menuName:'account'}, function(event) {showMenu(event)});
	
	var showMenu = function(event) {
		switch(event.data.menuName) {
			case 'account':
				createAccountMenu(event.target);
		}
	}

	function createAccountMenu(element) {
		var b1 = createButton('Register', '');
		var b2 = createButton('Login', '');
		var menu = createMenu([b1,b2]);

		var menuPos = jQuery(element).offset();
		menu.css({top:menuPos.top + element.height});

		openMenu(menu);
	}
});