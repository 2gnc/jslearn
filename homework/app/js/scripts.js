function countApples() {

// задаем переменные
	var 	n = +document.getElementById( 'petya' ).value,
				m = +document.getElementById( 'masha' ).value, 
  			d = +document.getElementById( 'dima' ).value,
				mIsDonated,
				result = document.getElementById( 'result-box' ),
				resultOfIteration,
				resultsLog = new Array();

// записываем в массив (на следующий свободный идекс результат итерации (если условие выполнилось - результат записался в массив))
function showWhat() {
	resultsLog[resultsLog.length] = resultOfIteration ;
};

// 1 проверка: меньше ли у Пети яблок, чем у Маши    
  if ( n < m ) {
  	m = m/2;
    n = n + m;
		resultOfIteration = ' <div class="apples__log apples__log--caseone">У Фрая яблок меньше, он отнял половину у Лилы. <p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
		showWhat();
  } 

// 2 проверка: независимо от первой проверки, Дима проверил, меньше ли у Маши яблок, чем 5
	if ( m < 5 ) {
  	m = m+2;
    d = d-2;
		mIsDonated = true;
		resultOfIteration = ' <div class="apples__log apples__log--casetwo"> У Лилы осталось меньше 5 яблок, Бендер дает ей 2 яблока.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
		showWhat();
  }

// 3 проверка: независимо от предыдущих, Дима ест свои яблоки. У него что-то осталось или нет
// если яблок оставалось меньше 7, то у него остается 0 и программа завершается
	if ( n <= 7 ) {
		n = 0;
	resultOfIteration = ' <div class="apples__log apples__log--casethree">Фрай съел все свои яблоки. Бендер ничего делать не стал. <p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
	showWhat();
	}
// иначе Петя съел 7 яблок
	else {
					n = n-7;
					resultOfIteration = ' <div class="apples__log apples__log--casefour">Фрай съел часть своих яблок.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
					showWhat();
					
					// если в итоге у него осталось больше 10 яблок, Дима отбирает у него 10 и на этом успокаивается.
					if ( n >= 10 ) {
						n = n-10;
						d = d+10;
						resultOfIteration = ' <div class="apples__log apples__log--casefive">У Фрая много яблок, Бендер забрал у него 10.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
						showWhat();
						}
						//если у него было меньше 10, то Дима у Пети ничего не забирает, а идет к Маше
						// если Дима раньше отдавал Маше 2 яблока, то он забирает их обратно
				else if(mIsDonated) {
					m = m-2;
					d = d+2;
					resultOfIteration = '<div class="apples__log apples__log--casesix">У Фрая мало яблок, Бендер забрал у Лилы свои 2 яблока.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p> ';
					showWhat();
				}
				//если Дима яблок Маше не Давал, то он от всех отстал и ушел.
				else {
					resultOfIteration = ' <div class="apples__log apples__log--caseseven">У Фрая меньше 10 яблок, Бендер оставил его в покое.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
					showWhat();
				}
	
		}

//Объединяем в одну строку все содержимое массива, записывем в переменную show
	var show = resultsLog.join('');
// записываем полученную строку в result
	result.innerHTML = show;
};
function findAverage() {
	// блокируем кнопку от повторного нажатия
	document.getElementById( 'check-button' ).classList.add( 'average__button--checked' );

	//получаем переменные из input
	var firstNum = +document.getElementById( 'firstNum' ).value,
		secondNum = +document.getElementById( 'secondNum' ).value,
		thirdNum = +document.getElementById( 'thirdNum' ).value;

	//проверяем, что переменные все разные, если нет - подсвечиваем одинаковые
	if (firstNum == secondNum || firstNum == thirdNum || secondNum == thirdNum) {
		switch(true) {
			case firstNum === secondNum && firstNum === thirdNum:
				document.getElementById( 'firstNum' ).classList.add( 'average__value--wrong' );
				document.getElementById( 'secondNum' ).classList.add( 'average__value--wrong' );
				document.getElementById( 'thirdNum' ).classList.add( 'average__value--wrong' );
				break;

			case firstNum === secondNum && firstNum !== thirdNum:
				document.getElementById( 'firstNum' ).classList.add( 'average__value--wrong' );
				document.getElementById( 'secondNum' ).classList.add( 'average__value--wrong' );
				break;

			case secondNum === thirdNum && secondNum !== firstNum:
				document.getElementById( 'thirdNum' ).classList.add( 'average__value--wrong' );
				document.getElementById( 'secondNum' ).classList.add( 'average__value--wrong' );
				break;

			case firstNum === thirdNum && firstNum !== secondNum:
				document.getElementById( 'firstNum' ).classList.add( 'average__value--wrong' );
				document.getElementById( 'thirdNum' ).classList.add( 'average__value--wrong' );
				break;
		}
	}
	//определяем среднее число по блок-схеме и назначаем ему специальный класс
	else {
		switch(true) {
			case (firstNum > secondNum && firstNum > thirdNum && secondNum > thirdNum)||(firstNum < secondNum && firstNum < thirdNum && secondNum < thirdNum):
				document.getElementById( 'secondNum' ).classList.add( 'average__value--average' );
				break;
			case(firstNum > secondNum && firstNum > thirdNum && secondNum < thirdNum)||(firstNum < secondNum && firstNum < thirdNum && secondNum > thirdNum):
				document.getElementById( 'thirdNum' ).classList.add( 'average__value--average' );
				break;
			default:
				document.getElementById( 'firstNum' ).classList.add( 'average__value--average' );
				break;
		}
	}

	//блокируем все инпуты и кнопку "узнать" от повторного ввода
	document.getElementById( 'check-button' ).setAttribute('disabled', '');
	document.getElementById( 'firstNum' ).setAttribute('disabled', '');
	document.getElementById( 'secondNum' ).setAttribute('disabled', '');
	document.getElementById( 'thirdNum' ).setAttribute('disabled', '');
}

