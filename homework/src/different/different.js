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