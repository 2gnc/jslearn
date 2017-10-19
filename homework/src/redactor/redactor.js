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
		document.getElementById( 'redactorinput' );
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