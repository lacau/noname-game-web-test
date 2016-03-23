jQuery(document).ready(function() {

	jQuery('.hero-skill-container').click(onclickSkillContainer);

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
		//jQuery('#hero-patk').append(selectedHero.patk);
		jQuery('#hero-exp').append(selectedHero.exp);
		//jQuery('#hero-pdef').append(selectedHero.pdef);
	}

	function onclickSkillContainer(event) {
		var container = jQuery(event.target);
		console.log(event);
	}

	onload();
});

function beforeLoad() {
	if(!selectedHero)
		redirect('login');
}

beforeLoad();