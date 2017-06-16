'use strict';

// массив для хранения раундов
let rounds = [],
// массив с номерами вопросов и ответов для одного раунда
		roundNumbers = [],
// массив вопросов и ответов для одного раунда;
		roundQuestionsAndAnswers = [];
// кнопка "Новая игра"
const newGameBtn = document.getElementsByClassName( 'quiz__game-btns' )[0],
// кнопка "Новый раунд"
			newRoundBtn = document.getElementsByClassName( 'quiz__game-btns' )[1],
// кнопка "Начать заново"
			clearGameBtn = document.getElementsByClassName( 'quiz__game-btns' )[2];



// Функция - рандомайзер, дает три случайных индекса массива вопросов и ответов
function getRoundNumbers(min = 0, max = 49) {
	for (var i = 0; i < 3; i++) {
		roundNumbers.push(parseInt(Math.random() * (max - min) + min));
		}
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
// это массив всех вопросов и ответов
		var allQuestions = JSON.parse( xhr.responseText ); 
// получаем массив с тремя индексами, которые будем отбирать из всей базы вопросов
		getRoundNumbers();
// обрабатываем массив с индексами вопросов и ответов для раунда
		for (var i = 0; i < roundNumbers.length; i++) {
// записываем в roundQuestionsAndAnswers объекты вопрос-ответ
			roundQuestionsAndAnswers.push(allQuestions.questions[roundNumbers[i]]);
		};
		console.log( roundNumbers );
		console.log( roundQuestionsAndAnswers );

		/*
		*	из JSON сделать массив
		*	запустить рандомайзер, получить три индекса
		*	получить три пары вопрос - ответ
		*	запустить функцию показа вопросов и ожидания ответов
		*	запустить проверку ответа или заблокировать ввод по истечении времени
		*	заблокировать повторный ввод, пока не вышло время на ответ на предыдущий вопрос
		*	пересчитать вероятность успеха на основании всех ранее введенных результатов
		*	показать результат проверки ответа
		*	сдвинуть ключ в банке в зависимости от показателя вероятности успеха
		* объект "quizItem" (вопрос, ответ, проверка ответа, пересчет вероятности успеха)
		*/
		};
	};