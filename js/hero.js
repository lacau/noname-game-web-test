jQuery(document).ready(function() {

});

function beforeLoad() {
	if(!selectedHero)
		redirect('login');
}

beforeLoad();