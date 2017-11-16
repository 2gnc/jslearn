/**
* @namespace Loop
* @desc Loop Hold all functionality for of homework lesson 1 part 1
*/
( function (l) {
	/**
	 * @function runLoop
	 * @name Loop#runLoop
	 * @param {Number} times By default:0 How many times should loop call callback function.
	 * @param {Function} callback Function, that will be called.
	 * @desc for showing how to use callback
	 * @memberof Loop
	 * @instance
	 */
	l.runLoop = function ( times = 0, callback = null ) {
		if ( callback === null || typeof(callback) !== 'function' ) {
			return
		};
		for ( let i = 0; i < times; i++ ) {
			callback();
		}
	}

	window.loop = l;
})({});