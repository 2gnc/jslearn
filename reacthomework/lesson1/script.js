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
	const calculateArea = function( a, b, c, d ) {
		let figure = '',
				area = 0,
				input = [],
				p = 0,
				p1 = 0,
				args = arguments.length,
				obj = {};
		// проверить, числа ли во входе. Если нет - перобразовать, если не получилось - выйти с ошибкой. 
		for ( var i = 0; i < args; i++ ) {
			if( Number(arguments[i]) ) {
				input.push( Number(arguments[i]) )
			}
		};
		if ( input.length !== args || input.length > 4 ) {
			console.log( 'слишком много сторон или некорректный формат' );
			input = [];
			return obj = {
				name: 'неизвестно',
				area: 'неизвестно',
				input: 'некорректный ввод',
				print: function() {
				console.log( 'Фигура: ' + this.name + ', Площадь: ' + this.area + ', Стороны:' + this.input )
				}
			}
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
				p = a/2 + b/2 + c/2;
				area = Math.sqrt( p * ( p - a )*( p - b ) * ( p - c ) ).toFixed(2);
				figure = 'треугольник';
				break;
			default :
				p1 = a/2 + b/2 + c/2 + d/2;
				area = Math.sqrt( ( p - a )*( p - b ) * ( p - c ) *  ( p - d ) ).toFixed(2);
				figure = 'четырехугольник';;
				break;
		}
		return obj = {
			name: figure,
			area: area,
			input: input.join(', '),
			print: function() {
				console.log( 'Фигура: ' + this.name + ', Площадь: ' + this.area + ', Стороны: ' + this.input )
			}
		};
	} 
	calculateArea(2, 3).print();
})();

// 3. Необходимо написать иерархию классов вида:
// Human -> Employee -> Developer
// Human -> Employee -> Manager
// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), 
// а также методы по удалению/добавлению разработчиков.
// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера 
// (имеется ввиду возможность назначить другого менеджера).
// У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
// У класса Employee должны присутствовать параметры: salary (число), department (строка)
// В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
// В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет 
// его параметрами из экземпляра Employee
// Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee 
// написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.