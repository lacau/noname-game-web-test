function showErrorPopup(text) {
	var body = jQuery('body');
	blockScreen();
	var errorDiv = createErrorDiv(text);
	body.append(errorDiv);
	errorDiv.center();
}

function blockScreen() {
	var _block = jQuery(document.createElement('div'));
	_block.addClass('block-screen');
	var _width = ($(window).width() + $(window).scrollLeft()) + 'px';
	var _height = ($(window).height() + $(window).scrollTop()) + 'px';
	_block.css({width: _width, height: _height});
	_block.attr('id', 'block-screen');
	jQuery('body').append(_block);
}

function unblockScreen() {
	jQuery('#error-container').remove();
	jQuery('#block-screen').remove();
}

function createErrorDiv(description) {
	var container = jQuery(document.createElement('div'));
	container.addClass('error-container');
	container.attr('id', 'error-container');
	var titleDiv = jQuery(document.createElement('div'));
	titleDiv.addClass('error-container-title');
	var textDiv = jQuery(document.createElement('div'));
	textDiv.addClass('error-container-text');
	var button = jQuery(document.createElement('div'));
	button.addClass('error-ok-button');
	button.append('OK');
	button.click(unblockScreen);
	titleDiv.append('Error');
	textDiv.append(description);
	container.append(titleDiv);
	container.append(textDiv);
	container.append(button);
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