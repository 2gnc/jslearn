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