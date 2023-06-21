let memeSources = [
    "memes/abbathMeme.JPG",
    "memes/blkMeme_1.JPG",
    "memes/blkMeme_2.JPG",
    "memes/blkMeme_3.JPG",
    "memes/blkMeme_4.JPG",
    "memes/blkMeme_5.JPG",
    "memes/cntryMeme.JPG",
    "memes/dthcrMeme_1.JPG",
    "memes/dthcrMeme_2.JPG",
    "memes/godsmackMeme_1.JPG",
    "memes/godsmackMeme_2.jpg",
    "memes/gthMeme.JPG",
    "memes/hvyMeme_1.jpg",
    "memes/hvyMeme_2.JPG",
    "memes/hvyMeme_3.JPG",
    "memes/hvyMeme_4.jpg",
    "memes/hvyMeme_5.JPG",
    "memes/hvyMeme_6.JPG",
    "memes/hvyMeme_7.JPG",
    "memes/hvyMeme_8.JPG",
    "memes/hvyMeme_9.JPG",
    "memes/hvyMeme_10.JPG",
    "memes/iPrevail_v_breakingBenjamin.JPG",
    "memes/kornMeme_1.jpg",
    "memes/kornMeme_2.JPG",
    "memes/lambOfGodMeme_1.JPG",
    "memes/lambOfGodMeme_2.JPG",
    "memes/linkinParkMeme.JPG",
    "memes/lornaShoreMeme_1.jpg",
    "memes/lornaShoreMeme_2.JPG",
    "memes/mcoreMeme.JPG",
    "memes/metallica_v_megadeth.JPG",
    "memes/metallicaMeme_1.JPG",
    "memes/metallicaMeme_2.JPG",
    "memes/metallicaMeme_3.JPG",
    "memes/metallicaMeme_4.JPG",
    "memes/nickelbackMeme.JPG",
    "memes/nuMeme_1.JPG",
    "memes/nuMeme_2.JPG",
    "memes/ozzyMeme_1.JPG",
    "memes/ozzyMeme_2.JPG",
    "memes/parkwayDriveMeme.JPG",
    "memes/pnkMeme.JPG",
    "memes/prgMeme_1.JPG",
    "memes/rammsteinMeme_1.JPG",
    "memes/rammsteinMeme_2.JPG",
    "memes/ratmMeme.JPG",
    "memes/rckMeme.JPG",
    "memes/robZombieMeme.JPG",
    "memes/skaMeme.JPG",
    "memes/slipknotMeme_1.JPG",
    "memes/slipknotMeme_2.JPG",
    "memes/warrantMeme.JPG",
    "memes/whitechapelMeme.JPG"
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