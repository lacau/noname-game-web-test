function ajaxPost(path, formData, successFunction) {
	var url = "http://localhost:8080/noname-game/rest/" + path;
	jQuery.ajax({
		    url: url,
		    crossDomain: true,
		    type: 'post',
		    data: JSON.stringify(formData),
		    headers: {
		        "Accept": 'application/json',
		        "Content-Type": 'application/json'
		    },
		    dataType: 'json',
		    success: function (data) {
		        successFunction(data);
		    },
		    error: function(xhr) {
		    	showErrorPopup(JSON.parse(xhr.responseText).errorMessage);
		    }
		});
}