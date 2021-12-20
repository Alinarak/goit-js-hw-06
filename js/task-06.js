const ref = {
  inputRef: document.querySelector("#validation-input"),
};
const toggleClasses = (addClass, removeClass) => {
  ref.inputRef.classList.add(addClass);
  ref.inputRef.classList.remove(removeClass);
};

ref.inputRef.addEventListener("blur", (event) => {
  if (
    ref.inputRef.value.length ===
    parseInt(ref.inputRef.getAttribute("data-length"))
  ) {
    toggleClasses("valid", "invalid");
  } else {
    toggleClasses("invalid", "valid");
  }
});
