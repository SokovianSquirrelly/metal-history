let memeSources = [
    "memes/hvyMeme_1.jpg",
    "memes/prgMeme_1.JPG",
    "memes/hvyMeme_2.JPG",
    "memes/gshsmk.JPG"
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