const textArea = document.getElementById("text-input");

// first part

document.getElementById("btn-bold").addEventListener("click", function () {
  textArea.style.fontWeight = "bold";
});
document.getElementById("btn-italic").addEventListener("click", function () {
  textArea.style.fontStyle = "italic";
});
document.getElementById("btn-underline").addEventListener("click", function () {
  textArea.style.textDecoration = "underline";
});

// second part

document.getElementById("btn-left").addEventListener("click", function () {
  textArea.style.textAlign = "left";
});
document.getElementById("btn-center").addEventListener("click", function () {
  textArea.style.textAlign = "center";
});
document.getElementById("btn-right").addEventListener("click", function () {
  textArea.style.textAlign = "right";
});
document.getElementById("btn-justify").addEventListener("click", function () {
  textArea.style.textAlign = "justify";
});

// third part
const fontSizeInput = document.getElementById("fontSizeInput");
fontSizeInput.addEventListener("click", function () {
  const selectedFontSize = fontSizeInput.value ;
  textArea.style.fontSize = selectedFontSize +'px';
});

const button = document.getElementById("text-button");

let isUpperCase = false;
button.addEventListener("click", function () {
  isUpperCase = !isUpperCase;
  if (isUpperCase) {
    textArea.style.textTransform = "uppercase";
  } else {
    textArea.style.textTransform = "lowercase";
  }
});

const colorPicker = document.getElementById("favcolor");
colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  textArea.style.color = selectedColor;
});

