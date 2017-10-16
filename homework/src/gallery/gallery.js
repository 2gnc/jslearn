(function(){

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'gallery.json', true);
	xhr.send();
	xhr.onreadystatechange = function() { 
		if (xhr.status != 200) {
			console.log( 'ошибка' );
		}
		if (xhr.readyState != 4) { 
			return 
		}
	};
	console.log( xhr );



})();