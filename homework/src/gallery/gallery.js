(function(){
'use starict';
window.addEventListener( 'load', getGalleryLinks );

	function getGalleryLinks() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					galleryBuilder();
			} else {
			return
			};
		};
			xhr.ontimeout = function () {
			console.log( 'Ожидание ответа заняло слишком много времени' );
			};
		};
		xhr.open('get', 'gallery.json', true)
		xhr.send();
		function galleryBuilder() {
			var links = JSON.parse( xhr.responseText ),
				gallery = document.querySelector( '.gallery__box' );
				links.links.forEach( function( item, i, arr ) {
					item.displayed = false;
				} );
// создаем элементы для всех объектов в массиве
				links.links.forEach( function( item, i, arr ) {
					var galleryEl = document.createElement( 'div' ),
						imgLink = document.createElement( 'a' ),
						img = document.createElement( 'img' ),
						caption = document.createElement( 'p' );
				caption.classList.add( 'gallery__caption' );
				img.setAttribute( 'src', item.thumb );
				img.classList.add( 'gallery__img' );
				imgLink.classList.add( 'gallery__link' );
				imgLink.setAttribute( 'href', item.largeLink );
				galleryEl.classList.add( 'gallery__item' );
// выводим первые три, меняем им свойство "displayed" и выводим кнопку "далее", если в массиве есть еще не отображенные элементы
				gallery.appendChild( galleryEl ); //display
				galleryEl.appendChild( imgLink ); //display
				imgLink.appendChild( img );       //display
				setTimeout( function() { //display
					img.classList.add( 'gallery__img--visible' );
					 }, 200 );
				galleryEl.appendChild( caption );  //display
				caption.appendChild(document.createTextNode( item.desc ))  //display
			} )
		};
	};


})();

// добавить загрузку по 3 штуки
// добавить открытие большой картинки в модальном окне