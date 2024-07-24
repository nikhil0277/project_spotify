let songIndex = 0;
const masterPlay = document.getElementById('masterPlay');
const myProgressBar = document.getElementById("myProgressBar");
const gif = document.getElementById("gif");
const songItems = Array.from(document.getElementsByClassName("songitem"));
const masterSongName = document.getElementById('gif'); 

const songs = [
    { songname: "hass hass", filePath: "0.mp3", coverPath: "0.jpeg" },
    { songname: "Jhume jo pathan", filePath: "1.mp3", coverPath: "1.jpeg" },
    { songname: "Tujhme khoya rhun mai", filePath: "2.mp3", coverPath: "2.jpeg" },
    { songname: "Suniyan suniyan", filePath: "3.mp3", coverPath: "3.jpeg" },
    { songname: "Tere Hawale", filePath: "4.mp3", coverPath: "4.jpeg" }
    
];

let audioElement = new Audio(songs[songIndex].filePath);

// Initialize song list with cover and song name
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
    gif.style.opacity=0;

});

// Play/Pause functionality
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
});

// Update progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Seek functionality
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Helper function to reset play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};

// Helper function to update the play/pause icon of the current song
const updatePlayPauseIcon = (index) => {
    const songItemPlay = songItems[index].getElementsByClassName('songItemPlay')[0];
    songItemPlay.classList.remove('fa-play');
    songItemPlay.classList.add('fa-pause');
};

// Individual song play functionality
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = i;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    });
});

// Next song functionality
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    updatePlayPauseIcon(songIndex);
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
});

// Previous song functionality
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    updatePlayPauseIcon(songIndex);
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
});
