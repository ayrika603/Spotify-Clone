console.log('Welcome to Spotify');
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs= [
    {songName: "Butter", filePath: "1.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "Mic Drop", filePath: "2.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "Dope", filePath: "3.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "Blood Sweat & Tears", filePath: "4.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "Fire", filePath: "5.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "No More Dream", filePath: "6.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "Fake Love", filePath: "7.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "Spring Day", filePath: "8.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "ON", filePath: "9.mp3", coverPath:"BTS_-_Butter.png"},
    {songName: "Black Swan", filePath: "10.mp3", coverPath:"BTS_-_Butter.png"},
]
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;


})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })


}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0 
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
