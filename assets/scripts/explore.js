// explore.js
window.addEventListener("DOMContentLoaded", init);

function init() {
  const speechSynthesis = window.speechSynthesis;

  const voiceSelect = document.getElementById("voice-select");
  const text = document.getElementById("text-to-speak");
  
  const button = document.querySelector("button");
  const img = document.querySelector("img");

  let voices = [];

  speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  };

  button.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(text.value);

    for(let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceSelect.selectedOptions[0].getAttribute('data-name')) {
        utterance.voice = voices[i];
      }
    }

    speechSynthesis.speak(utterance);

    img.setAttribute('src', 'assets/images/smiling-open.png')

    utterance.addEventListener('end', () => {
      img.setAttribute('src', 'assets/images/smiling.png')
    });
  })
}