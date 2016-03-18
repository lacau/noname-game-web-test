function showInfoPopup(text, callback) {
	showPopup(text, 'INFO', callback);
}

function showErrorPopup(text, callback) {
	showPopup(text, 'ERROR', callback);
}

function showPopup(text, title, callback) {
	var body = jQuery('body');
	blockScreen();
	var errorDiv = createPopupDiv(text, title, callback);
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

function createPopupDiv(description, title, callback) {
	var container = createErrorContainer();
	container.append(createTitle(title));
	container.append(createErrorDescription(description));
	container.append(createOkButton(callback));
	return container;
}

function createErrorContainer() {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-container');
	div.attr('id', 'error-container');
	return div;
}

function createTitle(title) {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-container-title');
	div.append(title);
	return div;
}

function createErrorDescription(description) {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-container-text');
	div.append(description);
	return div;
}

function createOkButton(callback) {
	var div = jQuery(document.createElement('div'));
	div.addClass('error-ok-button');
	div.append('OK');
	div.click(function() { 
		unblockScreen();
		callback();
	});
	return div;
}