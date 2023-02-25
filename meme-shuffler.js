let memeSources = [
    "memes/abbathMeme.jpg",
    "memes/blkMeme.jpg",
    "memes/cntryMeme.jpg",
    "memes/dthcrMeme.jpg",
    "memes/hvyMeme_1.jpg",
    "memes/prgMeme_1.JPG",
    "memes/hvyMeme_2.JPG",
    "memes/hvyMeme_3.JPG",
    "memes/hvyMeme_4.jpg",
    "memes/hvyMeme_5.jpg",
    "memes/hvyMeme_6.jpg",
    "memes/godsmackMeme_1.JPG",
    "memes/godsmackMeme_2.jpg",
    "memes/kornMeme.jpg",
    "memes/linkinParkMeme.jpg",
    "memes/lornaShoreMeme.jpg",
    "memes/metallicaMeme_1.jpg",
    "memes/metallicaMeme_2.jpg",
    "memes/pnkMeme.jpg",
    "memes/rammsteinMeme.JPG",
    "memes/ratmMeme.jpg",
    "memes/slipknotMeme.jpg"
];

function displayNewMeme()
{
    let min = Math.ceil(0);
    let max = Math.floor(memeSources.length);
    let memeNumber = Math.floor(Math.random() * (max - min) + min);
    let memePath = memeSources[memeNumber];
    document.getElementById("meme-image").setAttribute("src", memePath);
}

document.querySelector('#meme-button').addEventListener('click', displayNewMeme);