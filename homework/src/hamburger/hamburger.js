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
* @param {string} name 
* @param {number} price
* @param {number} calories
*/
	function BurgerParameter( name, price, calories ){
		this.name = name;
		this.price = price;
		this.calories = calories;
	};


	var hamb = new Hamburger({}, []);
	console.log( hamb );


})();