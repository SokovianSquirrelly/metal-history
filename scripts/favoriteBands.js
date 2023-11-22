const favBandArea = document.querySelector("#fav-band-body");
const favBandUrl = "data/fav-band-data.json";

async function getBandData() {
  const response = await fetch(favBandUrl);

  if (response.ok) {
    const data = await response.json();
    //console.table(data);
    displayData(data);
  }
}

function displayData(data) {
  data.forEach((band) => {
    const entry = document.createElement("section");
    const bandName = document.createElement("h3");
    const bandImage = document.createElement("img");
    const bandJoke = document.createElement("p");
    entry.classList.add("band-entry");

    bandName.textContent = band.bandName;
    entry.appendChild(bandName);

    if (band.bandName == "Rick Astley") {
      const bandVideo = document.createElement("video");
      bandVideo.id = "rickroll";
      bandVideo.playsInline = true;
      bandVideo.muted = "muted";
      bandVideo.autoplay = true;

      const source = document.createElement("source");
      source.setAttribute("src", "videos/never-gonna-give-you-up.mp4");
      source.setAttribute("type", "video/mp4");

      bandVideo.appendChild(source);
      entry.appendChild(bandVideo);
    } else {
      bandImage.setAttribute("src", band.imageSource);
      bandImage.setAttribute("alt", band.imageAlt);
      bandImage.setAttribute("loading", "lazy");

      entry.appendChild(bandImage);
    }

    if (band.bandName == "Van Halen") {
      bandJoke.textContent =
        "Weirdly enough, you relate to Bill and Ted. Excellent! ";
      const secondLine = document.createElement("i");
      secondLine.textContent = "shredding guitar noises intensify";
      bandJoke.appendChild(secondLine);
    } else {
      bandJoke.textContent = band.joke;
    }

    entry.appendChild(bandJoke);
    favBandArea.appendChild(entry);
  });
}

function rickrollUser() {
  var windowHeight = window.innerHeight;
  var videoEl = document.querySelector("#rickroll");

  var videoHeight = videoEl.clientHeight;
  var videoClientRect = videoEl.getBoundingClientRect().top;

  if (
    videoClientRect <= windowHeight - videoHeight * 0.5 &&
    videoClientRect >= 0 - videoHeight * 0.5
  ) {
    videoEl.muted = false;
    videoEl.play();
  } else {
    videoEl.pause();
  }
}

getBandData();

window.addEventListener("load", rickrollUser);
window.addEventListener("scroll", rickrollUser);
