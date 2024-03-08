"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d == 0) {
		arr[0] = -b / (2 * a);
	} else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let payment = 0;
	let fullPayment = 0;
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let n = countMonths;

	payment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
	fullPayment = payment * countMonths;

	return fullPayment.toFixed(2) / 1;
	/* Так как метод "toFixed()" возвращает строку,
	 то для того, чтобы преобразовать переменную fullPayment в значение числового типа, оно делится на 1 */
}