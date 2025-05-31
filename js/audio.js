const audio = document.getElementById('audio');
const playPauseBtns = document.querySelectorAll('button[data-audio]');
const progressBars = document.querySelectorAll('.progress-bar'); 
const timeDisplays = document.querySelectorAll('.line-content span'); 

let isPlaying = false;
let currentAudioSrc = '';
let currentProgressBar = null;
let currentTimeDisplay = null;
let currentDurationDisplay = null; 

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
};

const updatePlayPauseButton = (button, isPlaying) => {
    button.textContent = isPlaying ? '❚❚' : '►';
};


playPauseBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        const audioSrc = button.getAttribute('data-audio');
        
        if (currentAudioSrc !== audioSrc) {
            audio.src = audioSrc;
            audio.play();
            currentAudioSrc = audioSrc;
            currentProgressBar = progressBars[index];

            currentTimeDisplay = timeDisplays[index * 2]; // time span
            currentDurationDisplay = timeDisplays[index * 2 + 1]; // time span
        
            currentDurationDisplay.textContent = `-${formatTime(audio.duration)}`;
         
            isPlaying = true;

            updatePlayPauseButton(button, isPlaying);
            playPauseBtns.forEach(btn => {
                if (btn !== button) {
                    btn.textContent = '►';
                }
            });
        } else {
            if (isPlaying) {
                audio.pause();
                updatePlayPauseButton(button, false);
            } else {
                audio.play();
                updatePlayPauseButton(button, true);
            }
            isPlaying = !isPlaying;
        }
    });
});

audio.addEventListener('timeupdate', () => {
    if (currentProgressBar && currentTimeDisplay) {
        const progress = (audio.currentTime / audio.duration) * 100;
        currentProgressBar.value = progress;
        currentProgressBar.style.setProperty('--progress', `${progress}%`);
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        
        // remaining time display
        currentDurationDisplay.textContent = `-${formatTime(audio.duration - audio.currentTime)}`;
    }
});

progressBars.forEach((bar) => {
    bar.addEventListener('input', () => {
        const seekTime = (bar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });
});
