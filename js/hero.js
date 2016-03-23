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
		var percent = calculateXpPercent(selectedHero);
		jQuery('#hero-exp-bar').css({width: percent + '%'});
		jQuery('#hero-exp-text').append(percent + '%');
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

	function requiredXpToLvlUp(lvl) {
        return (500.0 * (lvl * lvl / 2.0 * (lvl / 100.0)) * 10.0 + (lvl * lvl * lvl) * 100.0) | 0;
    }

    function calculateXpPercent(hero) {
        var percent = 0.0;

        var lastLvlXp = requiredXpToLvlUp(hero.level - 1);
        var lvlRequiredXp = requiredXpToLvlUp(hero.level) - lastLvlXp;
        var currentLvlXp = hero.exp - lastLvlXp;

        percent = (currentLvlXp * 100) / lvlRequiredXp;

        return parseFloat(Math.floor(percent * 100) / 100).toFixed(1);
    }

	onload();
});

function beforeLoad() {
	if(!selectedHero)
		redirect('login');
}

beforeLoad();