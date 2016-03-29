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
		var container = createSkillSelectList();
		blockScreen();
		jQuery('body').append(container);
		container.center();
	}

	function createSkillSelectList() {
		var container = jQuery(document.createElement('div'));
		container.addClass('list-skill-container');
		container.append(createSkillSelectListTitle());
		container.append(createSkillLine(1));

		return container;
	}

	function createSkillSelectListTitle() {
		var titleDiv = jQuery(document.createElement('div'));
		titleDiv.addClass('list-skill-container-title');
		titleDiv.append('Skills');
		return titleDiv;
	}

	function createSkillLine(index) {
		var lineDiv = jQuery(document.createElement('div'));
		lineDiv.addClass('list-skill-line');
		lineDiv.append(createDivCheckBox(index));
		lineDiv.append(createDivSkillName(index));

		return lineDiv;
	}

	function createDivCheckBox(index) {
		var div = jQuery(document.createElement('div'));
		div.addClass('list-skill-checkbox-div');
		var checkbox = jQuery(document.createElement('input'));
		checkbox.attr('type', 'checkbox');
		div.append(checkbox);
		return div;
	}

	function createDivSkillName(index) {
		var div = jQuery(document.createElement('div'));
		div.addClass('list-skill-name-div');
		div.append('Test name.');
		return div;
	}

	onload();
});

function beforeLoad() {
	if(!selectedHero)
		redirect('login');
}

beforeLoad();