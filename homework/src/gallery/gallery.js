(function(){

window.addEventListener( 'load', getGalleryLinks );

	function getGalleryLinks() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					galleryBuild();
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
		function galleryBuild() {
			var links = JSON.parse( xhr.responseText );
			console.log( links.links );
		};
	};


})();