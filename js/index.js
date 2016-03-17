var credential = null;

function ajaxPost(path, formData, successFunction) {
	var _url = "http://localhost:8080/noname-game/rest/" + path;
	var _headers = createHeaders();

	jQuery.ajax({
		    url: _url,
		    crossDomain: true,
		    type: 'post',
		    data: JSON.stringify(formData),
		    headers: _headers,
		    dataType: 'json',
		    success: function (data) {
		        successFunction(data);
		    },
		    error: function(xhr) {
		    	var errorMsg;
		    	try {
		    		errorMsg = JSON.parse(xhr.responseText).errorMessage;
		    	} catch(err) {
		    		errorMsg = 'Unexpected error';
		    	}
		    	showErrorPopup(errorMsg);
		    }
		});
}

function createHeaders() {
	var _headers = { "Accept": 'application/json', "Content-Type": 'application/json' };
	if(credential) {
		_headers.auth_id = credential.id;
		_headers.auth_token = credential.token;
	}

	return _headers;
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}