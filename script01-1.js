"use strict";
// Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
var celcium = prompt('введите градусы по цельсию (число)', '');
var celciumnum = +celcium;
(celciumnum == celcium)? 
	(
		console.log("это число"), 
		console.log("действие 2")
	): 
	console.log("вы ввели не число");
