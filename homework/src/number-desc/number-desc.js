'use strict'
//функция для получения случайного целого числа
function randomise() {
	//let plaseForNumber = document.getElementById('first-item');

//получим в массив все элементы, внутрь которых надо вставлять рандомайзер
	let elementsToPlaseRandomizer = document.getElementsByClassName( 'number-desc__item' ),
		finalRandomNumber = [],
		numberToAnalize;

//функция дает случайное целое число
	function getRandomNumber() {
		return parseInt( Math.random()*10 )
	}

//функция выводит элементы с задержкой 0.2 секунды
	function makeRandomNumber(where) {
//получаем массив из 10 случайных чисел
	let numbersForScroll = [];
	for ( let k = 0; k < 10; k++ ) {
		numbersForScroll.push(getRandomNumber());
		}
//записываем 3 последних числа каждого массива в новый массив, из которого потом получим трехзначное число
	finalRandomNumber.push(numbersForScroll[9]);
//выводим 10 раз элемнты массива, начиная с 0-го
		let i = 0;
		( function numbersScroller() {
			if ( i < 10 ) {
				where.innerHTML = numbersForScroll[i];
				i++;
				setTimeout( numbersScroller, 200 );
			}
//затем выводм и оставляем последнее число
			else {
				where.innerHTML = numbersForScroll[9];
			}
		}
			)();
			return finalRandomNumber;
	}

//для масива с элементами для простановки случайных чисел вызываем рандомайзер
	for (let i = 0; i < elementsToPlaseRandomizer.length; i++) {
		makeRandomNumber(elementsToPlaseRandomizer[i]);
	}

//получили трехзначное число для последующего анализа
numberToAnalize = parseInt(finalRandomNumber.join(''));
console.log ( numberToAnalize );


};