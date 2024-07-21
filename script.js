// initialize the variable
let songIndex = 0;
let audioElement = new Audio("0.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
// let songItem=Array.from(document.getElementById("songitem"));
let songs = [{ songname: "hass hass ", filePath: "/home/pop/workspace/project_spotify/0.mp3",coverPath:"/home/pop/workspace/project_spotify/0.jpeg"},
{ songname: "Jhume jo pathan", filePath: "/home/pop/workspace/project_spotify/1.mp3",coverPath:"/home/pop/workspace/project_spotify/1.jpeg" },
{ songname: "Tujhme khoya rhun mai", filePath: "/home/pop/workspace/project_spotify/2.mp3",coverPath:"/home/pop/workspace/project_spotify/2.jpeg" },
{ songname: "Suniyan suniyan", filePath: "/home/pop/workspace/project_spotify/3.mp3",coverPath:"/home/pop/workspace/project_spotify/3.jpeg"},
{ songname: "Tere Hawale", filePath: "/home/pop/workspace/project_spotify/4.mp3",coverPath:"/home/pop/workspace/project_spotify/4.jpeg"}
]

// songItem.forEach((element)=>{
//     element.getElemensByTagName("img")[0].src=songs[i].songName.filePath;
// })


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity=0;
    }
});
// listen to events
// myProgressBar.addEventListener('timeupdate', () => {
//     console.log('timeupdate');
//     //  
// })



audioElement.addEventListener('timeupdate', () => {
    // Update progress bar
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    // console.log(progress)
    myProgressBar.value = progress;
}); 

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

