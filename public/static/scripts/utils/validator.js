export function onBlur(nodes) {
	let i;
	let len = nodes.length;

	for (i = 0; i < len; i++) {
		let node = nodes[i];

		node.addEventListener('blur', inputBlur);
	}
}

export function removeBlur(nodes) {
	let i;
	let len = nodes.length;

	for (i = 0; i < len; i++) {
		let node = nodes[i];

		node.removeEventListener('blur', inputBlur);
	}
}

function inputBlur() {
	let formContent = this.value;

	if (formContent == '') {
		this.parentNode.classList.add('input-blank');

		if (this.parentNode.classList.contains('required-input')) {
			this.parentNode.classList.remove('input-blank');
			this.parentNode.classList.add('input-invalid');
		}
	}

	if (formContent !== '' && !this.parentNode.classList.contains('form-email-wrapper') && !this.parentNode.classList.contains('form-phone-wrapper')) {
		if (this.parentNode.classList.contains('input-blank')) {
			this.parentNode.classList.remove('input-blank');
		}

		this.parentNode.classList.add('input-valid');
	}

	checkValidForm();
}

function checkValid() {
	let formWrappers = document.querySelectorAll('.form-wrapper');
	let submitButton = document.querySelector('.form-submit');
	let valid = 0;
	let i;
	let len = formWrappers.length;

	for (i = 0; i < len; i++) {
		let wrapper = formWrappers[i];

		if (wrapper.classList.contains('form-valid')) {
			valid++;
		}
	}

	if (valid == len) {
		submitButton.classList.add('form-valid');
	}
}