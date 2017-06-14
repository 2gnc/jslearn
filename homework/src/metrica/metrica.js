'use strict';
//кнопка "Добавить"
const 	buttonAdd = document.getElementById( 'view-duration-add' ),
// ячейка "Количество просмотров"
		numberOfViews = document.getElementById( 'views-num' ),
//ячейка "Процент просмотров"
		percentOfViews = document.getElementById( 'views-percent' ),
//ячейка "Количество отказов"
		numberOfRejects = document.getElementById( 'rejects-num' )
;
//Функция - обертка
function viewsTotalCounter() {
//счетчик просмотров
	var viewsCount = 0,
//счетчик отказов
		rejects = 0;
//Функция - счетчик (замыкание)
	var countTotal = function() {
//Количество секунд из input
		const	viewDuration = +document.getElementById( 'view-duration' ).value;
//Счетчик количества просмотров (равен количеству кликов на кнопку 'Добавить')
		var total = ++viewsCount,
			totalRejects;
//если это отказ, записываем отказ
		if ( viewDuration < 10 ) {
			totalRejects = ++rejects;
			numberOfRejects.innerHTML = totalRejects ;
		}

		numberOfViews.innerHTML = total ;
		percentOfViews.innerHTML = '100';
	}
	return countTotal;
}

var click = viewsTotalCounter();

//обработчик события клика на кнопку "добавить"
//addView - один визит
buttonAdd.addEventListener( 'click', click );