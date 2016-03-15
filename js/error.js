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
	var container = createErrorContainer();
	var titleDiv = createErrorTitle();
	container.append(createErrorTitle());
	container.append(createErrorDescription(description));
	container.append(createErrorOkButton());
	return container;
}

function createErrorContainer() {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-container');
	div.attr('id', 'error-container');
	return div;
}

function createErrorTitle() {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-container-title');
	div.append('Error');
	return div;
}

function createErrorDescription(description) {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-container-text');
	div.append(description);
	return div;
}

function createErrorOkButton() {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-ok-button');
	div.append('OK');
	div.click(unblockScreen);
	return div;
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}