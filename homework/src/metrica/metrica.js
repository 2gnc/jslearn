'use strict';
//кнопка "Добавить"
const 	buttonAdd = document.getElementById( 'view-duration-add' ),
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

		if ( viewDuration < 10 ) {
			++numOfRejects;
			numberOfRejects.innerHTML = numOfRejects;
		}

		if ( viewDuration >= 10 && viewDuration < 60 ) {
			++numOfAttentives;
			numberOfAttentives.innerHTML = numOfAttentives;
		}

		if ( viewDuration >= 10 ) {
			++numOfVisits;
			numberOfVisits.innerHTML = numOfVisits;
		}
// после учета всех возможных случаев рассчитаем проценты по каждому показателю

	}
	return countStats;
};

var click = viewsTotalCounter();

//обработчик события клика на кнопку "добавить"
//addView - один визит
buttonAdd.addEventListener( 'click', click );