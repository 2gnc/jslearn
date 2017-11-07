'use strict';

// Написать функцию loop, которая будет принимать 
// параметры: times (значение по умолчанию = 0), 
// callback (значение по умолчанию = null) и будет в цикле (times раз), 
// вызывать функцию callback. Если функцию не передана, то цикл не должен отрабатывать ни разу. 
// Покажите применение этой функции

(function() {
	const loop = function( times = 0, callback = null ) {
		if (callback === null || typeof(callback) !== 'function' )
			{
				return
			}
			for ( let i = 0; i <= times; i++ ) {
				callback();
			}
	}

	let foo = () => {
		console.log( 'r' )
	}

	loop(2, foo );
})();

// Написать функцию calculateArea, которая будет принимать параметры, 
// для вычисления площади (можете выбрать какую то конкретную фигуру, а можете, 
// 	основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления 
// 	площади для переданной в параметрах фигуры) и возвращать объект вида:
// 	 { area, figure, input }, где area - вычисленная площадь, figure - 
// 	 название фигуры, для которой вычислялась площадь, input - входные параметры, 
// 	 по которым было произведено вычисление.

(function() {
	const calculateArea = function( a, b, c ) {
		let figure = '',
				area = 0,
				input = [],
				args = arguments.length;
		// проверить, числа ли во входе. Если нет - перобразовать, если не получилось - выйти с ошибкой. 
		for ( var i = 0; i < args; i++ ) {
			if( Number(arguments[i]) ) {
				input.push( Number(arguments[i]) )
			}
		};
		if ( input.length !== args ) {
			console.log( 'err' );
			input = [];
			return
		}
		switch( args ) {
			case 0: 
				area = 0;
				figure = 'точка';
				break;
			case 1:
				area = 0;
				figure = 'линия';
				break;
			case 2: 
				area = (a * b).toFixed(2);
				figure = 'прямоугольник';
				break;
			case 3:
				let p = ( a + b + c )*0.5;
				area = Math.sqrt( p * ( p - a )*( p - b ) * ( p - c ) ).toFixed(2);
				figure = 'треугольник';
				break;
		}
		console.log( figure );
		console.log( input );
		console.log( area );

	}

	calculateArea('4', '5');

})();