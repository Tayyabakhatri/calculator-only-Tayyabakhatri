function getNumber(num) {
  var numValue = num.innerText;

  var inputData = document.getElementById("data");
  inputData.value += numValue;
}
function result() {
  var inputData = document.getElementById("data");
  inputData.value = eval(inputData.value);
}
function del() {
  var inputData = document.getElementById("data");
  var currentValue = inputData.value;
  var newValue = currentValue.slice(0, -1);
  inputData.value = newValue;
}

var memory = 0;
function memoryPlus() {
  var currentValue = parseFloat(document.getElementById("data").value);
  memory += currentValue;
  document.getElementById("data").value = memory;
}
function memoryMinus() {
  var currentValue = parseFloat(document.getElementById("data").value);
  memory -= currentValue;
  document.getElementById("data").value = memory;
}
function memoryClear() {
  document.getElementById("data").value = "";
  memory = 0;
}
function clearData() {
  document.getElementById("data").value = "";
}

function speak(text) {
  if (isReadAloudEnable) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
}

document.querySelectorAll(".btn-1").forEach((div) => {
  div.addEventListener("click", () => {
    speak(div.textContent);
  });
});

var volumeOnIcon = document.getElementById("volume-on");
var volumeOffIcon = document.getElementById("volume-off");
var isReadAloudEnable = false;

function enableReadAloud() {
  isReadAloudEnable = true;
  console.log("Read-aloud enabled");
}

function disableReadAloud() {
  isReadAloudEnable = false;
  console.log("Read-aloud disabled");
  window.speechSynthesis.cancel(); // Stop any ongoing speech
}

volumeOnIcon.addEventListener("click", () => {
  enableReadAloud();
  volumeOnIcon.style.color = "green";
  volumeOffIcon.style.color = "#67656a";
});

volumeOffIcon.addEventListener("click", () => {
  disableReadAloud();
  volumeOffIcon.style.color = "red";
  volumeOnIcon.style.color = "#67656a";
});

