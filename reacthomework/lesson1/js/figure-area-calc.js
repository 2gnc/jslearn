/**
* @namespace areaCalc
* @desc areaCalc Hold all functionality for of homework lesson 1 part 2
*/

( function( $ ){
/**
 * @function calculateArea 
 * @param {Number} a first side
 * @param {Number} b second side
 * @param {Number} c third side
 * @param {Number} d fourth side
 * @desc depending on the number of parameters determines figure type and calculates its area. Tries to cast the format of the argument to a number. Max number of arguments: 4.
 * @memberof areaCalc
 * @instance
 * @returns {object} obj 
 */
	$.calculeteArea = function( a, b, c, d ) {
		
		let figure = '',
			area = 0,
			input = [],
			p = 0,
			p1 = 0,
			args = arguments.length,
			obj = {};

		for ( let i = 0; i < args; i++ ) {
			if( Number( arguments[i]) ) {
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
		};

		if (args === 0) { 
			area = 0;
			figure = 'точка';
		} else if (args === 1) {
			area = 0;
			figure = 'линия';
		} else if (args === 2) {
			area = (a * b).toFixed(2);
			figure = 'прямоугольник';
		} else if (args === 3) {
			p = a / 2 + b / 2 + c / 2;
			area = Math.sqrt(p * ( p - a ) * ( p - b ) * ( p - c )).toFixed(2);
			figure = 'треугольник';
		} else {
			p1 = a / 2 + b / 2 + c / 2 + d / 2;
			area = Math.sqrt(( p - a ) * ( p - b ) * ( p - c ) * ( p - d )).toFixed(2);
			figure = 'четырехугольник';
		}

		return obj = {
			name: figure,
			area: area,
			input: input.join(', '),
			print: function() {
				console.log( 'Фигура: ' + this.name + ', Площадь: ' + this.area + ', Стороны: ' + this.input )
			}
		};
	};
	
	window.areaCalc = $;

})( {} );