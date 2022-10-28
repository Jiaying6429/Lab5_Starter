// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const horn = document.getElementById("horn-select");

  const audio = document.querySelector("audio");
  const button = document.querySelector("button");

  const img = document.querySelector("img");
  const volume = document.getElementById("volume");

  const voiceImg = document.querySelector("div>img");

  horn.addEventListener('change', () => {
    img.setAttribute("src", `/assets/images/${horn.value}.svg`);
    audio.setAttribute("src", `/assets/audio/${horn.value}.mp3`);
  });

  button.addEventListener('click', () => {
    audio.play();
    jsConfetti.addConfetti();
  });

  volume.addEventListener('change', () => {
    audio.volume = Number(volume.value) / 100;

    if (volume.value == 0) {
      voiceImg.src = `assets/icons/volume-level-${volume.value}.svg`;
      voiceImg.alt = "Volume level 0";
    } else if (volume.value >= 1 && volume.value < 33) {
      voiceImg.src = `assets/icons/volume-level-1.svg`;
      voiceImg.alt = "Volume level 1";
    } else if (volume.value >=33 && volume.value < 67) {
      voiceImg.src = `assets/icons/volume-level-2.svg`;
      voiceImg.alt = "Volume level 2";
    } else {
      voiceImg.src = `assets/icons/volume-level-3.svg`;
      voiceImg.alt = "Volume level 3";
    }
  });
}