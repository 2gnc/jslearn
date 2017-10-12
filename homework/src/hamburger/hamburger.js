/**
 * Namespace for hamburger.
 * @Hamburger namespace
 */
(function(){
/**
* @constructor Hamburger
* @constructs Hamburger
* @param {object} size Selected Size of Hamburger, small by default.
* @param {array} topping Array of Toppings of Hamburger, empty by default. 
*/
	function Hamburger(size, topping){
		this.size = size;
		this.topping = topping;
	};

/**
* @method
* @name Hamburger#getTarget
* @desc A handler fucntion for click events on sizes or toppings.
* @param {obcject} e Event click
*/
	Hamburger.prototype.getTarget = function( e ) {
		var element = e.target;
		for ( var i = 0; i < e.path.length; i++ ) {
			if ((e.path[i] ==  document.querySelector( '.hamburger__sizes' ) && e.path[ i - 1 ]) || 
				(e.path[i] ==  document.querySelector( '.hamburger__toppings' ) && e.path[ i - 1 ])) {
				element = event.path[ i - 1 ];
			};
		};
		console.log( element );
		return element;
	};

/**
* @method
* @name Hamburger#listenAll
* @desc Adds EventListener on blocks with sizes and toppings.
*/
	Hamburger.prototype.listenAll = function() {
		document.querySelector( '.hamburger__sizes' ).addEventListener( 'click', hamb.getTarget );
		document.querySelector( '.hamburger__toppings' ).addEventListener( 'click', hamb.getTarget )
	};

/**
* @method
* @name Hamburger#setSize
* @desc 
* @param {} 
* @param {}
* @returns {} 
*/
// по клику: (интерфейс) если не active - снять active у остальных, поставить active у target
// (объект) если не active очистить .size поставить в свойство .size = #id
	Hamburger.prototype.setSize = function() {
		
	};

/**
* @method
* @name Hamburger#setTopping
* @desc 
* @param {} 
* @param {}
* @returns {} 
*/
	Hamburger.prototype.setTopping = function() {
		
	};

/**
* @method
* @name Hamburger#removeTopping
* @desc 
* @param {} 
* @param {}
* @returns {} 
*/
	Hamburger.prototype.removeTopping = function() {};

/**
* @method
* @name Hamburger#calculate
* @desc 
* @param {} 
* @param {}
* @returns {} 
*/
	Hamburger.prototype.calculate = function() {};

/**
* @constructor BurgerParameter
* @constructs BurgerParameter
* @param {string} type 
* @param {string} name 
* @param {number} price
* @param {number} calories
*/
	function BurgerParameter( type, name, price, calories ){
		this.type = type;
		this.name = name;
		this.price = price;
		this.calories = calories;
	};

	var s = new BurgerParameter( 'size', 'small', 50, 20 ),
		m = new BurgerParameter( 'size', 'medium', 75, 30 ),
		m = new BurgerParameter( 'size', 'large', 100, 40 ),
		cheeze = new BurgerParameter( 'topping', 'cheeze', 10, 20 ),
		salad = new BurgerParameter( 'topping', 'salad', 20, 5 ),
		potato = new BurgerParameter( 'topping', 'potato', 10, 20 ),
		spice = new BurgerParameter( 'topping', 'spice', 10, 20 ),
		mayo = new BurgerParameter( 'topping', 'mayo', 10, 20 ),
		hamb = new Hamburger( s , [] );

		hamb.listenAll();

/**
* @todo Finish
* @todo Describe
* @todo Test
*/ 

})();




