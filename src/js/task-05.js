const textOutput = document.querySelector("#name-output");
console.log(textInput);
console.log(textOutput);

textInput.addEventListener("input", (event) => {
	textOutput.textContent = event.currentTarget.value;
});
