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
	function Hamburger( size, topping ) {
		if( Hamburger.instance ) return Hamburger.instance;
		this.size = size;
		this.topping = topping;
		return Hamburger.instance = this;
	};

/**
* @method
* @name Hamburger#listenAll
* @desc Adds EventListener on blocks with sizes and toppings.
*/
	Hamburger.prototype.listenAll = function() {
		document.querySelector( '.hamburger__sizes' ).addEventListener( 'click', hamb.setSize );
		document.querySelector( '.hamburger__toppings' ).addEventListener( 'click', hamb.toggleTopping );
	};

/**
* @method
* @name Hamburger#setSize
* @desc Toggle class --active on click, set property "size" of hamb, displays new size if changed.
* @param {object} event
*/
	Hamburger.prototype.setSize = function( e ) {
		var element = e.target,
			path = [],
			hamburger = document.querySelector( '.hamburger__box' );
			currentSize = hamburger.classList[1];

			while ( element != document.querySelector( '.hamburger__sizes' ) ) {
				path.push( element );
				element = element.parentNode;
			};
			element = path[ path.length - 1 ];

		if( !element.classList.contains( 'hamburger__size--active' ) && !element.classList.contains( 'hamburger__sizes' ) ) {
			element.parentNode.querySelector( '.hamburger__size--active' ).classList.toggle( 'hamburger__size--active' );
			element.classList.toggle( 'hamburger__size--active' );
		};
		for ( var i =0; i < sizes.length; i++ ) {
			if( sizes[i].name === element.id ) {
				hamb.size = sizes[i];
				break
			};
		};
		var targetSize = 'hamburger__box--' + hamb.size.name;
		hamburger.classList.remove( currentSize );
		hamburger.classList.add( targetSize );
		hamb.calculate();
	};

/**
* @method
* @name Hamburger#toggleTopping
* @desc Toggle checkbox, displays topping and starts setTopping() or removeTopping() methods.
* @param {object} event  
*/
	Hamburger.prototype.toggleTopping = function( e ) {
		var element = e.target,
			path = [],
			checkbox;

			while ( element != document.querySelector( '.hamburger__toppings' ) ) {
				path.push( element );
				element = element.parentNode;
			};
			element = path[ path.length - 1 ];
			checkbox = element.querySelector( '.hamburger__topping-box' );

		if( checkbox.classList.contains( 'hamburger__topping-box--active' ) ) {
			hamb.removeTopping( element.id );
		}
			else {
				hamb.setTopping( element.id );
			};
		checkbox.classList.toggle( 'hamburger__topping-box--active' );
		document.getElementsByClassName( 'hamburger__' + element.id )[0].classList.toggle( 'hidden' );
	};

/**
* @method
* @name Hamburger#setTopping
* @desc Adds targetToppingObj in hamb.topping.
* @param {string} toppingName
*/
	Hamburger.prototype.setTopping = function( toppingName ) {
		var targetToppingObj;
		for (var i = 0; i < toppings.length; i++) {
			if( toppings[i].name === toppingName ) {
				targetToppingObj = toppings[i];
				break
			};
		};
		if( hamb.topping.indexOf( targetToppingObj ) == -1 ) {
			 hamb.topping.push( targetToppingObj );
			 hamb.calculate();
		};
	};

/**
* @method
* @name Hamburger#removeTopping
* @desc Removes targetToppingObj from hamb.topping
* @param {string} toppingName
*/
	Hamburger.prototype.removeTopping = function( toppingName ) {
		var targetToppingObj;
		for (var i = 0; i < toppings.length; i++) {
			if( toppings[i].name === toppingName ) {
				targetToppingObj = toppings[i];
				break
			};
		};
		if( hamb.topping.indexOf( targetToppingObj ) !== -1 ) {
			hamb.topping.splice( hamb.topping.indexOf( targetToppingObj ), 1 );
			hamb.calculate();
		}
	};

/**
* @method
* @name Hamburger#calculate
* @desc 
* @param {} 
* @param {}
* @returns {} 
*/
	Hamburger.prototype.calculate = function() {
		var totalPrice,
				totalCal,
				toppingsPrice = 0,
				toppingsCal = 0;
		if( hamb.topping.length > 0 ) {
			for ( var i = 0; i < hamb.topping.length; i++ ) {
			toppingsPrice += hamb.topping[i].price;
			};
			totalPrice = toppingsPrice + hamb.size.price;
		}
		else {
			totalPrice = hamb.size.price;
		}
		if( hamb.topping.length > 0 ) {
			for ( var i = 0; i < hamb.topping.length; i++ ) {
			toppingsCal += hamb.topping[i].calories;
			};
			totalCal = toppingsCal + hamb.size.calories;
		}
		else {
			totalCal = hamb.size.calories;
		};
		document.getElementById( 'price' ).innerHTML = totalPrice ;
		document.getElementById( 'cal' ).innerHTML = totalCal ;
	};


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
		if( this.type == 'size' ) {
			sizes.push( this )
		}
			else {
				toppings.push( this )
			};
	};

	var sizes = [],
		toppings = [],
		s = new BurgerParameter( 'size', 's', 50, 20 ),
		m = new BurgerParameter( 'size', 'm', 75, 30 ),
		l = new BurgerParameter( 'size', 'l', 100, 40 ),
		cheeze = new BurgerParameter( 'topping', 'cheeze', 10, 20 ),
		salad = new BurgerParameter( 'topping', 'salad', 20, 5 ),
		potato = new BurgerParameter( 'topping', 'potato', 10, 20 ),
		spice = new BurgerParameter( 'topping', 'spice', 10, 20 ),
		mayo = new BurgerParameter( 'topping', 'mayo', 10, 20 ),
		hamb = new Hamburger( s , [] );

		hamb.listenAll();
		hamb.calculate();

})();




