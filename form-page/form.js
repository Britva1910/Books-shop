const fieldset = document.getElementById('fieldset');
const allTextFields = document.querySelectorAll('.text-field__input');
const timeField = document.getElementById('date');
const allCheckbuttons = document.querySelectorAll('.checkbox');
const completeBtn = document.querySelector('.btn-complite');

const cheangeStyle = (nodeElement, additionalClass, removedClass) => {
	nodeElement.classList.add(additionalClass);
	nodeElement.classList.remove(removedClass);
};

const styleInvalidField = (nodeElement) => {
	cheangeStyle(nodeElement, 'field-invalid', 'field-valid');
	cheangeStyle(nodeElement.nextElementSibling, 'masage-visible', 'masage-hidden');
};

const styleValidField = (nodeElement) => {
	cheangeStyle(nodeElement, 'field-valid', 'field-invalid');
	cheangeStyle(nodeElement.nextElementSibling, 'masage-hidden', 'masage-visible');
};

const validityAllFields = () => {
	const arrAllTextFields = Array.from(allTextFields);
	const validityStatus = arrAllTextFields.every(element => element.validity.valid);
	if (validityStatus) {
		completeBtn.disabled = false;
	} else {
		completeBtn.disabled = true;
	}
};

const checkValidity = (event) => {
	const currentField = event.target;
	if (currentField.validity.valid) {
		styleValidField(currentField);
	} else {
		styleInvalidField(currentField);
	}
	validityAllFields();
};

const getMinPosibleDate = () => {
	const currentDate = new Date();
	const nextDay = (currentDate.getDate() + 1) < 10 ? "0" + (currentDate.getDate() + 1) : currentDate.getDate() + 1;
	const currentMonth = (currentDate.getMonth() + 1) < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();
	return currentYear + "-" + currentMonth + "-" + nextDay;
};

const addMinDateInField = () => {
	const dateField = document.getElementById('date');
	dateField.min = getMinPosibleDate();
};

const validityCheckbuttons = () => {
	const MAX_NUMBER_OF_CHECKED = 2;

	const checkedButtons = [];
	const unCheckedButtons = [];
	allCheckbuttons.forEach(element => {
		if (element.checked) {
			checkedButtons.push(element);
		} else {
			unCheckedButtons.push(element);
		}
	});

	if (checkedButtons.length === MAX_NUMBER_OF_CHECKED) {
		unCheckedButtons.forEach(element => {
			element.disabled = true;
		});
	} else {
		unCheckedButtons.forEach(element => {
			element.disabled = false;
		});
	}
};

addMinDateInField();

fieldset.addEventListener('cheange', checkValidity);
fieldset.addEventListener('keydown', checkValidity);
fieldset.addEventListener('keyup', checkValidity);

allCheckbuttons.forEach((element) => {
	element.addEventListener('input', validityCheckbuttons)
});

