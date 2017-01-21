import { tabs } from '../components/tabs'
import notifications from '../components/notifications'

export function landing() {
	tabs();

	var newsletterTrigger = document.getElementById('newsletter-submit');
	var testNotificationContent = document.getElementById('test-notification');
	var testNotification = new notifications({
		content: testNotificationContent,
		timeout: 2500,
		type: 'success'
	});


	function newsLetter() {
		var test = new Event('test-message');
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