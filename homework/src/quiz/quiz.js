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
	questionPlace = document.querySelector( '.quiz__question-txt' ),
// Поле для отображения таймера обратного отсчета
	timerPlace = document.querySelector( '.quiz__countdown' );

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
// Получаем три вопроса и ответа для раунда
	for ( var i = 0; i < roundNumbers.length; i++ ) {
		roundQuestionsAndAnswers.push(allQuestions.question[roundNumbers[i]]);
	};

// Функция для вывода таймера обратного отсчета
	function countDown() {
		let m = answerTimer;
		(function answerCountdown() {
			if (m <= 10 && m >= 0) {
				timerPlace.innerHTML = m;
				m--;
// не 1 секунда, а 0,909 потому, что на экран надо вывести 11 цифр за 10 секунд
				setTimeout( answerCountdown, 909 );
			};
		})();
	};

// Цикл из трех итерации: задаем вопросы
// Показываем первый вопрос
	questionPlace.innerHTML = roundQuestionsAndAnswers[0].question;
// Запускаем три вопроса с интервалом 10 секунд, в цикле от 0 до 2
	(function tenSeconds(i = 0) {
// Запускаем отсчет от 10 до 0
		countDown();
		questionPlace.innerHTML = roundQuestionsAndAnswers[i].question;
		++i;
		if ( i < 3 ) {
				setTimeout(function() {
					tenSeconds( i )
				}, 10000);
			};
//Когда задан третий вопрос и время на него вышло, скрываем таймер, поле ввода и кнопку 

	})();

	console.log( roundQuestionsAndAnswers );
	}
	else {
		console.log( 'Больше нет попыток' );
		newRoundBtn.classList.add( 'quiz__game-btn--pushed' );
		};	
	};

	if ( timerPlace.innerHTML == '0' ) {
			console.log( 'все' )
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

// Алгоритм раунда: https://github.com/2gnc/jslearn/blob/master/homework/src/quiz/quiz-algorythm.jpg 