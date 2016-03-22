jQuery(document).ready(function() {

	function onload() {
		loadHeroStatus();
	}

	function loadHeroStatus() {
		jQuery('#hero-name').append(selectedHero.name);
		jQuery('#hero-level').append(selectedHero.level);
		jQuery('#hero-str').append(selectedHero.str);
		jQuery('#hero-hp').append(selectedHero.hp);
		jQuery('#hero-dex').append(selectedHero.dex);
		jQuery('#hero-stamina').append(selectedHero.stamina);
		jQuery('#hero-patk').append(selectedHero.patk);
		jQuery('#hero-exp').append(selectedHero.exp);
		jQuery('#hero-pdef').append(selectedHero.pdef);
	}

	onload();
});

function beforeLoad() {
	if(!selectedHero)
		redirect('login');
}

beforeLoad();