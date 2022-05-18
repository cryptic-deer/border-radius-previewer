/** @format */

const box = document.querySelector(".box");

const topLeftInput = document.querySelector("#top-left");
const topRightInput = document.querySelector("#top-right");
const bottomRightInput = document.querySelector("#bottom-right");
const bottomLeftInput = document.querySelector("#bottom-left");

const radioButtons = document.querySelectorAll(`input[name="unit"]`);

let selectedUnit;
const unitChooser = () => {
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			selectedUnit = radioButton.value;
			break;
		}
	}
};

const changeRadius = (cornerInput, corner) => {
	cornerInput.addEventListener("input", e => {
		e.target.value === ""
			? (e.target.value = 0)
			: (e.target.value = e.target.value.replace(/^0+/, ""));

		unitChooser();
		box.style.cssText += `${corner}: ${e.target.value}${selectedUnit}`;
	});
};

changeRadius(topLeftInput, "border-top-left-radius");
changeRadius(topRightInput, "border-top-right-radius");
changeRadius(bottomRightInput, "border-bottom-right-radius");
changeRadius(bottomLeftInput, "border-bottom-left-radius");
