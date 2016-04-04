jQuery(document).ready(function() {

	var skills = null;
	var skillContainer = null;

	jQuery('.hero-skill-container').click(onclickSkillContainer);

	function onload() {
		loadHeroStatus();
		fillExpBar();
		loadHeroSkills();
		loadListSkills();
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

	function loadHeroSkills() {
		if(selectedHero.skills.length == 0)
			return;

		selectedHero.skills.forEach(function(el, index) {
			var container = jQuery('#hero-skill-container-' + (index + 1));
			setSkillToContainer(container, el.type);
		});
	}

	function loadListSkills() {
		var path = "skill/list";
		ajaxGet(path, loadListSkillsSuccess);
	}

	function loadListSkillsSuccess(data) {
		skills = data;
		console.log(skills);
	}

	function onclickSkillContainer(event) {
		if(skills != null) {
			skillContainer = jQuery(event.target);
			var container = createSkillSelectList();
			blockScreen();
			jQuery('body').append(container);
			container.center();
		}
	}

	function createSkillSelectList() {
		var container = jQuery(document.createElement('div'));
		container.attr('id', 'list-skill-container');
		container.addClass('list-skill-container');
		container.append(createSkillSelectListTitle());
		skills.forEach(function(el, index) {
			container.append(createSkillLine(index));
		});
		container.append(createDivFooter());

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
		lineDiv.append(createDivRadio(index));
		lineDiv.append(createDivSkillName(index));
		lineDiv.attr('title', skills[index].description);

		return lineDiv;
	}

	function createDivRadio(index) {
		var div = jQuery(document.createElement('div'));
		div.addClass('list-skill-checkbox-div');
		var radio = jQuery(document.createElement('input'));
		radio.attr('type', 'radio');
		radio.attr('name', 'skill-radio');
		radio.attr('value', skills[index].type);
		if(getSkillByType(selectedHero.skills, skills[index].type) != null)
			radio.attr('disabled', true);
		div.append(radio);
		return div;
	}

	function createDivSkillName(index) {
		var div = jQuery(document.createElement('div'));
		div.addClass('list-skill-name-div');
		div.append(skills[index].name);
		return div;
	}

	function createDivFooter() {
		var div = jQuery(document.createElement('div'));
		div.addClass('list-skill-container-footer');
		div.append(createSelectSkillButton());
		return div;
	}

	function createSelectSkillButton() {
		var selectButton = jQuery(document.createElement('div'));
		selectButton.addClass('skill-select-button');
		selectButton.append('Select');
		selectButton.click(function() {
			selectSkill();
			jQuery('#list-skill-container').remove();
			unblockScreen();
		});
		return selectButton;
	}

	function selectSkill() {
		var skillType = jQuery('input[name=skill-radio]:checked', '#list-skill-container').val();
		setSkillToContainer(skillContainer, skillType);
	}

	function setSkillToContainer(container, skillType) {
		container.empty();
		container.css('background-image', 'url(img/' + skillType.toLowerCase() + '.png)');
		container.append('&nbsp;');
		container.attr('title', getSkillByType(skills, skillType).name);
	}

	function getSkillByType(listSkill, type) {
		var skill = null;
		listSkill.forEach(function(el) {
			if(el.type == type) {
				skill = el;
				return;
			}
		});
		return skill;
	}

	onload();
});

function beforeLoad() {
	if(!selectedHero)
		redirect('login');
}

beforeLoad();