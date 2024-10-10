const audio = document.getElementById('audio');
const playPauseBtns = document.querySelectorAll('button[data-audio]');
const progressBars = document.querySelectorAll('.progress-bar'); 

let isPlaying = false;
let currentAudioSrc = '';
let currentProgressBar = null;

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
    if (currentProgressBar) {
        const progress = (audio.currentTime / audio.duration) * 100;
        currentProgressBar.value = progress;
    }
});

progressBars.forEach((bar) => {
    bar.addEventListener('input', () => {
        const seekTime = (bar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });
});
