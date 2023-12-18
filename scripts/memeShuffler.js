let count = 0;
const testing = true;
const memeUrl = "data/meme-data.json";
const memeDisplay = document.querySelector("#meme-display");

async function getMemeData() {
  const response = await fetch(memeUrl);

  if (response.ok) {
    const data = await response.json();

    document.querySelector("#meme-button").addEventListener("click", () => {
      if (testing) {
        displayNewMemeTesting(data);
        count++;
        if (count == data.length) {
          count = 0;
        }
      } else {
        displayNewMemeProduction(data);
      }
    });
  }
}

function displayNewMemeProduction(data) {
  let min = Math.ceil(0);
  let max = Math.floor(data.length);
  let memeNumber = Math.floor(Math.random() * (max - min) + min);
  
  display(data[memeNumber]);
}

function displayNewMemeTesting(data) {
  display(data[count]);
  console.log(count);
}

function display(source) {
  let memePath = source.memeFilename;

  while (memeDisplay.firstChild) {
    memeDisplay.removeChild(memeDisplay.firstChild);
  }

  if (source.format == "image") {
    const memeImg = document.createElement("img");
    memeImg.setAttribute("src", memePath);
    memeDisplay.appendChild(memeImg);
  } else if (source.format == "video") {
    const memeVid = document.createElement("video");
    memeVid.setAttribute("src", memePath);
    memeVid.autoplay = true;
    memeVid.loop = true;

    const creditCaption = document.createElement("p");
    creditCaption.textContent =source.caption;

    memeDisplay.appendChild(memeVid);
    memeDisplay.appendChild(creditCaption);
  }
}

getMemeData();