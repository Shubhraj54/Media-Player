document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('video-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const stopButton = document.getElementById('stop-button');
    const previousButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');
    const volumeSlider = document.getElementById('volume-slider');
    const muteButton = document.getElementById('mute-button');
    const progressSlider = document.getElementById('progress-slider');
    const currentTimeSpan = document.getElementById('current-time');
    const totalDurationSpan = document.getElementById('total-duration');

    // Play button functionality
    playButton.addEventListener('click', function () {
        videoPlayer.play();
    });

    // Pause button functionality
    pauseButton.addEventListener('click', function () {
        videoPlayer.pause();
    });

    // Stop button functionality
    stopButton.addEventListener('click', function () {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    });

    // Previous button functionality (dummy functionality, replace with actual implementation)
    previousButton.addEventListener('click', function () {
        console.log('Previous track button clicked');
    });

    // Next button functionality (dummy functionality, replace with actual implementation)
    nextButton.addEventListener('click', function () {
        console.log('Next track button clicked');
    });

    // Volume slider functionality
    volumeSlider.addEventListener('input', function () {
        videoPlayer.volume = volumeSlider.value / 100;
    });

    // Mute button functionality
    muteButton.addEventListener('click', function () {
        videoPlayer.muted = !videoPlayer.muted;
        if (videoPlayer.muted) {
            muteButton.textContent = 'Unmute';
        } else {
            muteButton.textContent = 'Mute';
        }
    });

    // Progress slider functionality
    progressSlider.addEventListener('input', function () {
        videoPlayer.currentTime = (videoPlayer.duration * progressSlider.value) / 100;
    });

    // Update progress slider and time displays
    videoPlayer.addEventListener('timeupdate', function () {
        progressSlider.value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
        currentTimeSpan.textContent = formatTime(videoPlayer.currentTime);
        totalDurationSpan.textContent = formatTime(videoPlayer.duration);
    });

    // Helper function to format time in MM:SS format
    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    const speedSlider = document.getElementById('speed-slider');
    const speedLabel = document.getElementById('speed-label');

    speedSlider.addEventListener('input', function () {
    videoPlayer.playbackRate = parseFloat(speedSlider.value);
    speedLabel.textContent = speedSlider.value + 'x';
    });

//     const playPauseButton = document.getElementById('play-pause-button');

//     playPauseButton.addEventListener('click', function () {
//     if (videoPlayer.paused) {
//         videoPlayer.play();
//         playPauseButton.textContent = 'Pause';
//     } else {
//         videoPlayer.pause();
//         playPauseButton.textContent = 'Play';
//     }
// });


});
