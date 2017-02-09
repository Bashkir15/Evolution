import { init, animate } from '../components/about-animation'
import Search from '../components/search'
import offside from '../components/offside'

export function about() {
	const menuTrigger = document.querySelector('.menu-icon');
	const video = document.querySelector('.about-video');
	const playButton = document.querySelector('.play-button');
	const muteButton = document.querySelector('.mute');
	const fullScreenButton = document.querySelector('.full-screen');
	const seekBar = document.querySelector('.seek-bar');
	const volumeBar = document.querySelector('.volume-button');
	const muteIcon = muteButton.querySelector('span');
	const items = document.querySelectorAll('.timeline-list li');

	const sideNav = new offside();
	const search = new Search();

	let scrolling = false;

	init();
	animate();
	addEvents();

	function isInViewport(el) {
		let rect = el.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function timelineEffect() {
		let i;
		let len = items.length;

		for (i = 0; i < len; i++) {
			if (isInViewport(items[i])) {
				items[i].classList.add('in-view');
			}
		}
	}

	function scrollThrottle() {
		if (!scrolling) {
			window.requestAnimationFrame(() => {
				timelineEffect();
				scrolling = true;
			});
		}

		scrolling = false;
	}

	function togglePlay() {
		const playIcon = playButton.querySelector('span');

		if (video.paused == true) {
			video.play();
			playIcon.classList.remove('icon-play_arrow');
			playIcon.classList.add('icon-pause');
		} else {
			video.pause();
			playIcon.classList.remove('icon-pause');
			playIcon.classList.add('icon-play_arrow');
		}
	}

	function toggleMute() {
		if (video.muted == false) {
			video.muted = true;
			muteIcon.classList.remove('icon-volume_up');
			muteIcon.classList.add('icon-volume_off');
		} else {
			video.muted = false;
			video.volume = lastVolume;
			muteIcon.classList.remove('icon-volume_off');
			muteIcon.classList.add('icon-volume_up');
		}
	}

	function toggleFullscreen() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen();
		}
	}

	function seek() {
		let time = video.duration * (seekBar.value / 100);
		video.currentTime = time;
	}

	function updateTime() {
		let value = (100 / video.duration) * video.currentTime;
		seekBar.value = value;
	}

	function play() {
		video.play();
	}

	function pause() {
		video.pause();
	}

	function updateVolume() {
		video.volume = volumeBar.value;

		if (video.volume == 0) {
			muteIcon.classList.remove('icon-volume_up');
			muteIcon.classList.add('icon-volume_off');
		} else {
			if (muteIcon.classList.contains('icon-volume_off')) {
				muteIcon.classList.remove('icon-volume_off');
				muteIcon.classList.add('icon-volume_up');
			}
		}
	}

	function addEvents() {
		playButton.addEventListener('click', togglePlay, false);
		muteButton.addEventListener('click', toggleMute, false);
		fullScreenButton.addEventListener('click', toggleFullscreen, false);
		//progressHolder.addEventListener('mouseup', play, false);
		seekBar.addEventListener('change', seek, false);
		video.addEventListener('timeupdate', updateTime, false);
		seekBar.addEventListener('mousedown', pause, false);
		seekBar.addEventListener('mouseup', play, false);
		volumeBar.addEventListener('change', updateVolume, false);

		menuTrigger.addEventListener('click', sideNav.close, false);

		window.addEventListener('load', timelineEffect);
		window.addEventListener('scroll', scrollThrottle);
	}
}