// сброс значений и оформления инпутов
function refresh(){

	//снимаем подсветку красным
	document.getElementById( 'firstNum' ).classList.remove( 'average__value--wrong' );
	document.getElementById( 'secondNum' ).classList.remove( 'average__value--wrong' );
	document.getElementById( 'thirdNum' ).classList.remove( 'average__value--wrong' );

	//снимаем подсветку зеленым
	document.getElementById( 'firstNum' ).classList.remove( 'average__value--average' );
	document.getElementById( 'secondNum' ).classList.remove( 'average__value--average' );
	document.getElementById( 'thirdNum' ).classList.remove( 'average__value--average' );

	//"отжимаем" кнопку
	document.getElementById( 'check-button' ).classList.remove( 'average__button--checked' );

	//активируем кнопку
	document.getElementById( 'check-button' ).removeAttribute('disabled', '');

	//очищаем значения в инпутах
	document.getElementById( 'firstNum' ).value = '';
	document.getElementById( 'secondNum' ).value = '';
	document.getElementById( 'thirdNum' ).value = '';

	//возвращаем инпутам доступность для редактирования
	document.getElementById( 'firstNum' ).removeAttribute('disabled', '');
	document.getElementById( 'secondNum' ).removeAttribute('disabled', '');
	document.getElementById( 'thirdNum' ).removeAttribute('disabled', '');
}
'use strict';

function findDifferent() {

//получаем переменные из инпутов
	var n1 = parseInt(document.getElementById( 'n1' ).value),
		n2 = parseInt(document.getElementById( 'n2' ).value),
		n3 = parseInt(document.getElementById( 'n3' ).value),
		n4 = parseInt(document.getElementById( 'n4' ).value),
		differentNumber;

//сбросим оформление инпутов, если что-то было введено раньше
// возьмем все элементы с классом different__value, у каждого удалим оба класса оформления
	var a = document.getElementsByClassName( 'different__value' );
		for (var i = 0; i < a.length; i++) {
			a[i].classList.remove( 'different__value--wrong', 'different__value--this' )
		}

//определим, какое по счету число является отличным от трех остальных, 
//присвоим переменной differentNumber порядковый номер отличного чила в массиве
	if( n1 == n2 && n2 == n3 && n4 != n1) {
		differentNumber = 3;
//четвертое
	}
	else if ( n1 == n2 && n2 == n4 && n3 != n1) {
		differentNumber = 2;
//третье
	}
	else if ( n1 == n3 && n3 == n4 && n2 != n1) {
		differentNumber = 1;
//второе
	}
	else if ( n2 == n3 && n3 == n4 && n1 != n2) {
		differentNumber = 0;
//первое
	}
	else if (n1 == n2 && n2 == n3 && n3 == n4) {
		differentNumber = 'error';
	}
//три числа из четырех не равны между собой или все числа между собой равны
	else {
		differentNumber = 'error';
	}

//функция берет массив всех элементов input
// и присваивает определенному из них (индекс массива = serialNumber) дополнительный класс
	function showDifferent(serialNumber) {
			document.getElementsByClassName( 'different__value' )[serialNumber].classList.add( 'different__value--this' );
	};
//присвоим класс отличному числу, если оно есть
	if( differentNumber !='error' ) {
		showDifferent(differentNumber)
	}
	else {
		var b = document.getElementsByClassName( 'different__value' );
		for (var i = 0; i < b.length; i++) {
			b[i].classList.add( 'different__value--wrong' )
			}
		};
	};

