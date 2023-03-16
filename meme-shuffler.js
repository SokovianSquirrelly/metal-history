let memeSources = [
    "memes/abbathMeme.JPG",
    "memes/blkMeme.JPG",
    "memes/cntryMeme.JPG",
    "memes/dthcrMeme.JPG",
    "memes/godsmackMeme_1.JPG",
    "memes/godsmackMeme_2.jpg",
    "memes/hvyMeme_1.jpg",
    "memes/hvyMeme_2.JPG",
    "memes/hvyMeme_3.JPG",
    "memes/hvyMeme_4.jpg",
    "memes/hvyMeme_5.JPG",
    "memes/hvyMeme_6.JPG",
    "memes/kornMeme.jpg",
    "memes/linkinParkMeme.JPG",
    "memes/lornaShoreMeme.jpg",
    "memes/metallicaMeme_1.JPG",
    "memes/metallicaMeme_2.JPG",
    "memes/pnkMeme.JPG",
    "memes/prgMeme_1.JPG",
    "memes/rammsteinMeme.JPG",
    "memes/ratmMeme.JPG",
    "memes/slipknotMeme.JPG"
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