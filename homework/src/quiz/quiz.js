'use strict';
// Таймер в секундах на один ответ
const answerTimer = 10;
// Массив с номерами вопросов и ответов для одного раунда
let roundNumbers = [],
// Массив вопросов и ответов для одного раунда
		roundQuestionsAndAnswers = [],
// Массив для хранения уже заданных вопросов
		usedNumbers = [];
// Кнопка "Новая игра"
let newGameBtn = document.getElementsByClassName( 'quiz__game-btn' )[0],
// Кнопка "Новый раунд"
			newRoundBtn = document.getElementsByClassName( 'quiz__game-btn' )[1],
// Кнопка "Начать заново"
			clearGameBtn = document.getElementsByClassName( 'quiz__game-btn' )[2],
// Поле для отображения вопроса
			questionPlace = document.querySelector( '.quiz__question-txt' );

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
				};
// если файл получен без проблем, обрабатываем его 
// это массив всех вопросов и ответов
		var allQuestions = JSON.parse( xhr.responseText ); 

// Функция дает случайное число, не входящее в массив уже использованых номеров
function getRandomNumber(min = 0, max = 49) {
	do {
		var rand = parseInt(Math.random() * (max - min) + min);
	}
	while (usedNumbers.indexOf(rand) !== -1);
	return rand
};

// Функция дает три случайных индекса массива вопросов и ответов
function getRoundNumbers() {
	for (var i = 0; i < 3; i++) {
// получаем уникальное число
		var number = getRandomNumber();
// записываем это число в массив использованных чисел
			roundNumbers.push(number);
// записываем это число в массив чисел раунда
			usedNumbers.push(number);
		}
	};

//создаем класс для всей игры
function Quiz(rightAnswersCount, wrongAnswersCount, roundsCount, escapeChance) {
	this.rightAnswersCount = rightAnswersCount;
	this.wrongAnswersCount = wrongAnswersCount;
	this.roundsCount = roundsCount;
	this.escapeChance = escapeChance;
};

// метод Quiz создает новый раунд
Quiz.prototype.makeRound = function() {
// проверяем, если ли еще как минимум 3 неиспользованных вопроса
	if ( allQuestions.question.length - usedNumbers.length >= 3 ) {
// очищаем массив с тремя случайными числами
	if ( roundNumbers != [] ) {
	roundNumbers = [];
		};
// очищаем массив с вопросами и ответами для раунда
	if (roundQuestionsAndAnswers != []) {
	roundQuestionsAndAnswers = [];
		};
// разблокируем кнопку "еще раунд"
	newRoundBtn.classList.remove( 'quiz__game-btn--pushed' );
// создаем массив с тремя вопросами
	getRoundNumbers();
	console.log( 'номера вопросов' );
	console.log( roundNumbers );
// Получаем три вопроса и ответа для раунда
	for ( var i = 0; i < roundNumbers.length; i++ ) {
		roundQuestionsAndAnswers.push(allQuestions.question[roundNumbers[i]]);
	};

// Цикл из трех итерации: задаем вопросы
// Показываем первый вопрос
	questionPlace.innerHTML = roundQuestionsAndAnswers[0].question;
	
	// for (var i = 1; i < roundQuestionsAndAnswers.length; i++) {
	// 	console.log( roundQuestionsAndAnswers[i].question );
	// 	console.log( roundQuestionsAndAnswers[i].answer );
	// 	setTimeout( function(){
	// 		console.log ( roundQuestionsAndAnswers[1].question )

	// 	},
	// 	1000 );
	// }

	console.log( 'массив вопросов' );
	console.log( roundQuestionsAndAnswers );
	console.log( 'использованые вопросы' );
	console.log( usedNumbers );
//	console.log( this.roundsCount );
		}
	else {
		console.log( 'Больше нет попыток' );
		newRoundBtn.classList.add( 'quiz__game-btn--pushed' );
		};	
	};

// создание новой игры
function makeQuiz() {
// Создаем экземпляр типа Quiz
	var game = new Quiz(0, 0, 0, 0);
// Блокируем возможность повторно нажать кнопку Новая игра
	newGameBtn.setAttribute( 'disabled', '' );
// Добавляем класс --pushed
	newGameBtn.classList.add( 'quiz__game-btn--pushed' );
// Создаем первый раунд
	game.makeRound();
// Обработчик события на кнопке "Еще раунд"
	newRoundBtn.addEventListener( 'click', game.makeRound );
	};

// Обработчик события нажатия на кнопку "Новая игра"
newGameBtn.addEventListener( 'click', makeQuiz );
};




		/*
		*	из JSON сделать массив объектов
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
//		};
	//};