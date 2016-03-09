jQuery(document).ready(function() {
	
	jQuery("#login-form").submit(function(event) {
		var url = "/rest/login/credential";
		var formData = jQuery("#login-form").serializeArray();

		jQuery.ajax({
		    url: url,
		    type: 'post',
		    data: formData,
		    headers: {
		        "Accept": 'application/json'
		    },
		    dataType: 'json',
		    success: function (data) {
		        console.info(data);
		    }
		});

		event.preventDefault();
	});
});