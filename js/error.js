var _block;

function showErrorPopup() {
	var body = jQuery('body');
	blockScreen();
	var errorDiv = createErrorDiv();
	body.append(errorDiv);
	errorDiv.center();
}

function blockScreen() {
	_block = jQuery(document.createElement('div'));
	_block.addClass('block-screen');
	var _width = ($(window).width() + $(window).scrollLeft()) + 'px';
	var _height = ($(window).height() + $(window).scrollTop()) + 'px';
	_block.css({width: _width, height: _height});
	jQuery('body').append(_block);
}

function unblockScreen() {
	jQuery('body').remove(_block);
}

function createErrorDiv() {
	var container = jQuery(document.createElement('div'));
	container.addClass('error-container');
	return container;
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}