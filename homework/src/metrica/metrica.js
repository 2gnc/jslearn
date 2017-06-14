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





