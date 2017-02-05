import { init, animate } from '../components/about-animation'

export function about() {
	const video = document.querySelector('.about-video');
	const playButton = document.querySelector('.play-button');
	//const muteButton = document.querySelector('.mute');
	const fullScreenButton = document.querySelector('.full-screen');
	const progressContainer = document.querySelector('.progress-container');
	const progressHolder = document.querySelector('.progress-box');
	const progressBar = document.querySelector('.play-progress');
	const seekBar = document.querySelector('.seek-bar');
	//const volumeBar = document.querySelector('.volume-bar');

	init();
	animate();
	addEvents();

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
			muteButton.innerHTML = 'Unmute';
		} else {
			video.muted = false;
			muteButton.innerHTML = 'Mute';
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

	function updatePlayProgress() {
		progressBar.style.width = ((video.currentTime / video.duration) * (progressHolder.offsetWidth) + 'px');
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
	}

	function addEvents() {
		playButton.addEventListener('click', togglePlay, false);
	//	muteButton.addEventListener('click', toggleMute, false);
		fullScreenButton.addEventListener('click', toggleFullscreen, false);
		seekBar.addEventListener('change', seek, false);
		video.addEventListener('timeupdate', updatePlayProgress, false);
		seekBar.addEventListener('mousedown', pause, false);
		seekBar.addEventListener('mouseup', play, false);
	//	volumeBar.addEventListener('change', updateVolume, false);
	}
}