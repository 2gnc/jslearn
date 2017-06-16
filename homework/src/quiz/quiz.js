'use strict';


//Функция выдает случайное число от 1 до 50 включительно
//или посчитать количество вопросов в файле
function getRandomQuestion(min=1, max=51) {
	return parseInt(Math.random() * (max - min) + min);
};


//подключаем файл с вопросами
var xhr = new XMLHttpRequest();
//создаем асинхронный запрос
xhr.open('GET', 'quiz.json', true);
//вызываем асинхронный запрос
xhr.send();

//событие "по готовности" - обрабатывает полученный файл
xhr.onreadystatechange = function() { 
	if (xhr.readyState != 4) return;
	if (xhr.status != 200) {
		console.log('Ошибка!');
		} 
//если файл получен без проблем, обрабатываем его 
	else {
		//console.log('получилось');
		};
	};