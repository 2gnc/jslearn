function countApples() {

// задаем переменные
	var 	n = +document.getElementById( 'petya' ).value,
				m = +document.getElementById( 'masha' ).value, 
  			d = +document.getElementById( 'dima' ).value,
				mIsDonated,
				result = document.getElementById( 'result-box' ),
				resultOfIteration,
				resultsLog = new Array();

// записываем в массив (на следующий свободный идекс результат итерации (если условие выполнилось - результат записался в массив))
function showWhat() {
	resultsLog[resultsLog.length] = resultOfIteration ;
};

// 1 проверка: меньше ли у Пети яблок, чем у Маши    
  if ( n < m ) {
  	m = m/2;
    n = n + m;
		resultOfIteration = ' <div class="apples__log apples__log--caseone">У Фрая яблок меньше, он отнял половину у Лилы. <p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
		showWhat();
  } 

// 2 проверка: независимо от первой проверки, Дима проверил, меньше ли у Маши яблок, чем 5
	if ( m < 5 ) {
  	m = m+2;
    d = d-2;
		mIsDonated = true;
		resultOfIteration = ' <div class="apples__log apples__log--casetwo"> У Лилы осталось меньше 5 яблок, Бендер дает ей 2 яблока.<p>Фрай: ' + n + ', Лила: ' + m + ', Фрай: ' + d +  '</p></div>';
		showWhat();
  }

// 3 проверка: независимо от предыдущих, Дима ест свои яблоки. У него что-то осталось или нет
// если яблок оставалось меньше 7, то у него остается 0 и программа завершается
	if ( n <= 7 ) {
		n = 0;
	resultOfIteration = ' <div class="apples__log apples__log--casethree">Фрай съел все свои яблоки. Бендер ничего делать не стал. <p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
	showWhat();
	}
// иначе Петя съел 7 яблок
	else {
					n = n-7;
					resultOfIteration = ' <div class="apples__log apples__log--casefour">Фрай съел часть своих яблок.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
					showWhat();
					
					// если в итоге у него осталось больше 10 яблок, Дима отбирает у него 10 и на этом успокаивается.
					if ( n >= 10 ) {
						n = n-10;
						d = d+10;
						resultOfIteration = ' <div class="apples__log apples__log--casefive">У Фрая много яблок, Бендер забрал у него 10.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
						showWhat();
						}
						//если у него было меньше 10, то Дима у Пети ничего не забирает, а идет к Маше
						// если Дима раньше отдавал Маше 2 яблока, то он забирает их обратно
				else if(mIsDonated) {
					m = m-2;
					d = d+2;
					resultOfIteration = '<div class="apples__log apples__log--casesix">У Фрая мало яблок, Бендер забрал у Лилы свои 2 яблока.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p> ';
					showWhat();
				}
				//если Дима яблок Маше не Давал, то он от всех отстал и ушел.
				else {
					resultOfIteration = ' <div class="apples__log apples__log--caseseven">У Фрая меньше 10 яблок, Бендер оставил его в покое.<p>Фрай: ' + n + ', Лила: ' + m + ', Бендер: ' + d +  '</p></div>';
					showWhat();
				}
	
		}

//Объединяем в одну строку все содержимое массива, записывем в переменную show
	var show = resultsLog.join('');
// записываем полученную строку в result
	result.innerHTML = show;
};