'use strict';

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
	timerPlace = document.querySelector( '.quiz__countdown' ),
// группа тегов для ввода ответа
	answerPlace = document.querySelector( '.quiz__answer' ),
// Поле ввода ответа
	userAnswer = document.querySelector( '.quiz__answer-inp' ).value.toLowerCase(),
// Кнопка ввода ответа
	answerBtn = document.querySelector( '.quiz__answer-btn' ),
// группа для отображения результатов
	resultsPlace = document.querySelector( '.quiz__result' ),
// счетчик ответов пользователей на вопрос
	answersCount = 0,
// Счетчик заданных пропросов
	questionsCount = 0
; 

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
	this.roundsCount = roundsCount; // пока не ясно, нужно это свойство или нет
	this.escapeChance = escapeChance;
	};


//новая версия алгоритма работы раунда

// Счётчик заданных вопросов = 0
// Очистим массивы номеров для раунда и вопросов и ответов раунда
// Получим новый массив вопросов и ответов (из выборки исключаем уже заданные вопросы)
// Цикл while счётчик заданых вопросов < 3
//  Выводим вопрос
//  Включаем таймер 10 секунд
//   Если ввели ответ - 
//     - сбросить таймер
//     - увеличить счётчик заданных вопросов на 1
//     - включить функцию проверки ответа
//     - следующая итерация 
//   Если не ввели ответ и прошло 10 секунд
//     - включить функцию проверки ответа (считаем за неправильный ответ)
//     - увеличить счётчик заданных вопросов на 1
//     - следующая итерация
// Если счётчик заданных вопросов = 2 (окончание раунда)
//   Скрыть поле ввода ответа 
//   Показать правильные ответы
//   Визуализировать банку
//   Разблокировать кнопку "Новый раунд"

// Метод для создания нового раунда
Quiz.prototype.makeRound = function() {

// сбрасываем счетчик ответов на вопросы
	answersCount = 0;
// Создан новый раунд - сбрасываем счетчик заданных вопросов
	questionsCouner = 0;
// Показываем блок с вводом ответа
	answerPlace.classList.remove( 'quiz__answer--invisible' );
// Скрываем блок для результатов
	resultsPlace.classList.remove( 'quiz__result--visible' );

// Проверяем, остались ли незаданными еще хотя бы 3 вопроса
		if ( allQuestions.question.length - usedNumbers.length >= 3 ) {
// Если это не первый раунд в игре, то очищаем массив номеров вопросов

			if ( roundNumbers != [] ) {
				roundNumbers = [];
				};
// Если это не первый раунд в игре, то очищаем массив объектов "вопрос-ответ"
			if (roundQuestionsAndAnswers != []) {
				roundQuestionsAndAnswers = [];
				};
// Отключаем кнопку "новый раунд"
			newRoundBtn.setAttribute( 'disabled', '' );
// Добавляем модификатор --disabled кнопке "новый раунд"
			newRoundBtn.classList.add( 'quiz__game-btn--pushed' );
// Получаем массив номеров вопросов для раунда (с учетом вопросов, заданных в предыдущих раундах)
			getRoundNumbers();
// Запускаем цикл для каждого номера из массива вопросов для данного раунда (всего три вопроса), начинаем с 0
			for ( var i = 0; i < roundNumbers.length; i++ ) {
// Создаем массив объектов вопрос-ответ
				roundQuestionsAndAnswers.push(allQuestions.question[roundNumbers[i]]);
				};
// Еще один алгоритм раунда (сложный)

// Сформировать базу вопросов и ответов
// Создать новый объект RoundQuetion
// Свойства
//   Current number: 
//   Question:
//   User answer:
//   Default answer:
//   Lifetime: 10000
// Методы
//   RunCountdown
//   AskQuestion
//   GetAnswer (по событию запускает CheckAnswer)
//   CheckAnswer (считает статистику и запускает Die)
//   Die (включится само если в coundown высветится последнее число или запустится после проверки ответа, увеличивает свойство задано вопросов у объекта раунд)

// Программа создания RoundQestion
//  При создании нового раунда создать новый RoundQuestion
//  Включаем слежение за свойством Задано вопросов
//   При изменении свойства Задано вопросов если Задано вопросов меньше трёх, создаём новый RoundQuestion
// Если три - запускаем обработку результата.

// Еще один вариант раунда (попроще)
	

// При клике на ответ:
// сбросить таймер на 10 (готово)
// плюсануть счетчик вопросов  questionsCouner
// плюсануть счетчик ответов  answersCount
// включить следующий вопрос, если он есть
// если вопроса нет - скрыть поле с ответами и таймером
// запустить проверялку ответов

// Таймер обратного отсчета 10 - 0, по клику на кнопку ответ начинает с 10 
	function countTen() {
// начальное значение таймера
		var t = 10,
// можно ли выполнять отсчет
		dodo = true;
// Обработчик нажатия на кнопку ответ - останавливает таймер и чищает его в HTML
		answerBtn.addEventListener( 'click', () => { 
			dodo = false; 
			timerPlace.innerHTML = ''; 
			});
// Вывод отбратного отсчета
		(function ten() {
			if( dodo === false ) { return };
			if (t <= 10 && t >= 0) {
				timerPlace.innerHTML = t;
				t--;
				setTimeout( ten, 909 );
				};
			})();
		};

// Задаем первый вопрос
questionOne = () => {
	console.log( 'Задаю первый вопрос' );
	questionPlace.innerHTML = roundQuestionsAndAnswers[0].question;
	countTen();
	var q1Timeout = setTimeout( goToTwo, 10000 );
	answerBtn.addEventListener( 'click', goToTwo );
	console.log(this);

	function goToTwo() {
		questionTwo();
		clearTimeout(q1Timeout);
		answerBtn.removeEventListener( 'click', goToTwo );
		};
};

// Задаем второй вопрос
questionTwo = () => {
	console.log( 'Задаю второй вопрос' );
	questionPlace.innerHTML = roundQuestionsAndAnswers[1].question;
	var q2Timeout = setTimeout( goToThree, 10000 );
	countTen();
	answerBtn.addEventListener( 'click', goToThree )

	function goToThree() {
		questionThree();
		clearTimeout(q2Timeout);
		answerBtn.removeEventListener( 'click', goToThree );
		};
};

// Задаем третий вопрос
questionThree = () => {
	console.log('Задаю третий вопрос')
	questionPlace.innerHTML = roundQuestionsAndAnswers[2].question;
	var q3Timeout = setTimeout( goToEnd, 10000 );
	countTen();
	answerBtn.addEventListener( 'click', goToEnd )

	function goToEnd() {
		roundReload();
		clearTimeout(q3Timeout);
		answerBtn.removeEventListener( 'click', goToEnd );
		}
}

	questionOne();

	function roundReload() {
	// Убираем блокировку с кнопки "новый раунд"
		newRoundBtn.removeAttribute( 'disabled', '' );
	// Убираем модификатор с кнопки "новый раунд"
		newRoundBtn.classList.remove( 'quiz__game-btn--pushed' );
	// Показываем блок для результатов
		resultsPlace.classList.add( 'quiz__result--visible' );
	}


}
// Если вопросы кончились, а пользователь пытается сыграть еще раунд - не создаем раунд, выводим ошибку
		else {
			console.log( 'Все вопросы кончились' );
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

// Алгоритм раунда: https://github.com/2gnc/jslearn/blob/master/homework/src/quiz/quiz-algorythm.jpg 