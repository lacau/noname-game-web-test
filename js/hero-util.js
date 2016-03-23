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