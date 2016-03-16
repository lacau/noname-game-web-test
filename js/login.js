jQuery(document).ready(function() {
	
	jQuery("#login-form").submit(function(event) {
		var path = "login/credential";
		var _login = jQuery('input[name=login]').val();
		var _password = jQuery('input[name=password]').val();
		var formData = {login: _login, password: _password};
		ajaxPost(path, formData, successFunction);

		event.preventDefault();
	});

	function successFunction(data) {
		console.log(data);
	}
});