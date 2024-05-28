console.log("Welcome to Spotify")

// initialise the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let song = [
    { SongName: "Warriyo - Mortals (feat. Laura Brehm) [NCS Release]", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { SongName: "Cielo - Huma-Huma", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { SongName: "DEAF KEV - Invincible [NCS Release] - 320K", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { SongName: "Different Heaven & EHIDE - My Heart [NCS Release]-320K", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { SongName: "Janji-Heaven-Tonight-Feat-Johning-NCS-Release", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { SongName: "Rabba - Salam-e-ishq", filePath: "song/2.mp3", coverPath: "covers/6.jpg" },
    { SongName: "Baby - Salam-e-ishq", filePath: "song/2.mp3", coverPath: "covers/7.jpg" },
    { SongName: "Jai Shree Ram - Salam-e-ishq", filePath: "song/3.mp3", coverPath: "covers/8.jpg" },
    { SongName: "Bajrang Bali - Salam-e-ishq", filePath: "song/3.mp3", coverPath: "covers/9.jpg" },
    { SongName: "Tum Ho - Salam-e-ishq", filePath: "song/2.mp3", coverPath: "covers/10.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = song[i].SongName;
})
// Audio play element 

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;

    }
})

// Listen to Events 
audioElement.addEventListener('timeupdate', () => {

    // update seekbar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')


    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndexindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText = song[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1

    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1

    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
