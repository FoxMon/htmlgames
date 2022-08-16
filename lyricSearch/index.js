const form = document.getElementById("form")
const search = document.getElementById("search")
const result = document.getElementById("result")
const more = document.getElementById("more")

const url = "https://api.lyrics.ovh"

async function searchMusic(term) {
    const res = await fetch(`${url}/suggest/${term}`)
    const data = await res.json()
    printData(data)
}

function printData(data) {
    result.innerHTML = `
        <ul class="song">
            ${data.data.map(
                (song) =>
                    `<li>
                <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
                </li>`
            )}
        </ul>
    `
    if (data.prev || data.next) {
        more.innerHTML = `
            ${
                data.prev
                    ? `<button class="btn" onclick="getMoreMusics('${data.prev}')">Prev</button>`
                    : ""
            }
            ${
                data.next
                    ? `<button class="btn" onclick="getMoreMusics('${data.next}')">Next</button>`
                    : ""
            }
        `
    } else {
        more.innerHTML = ""
    }
}

async function getMoreMusics(musicUrl) {
    const res = await fetch(`${musicUrl}`)
    const data = await res.json()
    printData(data)
}

async function getLyrics(artist, title) {
    const res = await fetch(`${url}/v1/${artist}/${title}`)
    const data = await res.json()
    if (data.error) {
        result.innerHTML = data.error
    } else {
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>")
        result.innerHTML = `
            <h2><strong>${artist}</strong> - ${title}</h2>
            <span>${lyrics}</span>
        `
    }
    more.innerHTML = ""
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchTerm = search.value.trim()
    if (!searchTerm) alert("Please type in a search term")
    else searchMusic(searchTerm)
})

result.addEventListener("click", (e) => {
    const target = e.target
    if (target.tagName == "BUTTON") {
        const artist = target.getAttribute("data-artist")
        const musicTitle = target.getAttribute("data-songtitle")
        getLyrics(artist, musicTitle)
    }
})
