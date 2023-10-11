const searchBtn = document.getElementById("searchBtn");
const closeBtn = document.getElementById("closeBtn");
const textAns = document.getElementById("textAns");
const searchId = document.getElementById("searchId");
const ans = document.getElementsByClassName("ans")[0];
const inputStr = document.getElementById("searchId");
const loadingContainer = document.getElementById("loading-container");
const oppositeLang = document.getElementById("oppositeLang");
const copyBtn = document.getElementById("copyBtn");

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
  //   textAns.innerHTML = "output";
});
closeBtn.addEventListener("click", () => {
  // ans.style.transform = 'translateY(-100px)';
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
