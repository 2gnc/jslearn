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



	Hamburger.prototype.setSize = function() {};
	Hamburger.prototype.addTopping = function() {};
	Hamburger.prototype.removeTopping = function() {};
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

	console.log( hamb );
})();