// // initialize the variable
// let songIndex = 0;
// let audioElement = new Audio("0.mp3");
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById("myProgressBar");
// let gif = document.getElementById("gif");
// let songItem = Array.from(document.getElementsByClassName("songitem"));
// let songs = [
//     { songname: "hass hass", filePath: "0.mp3", coverPath: "0.jpeg" },
//     { songname: "Jhume jo pathan", filePath: "1.mp3", coverPath: "1.jpeg" },
//     { songname: "Tujhme khoya rhun mai", filePath: "2.mp3", coverPath: "2.jpeg" },
//     { songname: "Suniyan suniyan", filePath: "3.mp3", coverPath: "3.jpeg" },
//     { songname: "Tere Hawale", filePath: "4.mp3", coverPath: "4.jpeg" }
// ];

// songItem.forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
// });

// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove("fa-play");
//         masterPlay.classList.add("fa-pause");
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterPlay.classList.remove("fa-pause");
//         masterPlay.classList.add("fa-play");
//         gif.style.opacity = 0;
//     }
// });

// audioElement.addEventListener('timeupdate', () => {
//     // Update progress bar
//     let progress = (audioElement.currentTime / audioElement.duration) * 100;
//     myProgressBar.value = progress;
// });

// // listen to events
// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// });


// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-pause');
//         element.classList.add('fa-play');
//     });
// };

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = i;
//         audioElement.src = songs[songIndex].filePath;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         e.target.classList.remove('fa-play');
//         e.target.classList.add('fa-pause');
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//         gif.style.opacity = 1;
//     });
// });







// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-pause');
//         element.classList.add('fa-play');
    
//     });
// };

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         e.target.classList.remove('fa-play');
//         e.target.classList.add('fa-pause');
//         audioElement.src = '1.mp3';
//         audioElement.currentTime = 0;
//         audioElement.play();
//     });
// });





let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songitem"));
let songName  = document.getElementById('gif'); 
let songs = [
    { songname: "hass hass", filePath: "0.mp3", coverPath: "0.jpeg" },
    { songname: "Jhume jo pathan", filePath: "1.mp3", coverPath: "1.jpeg" },
    { songname: "Tujhme khoya rhun mai", filePath: "2.mp3", coverPath: "2.jpeg" },
    { songname: "Suniyan suniyan", filePath: "3.mp3", coverPath: "3.jpeg" },
    { songname: "Tere Hawale", filePath: "4.mp3", coverPath: "4.jpeg" }
];
let audioElement = new Audio(songs[songIndex].filePath);

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});

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

audioElement.addEventListener('timeupdate', () => {
    // Update progress bar
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};

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

 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = songs[songIndex].filePath;
   
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    
 })


 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})




