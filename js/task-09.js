const refs = {
  div: document.querySelector(".widget"),
  text: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};
refs.button.addEventListener("click", function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.text.textContent = color;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
