const searchBtn = document.getElementById("searchBtn");
const closeBtn = document.getElementById("closeBtn");
const textAns = document.getElementById("textAns");
const searchId = document.getElementById("searchId");
const ans = document.getElementsByClassName("ans")[0];
const inputStr = document.getElementById("searchId");
const loadingContainer = document.getElementById("loading-container");
const oppositeLang = document.getElementById("oppositeLang");
const copyBtn = document.getElementById("copyTextBtn");
const speakerBtn = document.getElementById("speakerBtn");
const speakerBtn2 = document.getElementById("speakerBtn2");

let sourceLang = document.getElementById("sourceLang");
let targetLang = document.getElementById("targetLang");

async function data() {
  const url = "https://text-translator2.p.rapidapi.com/translate";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "856a334aa5mshd1a198ec96e31c0p132bf9jsn9a9c66ad13a5",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: sourceLang.value,
      target_language: targetLang.value,
      text: inputStr.value,
    }),
  };

  try {
    loadingContainer.style.display = "flex"; // start the loader
    const response = await fetch(url, options);
    const result = await response.json();
    loadingContainer.style.display = "none"; // stop the loader
    let output = result.data.translatedText;
    textAns.innerHTML = output;
    textAns.style.padding = "20px";
    copyBtn.style.display = "block";
    ans.style.display = "flex";
  } catch (error) {
    console.error(error);
  }
}
// data();

searchBtn.addEventListener("click", () => {
  // call the functio with tha requred data like language and inputs
  data();
  // textAns.innerHTML = "output";
});
closeBtn.addEventListener("click", () => {
  ans.style.display = "none";
  inputStr.value = "";
  textAns.innerHTML = "";
  textAns.style.padding = "0px";
  copyBtn.style.display = "none";
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    searchBtn.click();
  }
});

// important features
// change or opposite the langwage btn...
oppositeLang.addEventListener("click", () => {
  let temp = sourceLang.value;
  sourceLang.value = targetLang.value;
  targetLang.value = temp;
});

// this function is use for copy the output text -->
copyBtn.addEventListener("click", () => {
  let textToCopy = textAns.innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => alert("Text has been copied to the clipboard"))
    .catch((err) => console.error("Unable to copy text", err));
});

function speak() {
  speakerBtn.classList.add("active");
  // var textToSpeak = document.getElementById("textToSpeak").value;
  const textToSpeak = inputStr.value;
  // Create an instance of SpeechSynthesisUtterance

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = sourceLang.value;

  // Use the speech synthesis API to speak the text
  window.speechSynthesis.speak(utterance);
  utterance.onend = () => {
    speakerBtn.classList.remove("active");
  };
}

function startListening() {
  let recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();

  recognition.interimResults = true;

  recognition.lang = sourceLang.value; // Set the language

  // add active class
  document.getElementById("micBtn").classList.add("active");

  recognition.onresult = function (event) {
    var spokenText = event.results[0][0].transcript;
    inputStr.value = spokenText;
    console.log(spokenText)
  };

  recognition.onerror = function (event) {
    console.error("Speech recognition error", event);
  };

  recognition.onend = function () {
    console.log("Speech recognition ended");
    document.getElementById("micBtn").classList.remove("active");
  };

  recognition.start();
}
