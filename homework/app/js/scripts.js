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
		resultOfIteration = ' <div class="apples__log apples__log--casetwo"> У Лилы осталось меньше 5 яблок, Бендер дает ей 2 яблока.<p>Фрай: ' + n + ', Лила: ' + m + ', Фрай: ' + d +  '</p></div>';
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
	let firstNum = +document.getElementById( 'firstNum' ).value,
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
	let n1 = parseInt(document.getElementById( 'n1' ).value),
		n2 = parseInt(document.getElementById( 'n2' ).value),
		n3 = parseInt(document.getElementById( 'n3' ).value),
		n4 = parseInt(document.getElementById( 'n4' ).value),
		differentNumber;

//сбросим оформление инпутов, если что-то было введено раньше
// возьмем все элементы с классом different__value, у каждого удалим оба класса оформления
	let a = document.getElementsByClassName( 'different__value' );
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
		let b = document.getElementsByClassName( 'different__value' );
		for (var i = 0; i < b.length; i++) {
			b[i].classList.add( 'different__value--wrong' )
			}
		};
	};

// очистка оформления и значений инпутов
function refreshDifferent() {
	let a = document.getElementsByClassName( 'different__value' );
	for (var i = 0; i < a.length; i++) {
		a[i].classList.remove( 'different__value--wrong', 'different__value--this' );
		a[i].value = '';
	}
};
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