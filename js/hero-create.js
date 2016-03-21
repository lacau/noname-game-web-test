jQuery(document).ready(function() {
	
	jQuery("#hero-create-form").submit(function(event) {
		var path = "hero/create";
		var _name = jQuery('input[name=name]').val();
		var formData = {name: _name};
		ajaxPost(path, formData, successFunction);

		event.preventDefault();
	});

	function successFunction(data) {
		console.log(data);
		showInfoPopup('Hero created!', redirectToHeroList);
	}

	function redirectToHeroList() {
		redirect('hero-list');
	}
});