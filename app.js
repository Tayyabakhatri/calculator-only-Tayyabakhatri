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
function a() {
  var currentValue = parseFloat(document.getElementById("data"));
  var val = currentValue.value;
  memory += val;
  val = memory;
}
function clear() {
  var inputData = document.getElementById("data");
  inputData.value = "";
}
document.querySelectorAll('.btn-1').forEach((div)=>{
    div.addEventListener('click',()=>{
        speak(div.textContent)
    })
})
// var synth= window.speechSynthesis

// function speak (text){
//     var utterance = newSpeachSynthesisUtterance(text);
//     SpeechSynthesis.speak(utterance)
// }
// var a = "hellow world"
// speak(a)