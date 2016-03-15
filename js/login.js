jQuery(document).ready(function() {
	
	jQuery("#login-form").submit(function(event) {
		var url = "http://localhost:8080/noname-game/rest/login/credential";
		var _login = jQuery('input[name=login]').val();
		var _password = jQuery('input[name=password]').val();
		var formData = {login: _login, password: _password};
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
		        console.log(data);
		    }
		});

		event.preventDefault();
	});
});