// очистка оформления и значений инпутов
function refreshDifferent() {
	var a = document.getElementsByClassName( 'different__value' );
	for (var i = 0; i < a.length; i++) {
		a[i].classList.remove( 'different__value--wrong', 'different__value--this' );
		a[i].value = '';
	}
};
(function(){
	
})();
/**
 * Namespace for hamburger.
 * @Hamburger namespace
 */
(function(){
/**
* @constructor Hamburger
* @constructs Hamburger
* @param {object} size Selected Size of Hamburger, small by default.
* @param {array} topping Array of Toppings of Hamburger, empty by default. 
*/
	function Hamburger( size, topping ) {
		if( Hamburger.instance ) return Hamburger.instance;
		this.size = size;
		this.topping = topping;
		return Hamburger.instance = this;
	};

/**
* @method
* @name Hamburger#listenAll
* @desc Adds EventListener on blocks with sizes and toppings.
*/
	Hamburger.prototype.listenAll = function() {
		document.querySelector( '.hamburger__sizes' ).addEventListener( 'click', hamb.setSize );
		document.querySelector( '.hamburger__toppings' ).addEventListener( 'click', hamb.toggleTopping );
	};

/**
* @method
* @name Hamburger#setSize
* @desc Toggle class --active on click, set property "size" of hamb, displays new size if changed.
* @param {object} event
*/
	Hamburger.prototype.setSize = function( e ) {
		var element = e.target,
			path = [],
			hamburger = document.querySelector( '.hamburger__box' );
			currentSize = hamburger.classList[1];

			while ( element != document.querySelector( '.hamburger__sizes' ) ) {
				path.push( element );
				element = element.parentNode;
			};
			element = path[ path.length - 1 ];

		if( !element.classList.contains( 'hamburger__size--active' ) && !element.classList.contains( 'hamburger__sizes' ) ) {
			element.parentNode.querySelector( '.hamburger__size--active' ).classList.toggle( 'hamburger__size--active' );
			element.classList.toggle( 'hamburger__size--active' );
		};
		for ( var i =0; i < sizes.length; i++ ) {
			if( sizes[i].name === element.id ) {
				hamb.size = sizes[i];
				break
			};
		};
		var targetSize = 'hamburger__box--' + hamb.size.name;
		hamburger.classList.remove( currentSize );
		hamburger.classList.add( targetSize );
		hamb.calculate();
	};

/**
* @method
* @name Hamburger#toggleTopping
* @desc Toggle checkbox, displays topping and starts setTopping() or removeTopping() methods.
* @param {object} event  
*/
	Hamburger.prototype.toggleTopping = function( e ) {
		var element = e.target,
			path = [],
			checkbox;

			while ( element != document.querySelector( '.hamburger__toppings' ) ) {
				path.push( element );
				element = element.parentNode;
			};
			element = path[ path.length - 1 ];
			checkbox = element.querySelector( '.hamburger__topping-box' );

		if( checkbox.classList.contains( 'hamburger__topping-box--active' ) ) {
			hamb.removeTopping( element.id );
		}
			else {
				hamb.setTopping( element.id );
			};
		checkbox.classList.toggle( 'hamburger__topping-box--active' );
		document.getElementsByClassName( 'hamburger__' + element.id )[0].classList.toggle( 'hidden' );
	};

/**
* @method
* @name Hamburger#setTopping
* @desc Adds targetToppingObj in hamb.topping.
* @param {string} toppingName
*/
	Hamburger.prototype.setTopping = function( toppingName ) {
		var targetToppingObj;
		for (var i = 0; i < toppings.length; i++) {
			if( toppings[i].name === toppingName ) {
				targetToppingObj = toppings[i];
				break
			};
		};
		if( hamb.topping.indexOf( targetToppingObj ) == -1 ) {
			 hamb.topping.push( targetToppingObj );
			 hamb.calculate();
		};
	};

/**
* @method
* @name Hamburger#removeTopping
* @desc Removes targetToppingObj from hamb.topping
* @param {string} toppingName
*/
	Hamburger.prototype.removeTopping = function( toppingName ) {
		var targetToppingObj;
		for (var i = 0; i < toppings.length; i++) {
			if( toppings[i].name === toppingName ) {
				targetToppingObj = toppings[i];
				break
			};
		};
		if( hamb.topping.indexOf( targetToppingObj ) !== -1 ) {
			hamb.topping.splice( hamb.topping.indexOf( targetToppingObj ), 1 );
			hamb.calculate();
		}
	};

/**
* @method
* @name Hamburger#calculate
* @desc 
* @param {} 
* @param {}
* @returns {} 
*/
	Hamburger.prototype.calculate = function() {
		var totalPrice,
				totalCal,
				toppingsPrice = 0,
				toppingsCal = 0;
		if( hamb.topping.length > 0 ) {
			for ( var i = 0; i < hamb.topping.length; i++ ) {
			toppingsPrice += hamb.topping[i].price;
			};
			totalPrice = toppingsPrice + hamb.size.price;
		}
		else {
			totalPrice = hamb.size.price;
		}
		if( hamb.topping.length > 0 ) {
			for ( var i = 0; i < hamb.topping.length; i++ ) {
			toppingsCal += hamb.topping[i].calories;
			};
			totalCal = toppingsCal + hamb.size.calories;
		}
		else {
			totalCal = hamb.size.calories;
		};
		document.getElementById( 'price' ).innerHTML = totalPrice ;
		document.getElementById( 'cal' ).innerHTML = totalCal ;
	};


/**
* @constructor BurgerParameter
* @constructs BurgerParameter
* @param {string} type 
* @param {string} name 
* @param {number} price
* @param {number} calories
*/
	function BurgerParameter( type, name, price, calories ){ 
		this.type = type;
		this.name = name;
		this.price = price;
		this.calories = calories;
		if( this.type == 'size' ) {
			sizes.push( this )
		}
			else {
				toppings.push( this )
			};
	};

	var sizes = [],
		toppings = [],
		s = new BurgerParameter( 'size', 's', 50, 20 ),
		m = new BurgerParameter( 'size', 'm', 75, 30 ),
		l = new BurgerParameter( 'size', 'l', 100, 40 ),
		cheeze = new BurgerParameter( 'topping', 'cheeze', 10, 20 ),
		salad = new BurgerParameter( 'topping', 'salad', 20, 5 ),
		potato = new BurgerParameter( 'topping', 'potato', 10, 20 ),
		spice = new BurgerParameter( 'topping', 'spice', 10, 0 ),
		mayo = new BurgerParameter( 'topping', 'mayo', 10, 20 ),
		hamb = new Hamburger( s , [] );

		hamb.listenAll();
		hamb.calculate();

})();





