import { tabs } from '../components/tabs'
import notifications from '../components/notifications'

export function landing() {

	const newsletterTrigger = document.getElementById('newsletter-submit');
	const testNotificationContent = document.getElementById('test-notification');
	const nav = document.querySelector('.nav');
	const testNotification = new notifications({
		content: testNotificationContent,
		timeout: 2500,
		type: 'success'
	});

	changeNavigation();
	tabs();


	function changeNavigation() {
		nav.classList.add('landing-nav');
	}

	function newsLetter() {
		const test = new Event('test-message');
		window.dispatchEvent(test);
	}

	function handleKey(e) {
		if (e.which === 13) {
			newsLetter();
		}
	}

	newsletterTrigger.addEventListener('click', newsLetter, false);
	window.addEventListener('test-message', testNotification.open, false);
}