const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

const progressContainer = document.getElementById("progress-container")
const progress = document.getElementById("progress")
const audio = document.getElementById("audio")
const title = document.getElementById("title")
const cover = document.getElementById("cover")
const currTime = document.querySelector("#currTime")
const durTime = document.querySelector("#durTime")

const musics = ["first", "second", "third", "fourth"]
let musicIndex = 0

loadMusic(musics[musicIndex])

function loadMusic(music) {
    title.innerText = music
    audio.src = `music/${music}.mp3`
    cover.src = `images/${music}.jpg`
}

function playMusic() {
    musicContainer.classList.add("play")
    playBtn.querySelector("i.fas").classList.remove("fa-play")
    playBtn.querySelector("i.fas").classList.add("fa-pause")
    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove("play")
    playBtn.querySelector("i.fas").classList.add("fa-play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")
    audio.pause()
}

function prevSong() {
    musicIndex--
    if (musicIndex < 0) musicIndex = musics.length - 1
    loadMusic(musics[musicIndex])
    playMusic()
}

function nextSong() {
    musicIndex++
    if (musicIndex > musics.length - 1) musicIndex = 0
    loadMusic(musics[musicIndex])
    playMusic()
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play")
    if (isPlaying) pauseSong()
    else playMusic()
})

progressContainer.addEventListener("click", setProgress)
prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)
audio.addEventListener("timeupdate", updateProgress)
audio.addEventListener("ended", nextSong)
