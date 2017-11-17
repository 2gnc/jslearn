// При помощи генератора написать функцию - анкету, 
// которая запрашивает у пользователя на ввод параметры и 
// передаёт их в генератор. В конце, когда генератор завершается, 
// он должен вернуть все введённые входные параметры в виде объекта. 
// Этот объект нужно вывести в консоли.

/**
* @namespace Anketa
* @desc Anketa Hold all functionality for lesson 1 part 4 of homework
*/
 ( /** @lends Anketa */ function(){
 	let button = document.getElementById( 'start' ),
 			data = {},
 			anketa = document.getElementsByClassName( 'anketa' )[0],
 			questions = [ 'Введите Ваше имя', 'Введите Вашу фамилию' ],
 			letsStart = function () {
 				if ( button.parentNode ) {
 					button.parentNode.removeChild( button );
				};
				anketa.appendChild( fragment );
				document.getElementById( 'boo' ).addEventListener( 'click', getData );
				int.next();
 			},
 			fragment = document.createDocumentFragment(),
 			submit = document.createElement( 'button' ),
 			input = document.createElement( 'input' ),
 			questionBox  = document.createElement( 'div' );

 			fragment.appendChild( questionBox );
 			questionBox.classList.add( 'anketa__question' );
 			questionBox.appendChild( input );
 			input.classList.add( 'anketa__input' );
 			questionBox.appendChild( submit );
 			submit.classList.add( 'anketa__button' );
 			submit.setAttribute( 'id', 'boo' );
 			submit.appendChild( document.createTextNode( 'отправить' ) );

	function* interview() {
		input.setAttribute( 'placeholder', questions[0] );
		yield
			data.name = input.value;
			input.value = '';
			input.setAttribute( 'placeholder', questions[1] )
		yield
			data.secondName = input.value;
			console.log( data );
			input.setAttribute( 'placeholder', '' );
			input.value = '';
			input.setAttribute( 'disabled', '' )
			return
	};

	function getData() {
		if ( input.value ) { 
			int.next();
			if( anketa.querySelectorAll( '.warning' ).length !== 0 ) {
				anketa.removeChild( document.getElementsByClassName( 'warning')[0] );
				input.classList.remove( 'anketa__input--varning' );
				} 
			} 
		else {
			if( anketa.querySelectorAll( '.warning' ).length === 0 ) {
				input.classList.add( 'anketa__input--varning' );
				let warningMsg = document.createElement( 'div' );
				warningMsg.setAttribute( 'class', 'warning warning__position' );
				warningMsg.insertAdjacentHTML( 'afterBegin', 'Обязательно введите имя!' );
				anketa.appendChild( warningMsg );
			};
		};
	};

	let int = interview();
 	button.addEventListener( 'click', letsStart );

 })();