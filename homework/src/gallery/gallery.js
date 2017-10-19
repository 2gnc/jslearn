(function(){

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
					var galleryEl = document.createElement( 'div' ),
						imgLink = document.createElement( 'a' ),
						img = document.createElement( 'img' );
					img.setAttribute( 'src', item.thumb );
					img.classList.add( 'gallery__img' );
					imgLink.classList.add( 'gallery__link' );
					imgLink.setAttribute( 'href', item.largeLink );
					galleryEl.classList.add( 'gallery__item' ); 
					gallery.appendChild( galleryEl ); //display
					galleryEl.appendChild( imgLink ); //display
					imgLink.appendChild( img );       //display
					setTimeout( function() { //display
						img.classList.add( 'gallery__img--visible' );
						 }, 200 );
					
				} )
		};
	};


})();

// добавить загрузку по 3 штуки
// добавить открытие большой картинки в модальном окне