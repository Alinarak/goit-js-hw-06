const ref = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

ref.span.style.fontSize = ref.input.value + "px";

const getSizeText = () => {
  ref.span.style.fontSize = ref.input.value + "px";
};

ref.input.addEventListener("input", getSizeText);
