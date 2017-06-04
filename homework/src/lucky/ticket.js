"use strict";
//test

function getnumber() { 
	var userNumber = document.getElementById('number').value; //получили число в виде строки
	var first = +userNumber[0],
		second = +userNumber[1],
		third = +userNumber[2],
		fourth = +userNumber[3],
		fifth = +userNumber[4],
		sixsth = +userNumber[5],
		leftPart = first + second + third,
		rightPart = fourth + fifth + sixsth,
		isLucky = leftPart === rightPart;
function showResult() {
(isLucky == true)? 
document.getElementById('isitlucky').innerHTML = '<p class="result__text">Ты <span class="result--yes">счастливчик!</span> </p>': 
document.getElementById('isitlucky').innerHTML = '<p class="result__text">Тебе <span class="result--no">не повезло</span> </p>';
};
	(userNumber.length != 6)? 
	document.getElementById('isitlucky').innerHTML = '<p class="result__text">Ты ввел <span class="result--no">неправильное</span> число, дружок! Попробуй еще раз.</p>': showResult();
};