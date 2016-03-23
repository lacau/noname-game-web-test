jQuery(document).ready(function() {

	jQuery('.hero-skill-container').click(onclickSkillContainer);

	function onload() {
		loadHeroStatus();
		fillExpBar();
	}

	function loadHeroStatus() {
		jQuery('#hero-name').append(selectedHero.name);
		jQuery('#hero-level').append(selectedHero.level);
		jQuery('#hero-str').append(selectedHero.str);
		jQuery('#hero-hp').append(selectedHero.hp);
		jQuery('#hero-dex').append(selectedHero.dex);
		jQuery('#hero-stamina').append(selectedHero.stamina);
		jQuery('#hero-exp').append(selectedHero.exp);

		jQuery('#hero-patk').append(calculatePAtk(selectedHero));
		jQuery('#hero-pdef').append(calculatePDef(selectedHero));
	}

	function fillExpBar() {
		var percent = calculateXpPercent(selectedHero) + '%';
		jQuery('#hero-exp-bar').css({width: percent});
		jQuery('#hero-exp-text').append(percent);
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