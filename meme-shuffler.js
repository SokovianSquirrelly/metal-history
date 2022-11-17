let memeSources = [
    "memes/hvyMeme_1.jpg",
    "prgMeme_1.JPG"
];

function displayNewMeme()
{
    let memeNumber = Math.floor(Math.random(memeSources.length));
    let memePath = memeSources[memeNumber];
    document.getElementById("meme-image").setAttribute("src", memePath);
}

document.querySelector('#meme-button').addEventListener('click', displayNewMeme);