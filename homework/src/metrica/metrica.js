'use strict';
//кнопка "Добавить"
const 	buttonAdd = document.getElementById( 'view-duration-add' ),
// ячейка "Количество просмотров"
		numberOfViews = document.getElementById( 'views-num' ),
//ячейка "Процент просмотров"
		percentOfViews = document.getElementById( 'views-percent' );

function viewsTotalCounter() {
	var viewsCount = 0;
	var countTotal = function() {
		var total = ++viewsCount;
		numberOfViews.innerHTML = total ;
		percentOfViews.innerHTML = '100';
	}
	return countTotal;
}

var click = viewsTotalCounter();

//обработчик события клика на кнопку "добавить"
//addView - один визит
buttonAdd.addEventListener( 'click', click );