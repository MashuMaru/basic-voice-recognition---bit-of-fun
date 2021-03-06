const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "Not too bad.",
  "I am well thank you!",
  "I dont really want to talk right now.",
];

const weather = [
  "Why dont you just look out the window?",
  "What am I, a weather man? Jeez.",
  "Its sunny.",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  var content = document.querySelector('.content');
  content.textContent = 'Voice is activated.';
  console.log("voice is activated.");
};

recognition.onresult = (event) => {
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "i dont know what you said.";

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes("weather")) {
    const finalText2 = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText2;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
