let memeSources = [
  "memes/5fdpMeme.JPG",
  "memes/abbathMeme.JPG",
  "memes/acdcMeme.JPG",
  "memes/amonAmarthMeme.JPG",
  "memes/blackSabbathMeme.JPG",
  "memes/blkMeme_1.JPG",
  "memes/blkMeme_2.JPG",
  "memes/blkMeme_3.JPG",
  "memes/blkMeme_4.JPG",
  "memes/blkMeme_5.JPG",
  "memes/blkMeme_6.JPG",
  "memes/blueOysterCultMeme.JPG",
  "memes/cannibalCorpseMeme.JPG",
  "memes/cntryMeme.JPG",
  "memes/deadKennedysMeme.JPG",
  "memes/disturbedMeme.JPG",
  "memes/dthcrMeme_1.JPG",
  "memes/dthcrMeme_2.JPG",
  "memes/dthMeme_1.JPG",
  "memes/dthMeme_2.JPG",
  "memes/eminemMeme.JPG",
  "memes/glam_v_grunge.JPG",
  "memes/godsmackMeme_1.JPG",
  "memes/godsmackMeme_2.jpg",
  "memes/gretaVanFleet_v_ledZeppelin.JPG",
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
  "memes/hvyMeme_11.JPG",
  "memes/hvyMeme_12.JPG",
  "memes/hvyMeme_13.JPG",
  "memes/hvyMeme_14.JPG",
  "memes/hvyMeme_15.JPG",
  "memes/hvyMeme_16.JPG",
  "memes/hvyMeme_17.JPG",
  "memes/hvyMeme_18.JPG",
  "memes/hvyMeme_19.JPG",
  "memes/hvyMeme_20.JPG",
  "memes/iPrevail_v_breakingBenjamin.JPG",
  "memes/killersMeme.JPG",
  "memes/kornMeme_1.jpg",
  "memes/kornMeme_2.JPG",
  "memes/lambOfGodMeme_1.JPG",
  "memes/lambOfGodMeme_2.JPG",
  "memes/linkinParkMeme.JPG",
  "memes/lornaShoreMeme_1.jpg",
  "memes/lornaShoreMeme_2.JPG",
  "memes/mcoreMeme_1.JPG",
  "memes/mcoreMeme_2.JPG",
  "memes/metallica_v_megadeth.JPG",
  "memes/metallicaMeme_1.JPG",
  "memes/metallicaMeme_2.JPG",
  "memes/metallicaMeme_3.JPG",
  "memes/metallicaMeme_4.JPG",
  "memes/metallicaMeme_5.JPG",
  "memes/metallicaMeme_6.JPG",
  "memes/misfitsMeme.JPG",
  "memes/morbidAngelMeme.JPG",
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
  "memes/rammsteinMeme_3.JPG",
  "memes/ratmMeme.JPG",
  "memes/rckMeme.JPG",
  "memes/robZombieMeme.JPG",
  "memes/skaMeme.JPG",
  "memes/slayerMeme_1.JPG",
  "memes/slipknotMeme_1.JPG",
  "memes/slipknotMeme_2.JPG",
  "memes/soad_v_greenDay.JPG",
  "memes/warrantMeme.JPG",
  "memes/whitechapelMeme_1.JPG",
  "memes/whitechapelMeme_2.JPG"
];

let count = 0;
const testing = false;

function displayNewMemeProduction() {
  let min = Math.ceil(0);
  let max = Math.floor(memeSources.length);
  let memeNumber = Math.floor(Math.random() * (max - min) + min);
  let memePath = memeSources[memeNumber];
  document.getElementById("meme-image").setAttribute("src", memePath);
}

function displayNewMemeTesting() {
  let memePath = memeSources[count];
  document.getElementById("meme-image").setAttribute("src", memePath);
  console.log(count);
}

document.querySelector("#meme-button").addEventListener("click", () => {
  if (testing) {
    displayNewMemeTesting();
    count++;
    if (count == memeSources.length) {
      count = 0;
    }
  } else {
    displayNewMemeProduction();
  }
});