"use strict";
//test

function getnumber() { 
	var userNumber = document.getElementById('number').value; //получили число в виде строки
	var first = +userNumber[0],
		second = +userNumber[1],
		third = +userNumber[2],
		fourth = +userNumber[3],
		fifth = +userNumber[4],
		sixsth = +userNumber[5],
		leftPart = first + second + third,
		rightPart = fourth + fifth + sixsth,
		isLucky = leftPart === rightPart;
function showResult() {
(isLucky == true)? 
document.getElementById('isitlucky').innerHTML = '<p class="result__text">Ты <span class="result--yes">счастливчик!</span> </p>': 
document.getElementById('isitlucky').innerHTML = '<p class="result__text">Тебе <span class="result--no">не повезло</span> </p>';
};
	(userNumber.length != 6)? 
	document.getElementById('isitlucky').innerHTML = '<p class="result__text">Ты ввел <span class="result--no">неправильное</span> число, дружок! Попробуй еще раз.</p>': showResult();
};
'use strict';
//кнопка "Добавить"
const 	buttonAdd = document.getElementById( 'view-duration-add' ),
// ссылка "сбросить счетчик"
		linkReset = document.getElementById( 'resetter' ),
// ячейки "Количество просмотров" и "Процент просмотров"
		numberOfViews = document.getElementById( 'views-num' ),
		percentOfViews = document.getElementById( 'views-percent' ),
//ячейки "Количество отказов" и "процент отказов"
		numberOfRejects = document.getElementById( 'rejects-num' ),
		percentOfRejects = document.getElementById( 'rejects-percent' ),
