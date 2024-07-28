'use strict';

const button = document.querySelector('button');
const display = document.querySelector('.container');
const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const changeBackground = () => {
	let newColor = '#';
	for (let i = 0; i < 6; i++) {
		const randomColorIndex = Math.floor(Math.random() * hexCharacters.length);
		newColor += hexCharacters[randomColorIndex];
	}
	document.body.style.backgroundColor = newColor;
	display.textContent = 'Background Color: ' + newColor;
	console.log('Background color changed to: ' + newColor);
};

button.addEventListener('click', changeBackground);
