/**
* @namespace Task03
* @desc Task03 Hold all functionality for part 3 of homework
*/
( function( $ ) {

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

	$.makeManager = function( ...arguments ) {
		return new Manager( ...arguments );
	};

	$.makeDeveloper = function( ...arguments ) {
		return new Developer( ...arguments );
	};

	class Test {
		constructor( msg ) {
			this.msg = msg;
		}

		showMsg() {
			console.log( this.msg )
		}
	};

	$.testMaker = function(){
		return new Test( 'hi' );
	};

	window.dm = $;

} )( {} );