//ячейки "Внимательное изучение" и процент внимательного изучения"
		numberOfAttentives = document.getElementById( 'attentives-num' ),
		percentOfAttentives = document.getElementById( 'attentives-percent' ),
//ячейки "Количество визитов" и процент визитов
		numberOfVisits = document.getElementById( 'visits-num' ),
		percentOfVisits = document.getElementById( 'visits-percent' )
;
//Функция - обертка
function viewsTotalCounter() {

//счетчик просмотров
	var numOfViews = 0,

//счетчик отказов 
		numOfRejects = 0,

//счетчик внимательного изучения
		numOfAttentives = 0,

//счетчик визитов
		numOfVisits = 0;

//Функция - счетчик (замыкание)
	var countStats = function() {
// длительность просмотра
		const	viewDuration = +document.getElementById( 'view-duration' ).value;

//Счетчик количества просмотров срабатывает при клике на кнопку 'Добавить'
		++numOfViews;
		numberOfViews.innerHTML = numOfViews;
		percentOfViews.innerHTML = '100';
		document.getElementById( 'view-duration' ).value = '';

		if ( viewDuration < 10 ) {
			++numOfRejects;
			numberOfRejects.innerHTML = numOfRejects;
			countPercents();
		}

		if ( viewDuration >= 10 && viewDuration < 3600 ) {
			++numOfAttentives;
			numberOfAttentives.innerHTML = numOfAttentives;
			countPercents();
		}

		if ( viewDuration >= 10 ) {
			++numOfVisits;
			numberOfVisits.innerHTML = numOfVisits;
			countPercents();
		}
// после учета всех возможных случаев рассчитаем проценты по каждому показателю
	//percentOfRejects.innerHTML = 100 * numOfRejects / numOfVisits;
	// пересчитываем все проценты
	function countPercents() {
		percentOfRejects.innerHTML = Math.round( 100 * numOfRejects / numOfViews );
		percentOfAttentives.innerHTML = Math.round( 100 * numOfAttentives / numOfViews );
		percentOfVisits.innerHTML = Math.round( 100 * numOfVisits / numOfViews );
	};

// Функция для сброса счетчиков
	function reseter() {
		numOfViews = 0;
		numOfRejects = 0;
		numOfAttentives = 0;
		numOfVisits = 0;
		numberOfViews.innerHTML = '';
		percentOfViews.innerHTML = '';
		numberOfRejects.innerHTML = '';
		percentOfRejects.innerHTML = '';
		numberOfAttentives.innerHTML = '';
		percentOfAttentives.innerHTML = '';
		numberOfVisits.innerHTML = '';
		percentOfVisits.innerHTML = '';
	};

//Обработчик события для сброса счетчиков
linkReset.addEventListener( 'click', reseter );

}
	return countStats;
};
var clicker = viewsTotalCounter();



//обработчик события клика на кнопку "добавить"
buttonAdd.addEventListener( 'click', clicker );






