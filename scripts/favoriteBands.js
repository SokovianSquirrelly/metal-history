const favBandArea = document.querySelector("#fav-band-body");
const favBandUrl = "data/fav-band-data.json";

async function getBandData() {
  const response = await fetch(favBandUrl);

  if (response.ok) {
    const data = await response.json();
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
      bandVideo.loop = true;
      bandVideo.autoplay = true;

      const source = document.createElement("source");
      source.setAttribute("src", "videos/never-gonna-give-you-up.mp4");
      source.setAttribute("type", "video/mp4");

      bandVideo.appendChild(source);
      entry.appendChild(bandVideo);
    } else if (band.bandName == "Pentagram") {
      const bandVideo = document.createElement("video");
      bandVideo.id = "pentagramClip";
      bandVideo.playsInline = true;
      bandVideo.muted = "muted";
      bandVideo.loop = true;
      bandVideo.autoplay = true;

      const source = document.createElement("source");
      source.setAttribute("src", "videos/pentagram-edit.mp4");
      source.setAttribute("type", "video/mp4");

      bandVideo.appendChild(source);
      entry.appendChild(bandVideo);
    } else {
      bandImage.setAttribute("src", band.imageSource);
      bandImage.setAttribute("alt", band.imageAlt);
      bandImage.setAttribute("loading", "lazy");

      entry.appendChild(bandImage);
    }

    bandJoke.textContent = "";

    band.joke.forEach((substring) => {
      if (substring[0] == "*") {
        let snippet = document.createElement("i");
        snippet.textContent = substring.substr(1);
        bandJoke.appendChild(snippet);
      } else {
        let snippet = document.createTextNode(substring);
        bandJoke.appendChild(snippet);
      }
    });

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

function playPentagramClip() {
  var windowHeight = window.innerHeight;
  var videoEl = document.querySelector("#pentagramClip");

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

window.addEventListener("load", playPentagramClip);
window.addEventListener("scroll", playPentagramClip);
