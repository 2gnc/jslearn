'use strict';

/**
* @namespace Task01
* @desc Task01 Hold all functionality for part 1 of homework
*/
(function() 
{
	/**
	 * @function loop
	 * @name Task01#loop
	 * @param {Number} times By default:0 How many times should loop call callback function.
	 * @param {foo} callback Function, that will be called.
	 * @desc for showing how to use callback
	 * @memberof Task01
	 * @instance
	 */
	const loop = function( times = 0, callback = null ) {
		if (callback === null || typeof(callback) !== 'function' )
			{
				return
			}
			for ( let i = 0; i <= times; i++ ) {
				callback();
			}
	}
	/**
	 * This callback is as part of loop function.
	 * @callback foo
	 * @name foo
	 * @desc just prints 'r' in console.
	 * @memberof Task01
	 * @instance
	 */
	let foo = () => {
		console.log( 'r' )
	}

	loop(2, foo );
})();

/**
* @namespace Task02
* @desc Task02 Hold all functionality for part 2 of homework
*/
(function() 
{
	/**
 * @function calculateArea 
 * @param {Number} a first side
 * @param {Number} b second side
 * @param {Number} c third side
 * @param {Number} d fourth side
 * @desc depending on the number of parameters determines figure type and calculates its area. Tries to cast the format of the argument to a number. Max number of arguments: 4.
 * @memberof Task02
 * @instance
 * @returns {object} obj 
 */
	const calculateArea = function( a, b, c, d ) {
		let figure = '',
				area = 0,
				input = [],
				p = 0,
				p1 = 0,
				args = arguments.length,
				obj = {};
		// проверить, числа ли во входе. Если нет - перобразовать, если не получилось - выйти с ошибкой. 
		for ( let i = 0; i < args; i++ ) {
			if( Number(arguments[i]) ) {
				input.push( Number(arguments[i]) )
			}
		}
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
	} 
	calculateArea(2, 3).print();
})();

/**
* @namespace Task03
* @desc Task03 Hold all functionality for part 3 of homework
*/
(function() {
/**
 * @class
 * @classdesc Basic class for all other subclasses
 * @memberof Task03
 */
	class Human
		{
/**
 * Creates Human.
 * @param {string} name
 * @param {number} age
 * @param {string} dateOfBirth
 * @memberof Task03
*/
			constructor( name, age, dateOfBirth )
			{
				this.name = name;
				this.age = age;
				this.dateOfBirth = dateOfBirth;

			}
/** 
 * Shows this parameters
 */
			displayInfo() {
				let info = this.name + ', ' + this.age + ', ' + this.dateOfBirth + ', ';
				return info
			}
		};

/**
 * @class
 * @classdesc Describes Employee
 * @extends Task03.Human
 * @memberof Task03
 */
	class Employee extends Human
		{
/**
 * Makes Employee
 * @param {string} name
 * @param {number} age
 * @param {string} dateOfBirth
 * @param {number} salary
 * @param {string} department
*/
		constructor( name, age, dateOfBirth, salary, department) {
			super( name, age, dateOfBirth );
			this.salary = salary;
			this.department = department;
			};
/** 
 * Shows this parameters
 */
		displayInfo() {
			let info = super.displayInfo() + this.salary + ', ' + this.department + ', ';
			return info
			}
		};
/**
 * @class
 * @classdesc Describes Developer
 * @extends Task03.Employee
 * @memberof Task03
 */
	class Developer extends Employee {
/**
 * Makes Developer
 * @param {string} name
 * @param {number} age
 * @param {string} dateOfBirth
 * @param {number} salary
 * @param {string} department
 * @param {object} manager 
 */
 	constructor ( name, age, dateOfBirth, salary, department ) {
 		super( name, age, dateOfBirth, salary, department );
 		this.manager = {};
 		};

/**
* Sets Manager fot this Developer
* @param {object} manager Manager instance, that will be setted to this developer. Adds this developer to Manager`s developeers array, and remve it as well.
*/
	setManager( newManager ) {
		if( !(newManager instanceof Manager) || this.manager === newManager) {
			return
		};

		// у менеджера, которого сменили (если он был ранее установлен), убираем разработчика из массива
		if ( this.manager instanceof Manager ) {
			this.manager.removeDeveloper( this );
		};

		// устанавливаем этому разработчику менеджера
		this.manager = newManager;
		newManager.addDeveloper( this );
		console.log( 'для разработчика ' + this.name + ' установлен менеджер ' + newManager.name );
	};

/** 
 * Shows parameters of Developer instance
 */
		displayInfo() {
			let info = super.displayInfo() + ', менеджер: ' + this.manager.name ;
			console.log( info );
			return info
			};
	};

/**
 * @class
 * @classdesc Describes Manager
 * @extends Task03.Employee
 * @memberof Task03
 */
	class Manager extends Employee {	
/**
 * Makes Manager
 * @param {string} name
 * @param {number} age
 * @param {string} dateOfBirth
 * @param {number} salary
 * @param {string} department
*/
			constructor( name, age, dateOfBirth, salary, department) {
				super( name, age, dateOfBirth, salary, department );
				this.developers = [];
			}
/** 
 * Adds one developer to manager
 * @param {object} developer The Developer instance, that will be added to array "developers".
 */
			addDeveloper( developer ) {
				if ( !(developer instanceof Developer) || this.developers.indexOf( developer ) !== -1 ) { 
					return
				};
				this.developers.push( developer );
				developer.setManager( this );
				console.log( 'для менеджера ' + this.name + ' установлен разработчик ' + developer.name );
			};
/** 
 * Removes one developer from manager
 * @param {object} developer The Developer instance, that will be removed from array "developers".
 */
			removeDeveloper( developer ) {
				if( !( developer instanceof Developer ) || this.developers.indexOf( developer ) === -1 ){
					return
				};
				//delete this.developers[ this.developers.indexOf( developer ) ];
				this.developers.splice( this.developers.indexOf( developer ), 1 );
				console.log( 'для менеджера ' + this.name + ' удален разработчик ' + developer.name );
			};
/**
* Gets names of Developers of this Manager
*/
			getDevelopers() {
				let names = '',
						that = this;
				for ( let i = 0; i < this.developers.length; i++ ) {
					names += that.developers[i].name + ' ';
				};
				return names
			};

/** 
 * Shows parameters of Manager instance
 */
		displayInfo() {
			let info = super.displayInfo() + ', разработчики: ' + this.getDevelopers() ;
			console.log( info );
			return info
			};

		};

let a = new Manager( 'Вася', 33, '03-02-1983', 1000, 'IT' ),
		b = new Manager( 'Колян', 25, '01-04-92', 1100, 'IT' ),
		c = new Developer ( 'Иван', 40, '01-05-1970', 1500, 'IT' ),
		d = new Developer ( 'Григорий', 39, '01-05-1969', 1500, 'IT' ),
		e = new Developer ( 'Олег', 20, '01-01-1997', 1400, 'IT' );

a.addDeveloper( c );
a.addDeveloper( d );
c.setManager( b );
e.setManager( a );
a.displayInfo();
b.displayInfo();
c.displayInfo();
d.displayInfo();
e.displayInfo();
})();

/**
* @namespace Task04
* @desc Task04 Hold all functionality for part 4 of homework
*/
 ( /** @lends Task04 */ function(){

 })();


/**
* @namespace Task05
* @desc Task05 Hold all functionality for part 4 of homework
*/
 ( /** @lends Task05 */ function(){

 })();








