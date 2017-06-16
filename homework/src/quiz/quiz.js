'use strict';


//Функция выдает случайное число от 1 до 50 включительно
function getRandomArbitrary(min=1, max=51) {
	return parseInt(Math.random() * (max - min) + min);
}; 

console.log( getRandomArbitrary() );