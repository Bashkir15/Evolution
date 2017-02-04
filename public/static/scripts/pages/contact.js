import notification from '../components/notifications'
import { onBlur, removeBlur } from '../utils/validator'

export function contact() {
	const formWrapper = document.querySelectorAll('.form-wrapper');
	const formInputs = document.querySelectorAll('.form-input');
	const submitButton = document.querySelector('.form-submit-button');

	onBlur(formInputs);
}