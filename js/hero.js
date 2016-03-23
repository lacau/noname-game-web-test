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
		jQuery('#hero-exp').append(selectedHero.exp);

		jQuery('#hero-patk').append(calculatePAtk(selectedHero));
		jQuery('#hero-pdef').append(calculatePDef(selectedHero));
	}

	function onclickSkillContainer(event) {
		var container = jQuery(event.target);
		console.log(event);
	}

	function calculatePAtk(hero) {
		var val = hero.str * 5 * (hero.level / 5.2);
		return parseFloat(val).toFixed(2);
	}

	function calculatePDef(hero) {
		var str = hero.str;
		var lvl = hero.level;
		var val = str * str + lvl * lvl + 10 * (lvl / 1.5);
		return parseFloat(val).toFixed(2);
	}

	onload();
});

function beforeLoad() {
	if(!selectedHero)
		redirect('login');
}

beforeLoad();