'use strict'
//функция для получения случайного целого числа
function randomise() {
	//let plaseForNumber = document.getElementById('first-item');

//получим в массив все элементы, внутрь которых надо вставлять рандомайзер
	var elementsToPlaseRandomizer = document.getElementsByClassName( 'number-desc__item' ),
//
		finalRandomNumber = [],
//
		numberToAnalize,
// куда выводить текстовое описание
		placeForDescription = document.getElementById( 'result' );

//функция дает случайное целое число
	function getRandomNumber() {
		return parseInt( Math.random()*10 )
	}

//функция выводит элементы с задержкой 0.2 секунды
	function makeRandomNumber(where) {
//получаем массив из 10 случайных чисел, которые будем анимировать
	var numbersForScroll = [];
	for ( var k = 0; k < 10; k++ ) {
		numbersForScroll.push(getRandomNumber());
		}
//записываем 3 последних числа каждого массива в новый массив, из которого потом получим трехзначное число
	finalRandomNumber.push(numbersForScroll[9]);
//выводим 10 раз элемнты массива, начиная с 0-го
		var i = 0;
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
//функция с задержкой показывает на доске, какое число: четное или не четное
	function showDescription(numberToDescript) {
// очищаем предыдущее описание числа, если оно было
		if ( placeForDescription.innerHTML !== '' ) {
		placeForDescription.innerHTML = '';
		}
		setTimeout( function(){
			if ( numberToAnalize%2 != 0 ) {
				placeForDescription.innerHTML = 'Это нечетное целое число';
			}
			else {
				placeForDescription.innerHTML = 'Это четное целое число';
			}}
		, 2500)
	};

//для масива с элементами для простановки случайных чисел вызываем рандомайзер: в результате в каждом
//элементе .number-desc__item на странице выводится рандомайзер и показывается последнее число из десяти
	for (var i = 0; i < elementsToPlaseRandomizer.length; i++) {
		makeRandomNumber(elementsToPlaseRandomizer[i]);
	}

//получили трехзначное число для последующего анализа
numberToAnalize = parseInt(finalRandomNumber.join(''));
showDescription(numberToAnalize);

};
'use strict';

// Массив с номерами вопросов и ответов для одного раунда
var roundNumbers = [],
// Массив вопросов и ответов для одного раунда
		roundQuestionsAndAnswers = [],
// Массив для хранения уже заданных вопросов
		usedNumbers = [];
// Кнопка "Новая игра"
var newGameBtn = document.getElementsByClassName( 'quiz__game-btn' )[0],
// Кнопка "Новый раунд"
	newRoundBtn = document.getElementsByClassName( 'quiz__game-btn' )[1],
// Кнопка "Начать заново"
	clearGameBtn = document.getElementsByClassName( 'quiz__game-btn' )[2],
// Поле для отображения вопроса
	questionPlace = document.querySelector( '.quiz__question-txt' ),
// Поле для отображения таймера обратного отсчета
	timerPlace = document.querySelector( '.quiz__countdown' ),
// группа тегов для ввода ответа
	answerPlace = document.querySelector( '.quiz__answer' ),
// Кнопка ввода ответа
	answerBtn = document.querySelector( '.quiz__answer-btn' ),
// группа для отображения результатов
	resultsPlace = document.querySelector( '.quiz__result' ),
// счетчик ответов пользователей на вопрос
	answersCount = 0,
// Счетчик заданных пропросов
	questionsCount = 0
; 

//подключаем файл с вопросами
	var xhr = new XMLHttpRequest();
//создаем асинхронный запрос
	xhr.open('GET', 'quiz.json', true);
//вызываем асинхронный запрос
	xhr.send();
//событие "по готовности" - обрабатывает полученный файл
	xhr.onreadystatechange = function() { 
		if (xhr.readyState != 4) return;
		if (xhr.status != 200) {
				console.log('Ошибка!');
				};
// если файл получен без проблем, обрабатываем его 
// это массив всех вопросов и ответов
		var allQuestions = JSON.parse( xhr.responseText ); 

// Функция дает случайное число, не входящее в массив уже использованых номеров
function getRandomNumber(min, max){
	do {
		var rand = parseInt(Math.random() * (49 - 0) + 0);
	}
	while (usedNumbers.indexOf(rand) !== -1);
	return rand
};

// Функция дает три случайных индекса массива вопросов и ответов
function getRoundNumbers() {
	for (var i = 0; i < 3; i++) {
// получаем уникальное число
		var number = getRandomNumber();
// записываем это число в массив использованных чисел
			roundNumbers.push(number);
// записываем это число в массив чисел раунда
			usedNumbers.push(number);
		}
	};

//создаем класс для всей игры
function Quiz(rightAnswersCount, wrongAnswersCount, roundsCount, escapeChance) {
	// определяем контекст
	that = this;
	that.rightAnswersCount = rightAnswersCount;
	that.wrongAnswersCount = wrongAnswersCount;
	that.escapeChance = escapeChance;
	};

// Метод для создания нового раунда
Quiz.prototype.makeRound = function() {

// сбрасываем счетчик ответов на вопросы
	answersCount = 0;
// Создан новый раунд - сбрасываем счетчик заданных вопросов
	questionsCouner = 0;
// Показываем блок с вводом ответа
	answerPlace.classList.remove( 'quiz__answer--invisible' );
// Скрываем блок для результатов
	resultsPlace.classList.remove( 'quiz__result--visible' );

// Проверяем, остались ли незаданными еще хотя бы 3 вопроса
		if ( allQuestions.question.length - usedNumbers.length >= 3 ) {
// Если это не первый раунд в игре, то очищаем массив номеров вопросов

			if ( roundNumbers != [] ) {
				roundNumbers = [];
				};
// Если это не первый раунд в игре, то очищаем массив объектов "вопрос-ответ"
			if (roundQuestionsAndAnswers != []) {
				roundQuestionsAndAnswers = [];
				};
// Отключаем кнопку "новый раунд"
			newRoundBtn.setAttribute( 'disabled', '' );
// Добавляем модификатор --disabled кнопке "новый раунд"
			newRoundBtn.classList.add( 'quiz__game-btn--pushed' );
// Получаем массив номеров вопросов для раунда (с учетом вопросов, заданных в предыдущих раундах)
			getRoundNumbers();
// Запускаем цикл для каждого номера из массива вопросов для данного раунда (всего три вопроса), начинаем с 0
			for ( var i = 0; i < roundNumbers.length; i++ ) {
// Создаем массив объектов вопрос-ответ
				roundQuestionsAndAnswers.push(allQuestions.question[roundNumbers[i]]);
				};

// Таймер обратного отсчета 10 - 0, по клику на кнопку ответ начинает с 10 
	function countTen() {
// начальное значение таймера
		var t = 20,
// можно ли выполнять отсчет
		dodo = true;
// Обработчик нажатия на кнопку ответ - останавливает таймер и чищает его в HTML
		answerBtn.addEventListener( 'click', function (){ 
			dodo = false; 
			timerPlace.innerHTML = ''; 
			});
// Вывод отбратного отсчета
		(function ten() {
			if( dodo === false ) { return };
			if (t <= 20 && t >= 0) {
				timerPlace.innerHTML = t;
				t--;
				setTimeout( ten, 909 );
				};
			})();
		};

// Задаем первый вопрос
questionOne = function(){
	console.log( 'Задаю первый вопрос' );
	questionPlace.innerHTML = roundQuestionsAndAnswers[0].question;
	countTen();
	var q1Timeout = setTimeout( goToTwo, 20000 );
	answerBtn.addEventListener( 'click', goToTwo );
	console.log(that);

	function goToTwo() {
		questionTwo();
		clearTimeout(q1Timeout);
		answerBtn.removeEventListener( 'click', goToTwo );
		answerNum = 0;
		checkAnswer();
		};
};

// Задаем второй вопрос
questionTwo = function(){
	console.log( 'Задаю второй вопрос' );
	questionPlace.innerHTML = roundQuestionsAndAnswers[1].question;
	var q2Timeout = setTimeout( goToThree, 20000 );
	countTen();
	answerBtn.addEventListener( 'click', goToThree )

	function goToThree() {
		questionThree();
		clearTimeout(q2Timeout);
		answerBtn.removeEventListener( 'click', goToThree );
		answerNum = 1;
		checkAnswer();
		};
};

// Задаем третий вопрос
questionThree = function(){
	console.log('Задаю третий вопрос')
	questionPlace.innerHTML = roundQuestionsAndAnswers[2].question;
	var q3Timeout = setTimeout( goToEnd, 20000 );
	countTen();
	answerBtn.addEventListener( 'click', goToEnd )

	function goToEnd() {
		roundReload();
		clearTimeout(q3Timeout);
		questionPlace.innerHTML = '';
		answerPlace.classList.add( 'quiz__answer--invisible' );
		answerBtn.removeEventListener( 'click', goToEnd );
		answerNum = 2;
		checkAnswer();
		}
}

// Задаем первый вопрос
questionOne();

// Функция для обработки введенного результата
function checkAnswer() {
	rightAnswer = roundQuestionsAndAnswers[answerNum].answer.toLowerCase();
	userAnswer = document.querySelector( '.quiz__answer-inp' ).value.toLowerCase();
	document.querySelector( '.quiz__answer-inp' ).value = '';
	if (userAnswer == rightAnswer ) {
		console.log( 'Правильно' );
		that.rightAnswersCount++;
		}
		else {
			console.log( 'Неправильно' );
			that.wrongAnswersCount++;
			}
	console.log( 'Правильный ответ: ' + rightAnswer + ' ответ пользователя: ' + userAnswer );
	console.log( 'Правильных ответов: ' + that.rightAnswersCount + ' Неправильных ответов: ' + that.wrongAnswersCount );

};

// Функция для перезапуска раунда
	function roundReload() {
	// Убираем блокировку с кнопки "новый раунд"
		newRoundBtn.removeAttribute( 'disabled', '' );
	// Убираем модификатор с кнопки "новый раунд"
		newRoundBtn.classList.remove( 'quiz__game-btn--pushed' );
	// Показываем блок для результатов
		resultsPlace.classList.add( 'quiz__result--visible' );
	}


}
// Если вопросы кончились, а пользователь пытается сыграть еще раунд - не создаем раунд, выводим ошибку
		else {
			console.log( 'Все вопросы кончились' );
			};
};	
// создание новой игры
function makeQuiz() {
// Создаем экземпляр типа Quiz
	var game = new Quiz(0, 0, 0, 0);
// Блокируем возможность повторно нажать кнопку Новая игра
	newGameBtn.setAttribute( 'disabled', '' );
// Добавляем класс --pushed
	newGameBtn.classList.add( 'quiz__game-btn--pushed' );
// Создаем первый раунд
	game.makeRound();
// Обработчик события на кнопке "Еще раунд"
	newRoundBtn.addEventListener( 'click', game.makeRound );
	};
// Обработчик события нажатия на кнопку "Новая игра"
	newGameBtn.addEventListener( 'click', makeQuiz );
};

// Алгоритм раунда: https://github.com/2gnc/jslearn/blob/master/homework/src/quiz/quiz-algorythm.jpg 
'use strict';

var textRedactor = function() {
// получаем кнопки Сохранить, Показать и Очистить
	const 	saveButton = document.getElementById( 'save' ),
			showButton = document.getElementById( 'show' ),
			clearButton = document.getElementById( 'clear' ),
// получаем элемент, куда будем добавлять набранный текст
			placeToShow = document.getElementById( 'whereToShow' ),
// элемент для вставки лимита памяти
			memoryLimitIndicator = document.getElementById( 'memoryIndicator' );
// начальное значение набранного текста
	var 	textToShow = '',
			memoryUsed = 0;
// покажем изначальный лимит памяти
	memoryLimitIndicator.innerHTML = memoryUsed + ' of 8';
// функция добавляет и сохраняет введенный текст в переменную textToShow, если инпут не пустой
	function saveText() {
//если строка ввода не пустая, лимит памяти меньше 9 и длинна строки меньше 39
		if ( document.getElementById( 'redactorinput' ).value != '' && memoryUsed <= 7 && document.getElementById( 'redactorinput' ).value.length <= 38 ) {
// добавляем 1 к счетчику строк
		memoryLimitIndicator.innerHTML = ++memoryUsed + ' of 8';
//получаем текст из поля ввода
		textFromInput = document.getElementById( 'redactorinput' ).value;
//добавляем к переменной textToShow
		if ( textToShow != '') {
//если в textToShow уже что-то есть, то перед добавляемой строкой добавим перенос строки
		textToShow = textToShow + '<br>' + textFromInput
		}
//если еще ничего не вводили, то просто добавляем строку
		else {
			textToShow += textFromInput
		};
// после ввода строки, очищаем поле ввода
		document.getElementById( 'redactorinput' ).value = '';
//возвращаем фокус полю ввода
		document.getElementById( 'redactorinput' ).focus();
// очищаем сообщение об ошибке, если оно было на экране
		if (placeToShow.innerHTML == 'err: вы ничего не ввели! ') {
			placeToShow.innerHTML = '';
			}
		}
//если строка ввода пустая и еще есть свободный лимит памяти
		else if ( document.getElementById( 'redactorinput' ).value == '' && memoryUsed <= 7 ) {
			placeToShow.innerHTML = 'err: вы ничего не ввели! '
		}
		else if ( document.getElementById( 'redactorinput' ).value !== '' && memoryUsed <= 7 && document.getElementById( 'redactorinput' ).value.length > 38 )
			placeToShow.innerHTML = 'Слишком длинная строка! '
		else {
			placeToShow.innerHTML = 'Лимит памяти исчеран! ';
			document.getElementById( 'redactorinput' ).value = '';
		}
	}

	function showText() {
		if( textToShow != '' ) {
			placeToShow.innerHTML = textToShow;
		}

//возвращаем фокус полю ввода
		document.getElementById( 'redactorinput' ).focus();
	}

	function clearText() {
		if ( textToShow != '' || placeToShow.innerHTML != '' || document.getElementById( 'redactorinput' ).value != '' ) {
			textToShow = '';
			placeToShow.innerHTML = '';
			memoryLimitIndicator.innerHTML = '0 of 8';
			memoryUsed = 0;
			document.getElementById( 'redactorinput' ).value = '';
//возвращаем фокус полю ввода
			document.getElementById( 'redactorinput' ).focus();
		}
	}

// Обработчик на сохранение строки
saveButton.addEventListener( 'click', saveText );
// Обработчик на отображение строк
showButton.addEventListener( 'click', showText );
// Обработчик на очистку строк
clearButton.addEventListener( 'click', clearText );
}
textRedactor();