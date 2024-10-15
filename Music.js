
*JavaScript (script.js)*

```
// Music data
const music = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "song2.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "song3.mp3"
    }
];

// Initialize variables
let currentSong = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');

// Load initial song
loadSong();

// Play button event listener
playButton.addEventListener('click', () => {
    audio.play();
});

// Pause button event listener
pauseButton.addEventListener('click', () => {
    audio.pause();
});

// Previous button event listener
prevButton.addEventListener('click', () => {
    currentSong = (currentSong - 1 + music.length) % music.length;
    loadSong();
    audio.play();
});

// Next button event listener
nextButton.addEventListener('click', () => {
    currentSong = (currentSong + 1) % music.length;
    loadSong();
    audio.play();
});

// Audio event listener
audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// Volume event listener
volume.addEventListener('input', () => {
    audio.volume = volume.value;
});

// Load song function
function loadSong() {
    audio.src = music[currentSong].src;
    title.textContent = music[currentSong].title;
    artist.textContent = music[currentSong].artist;
}
