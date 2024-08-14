/* TASK-1
Запросите у пользователя его имя и выведите в ответ:
«Привет, его имя!». */
// let userName = prompt("Enter your name");
// alert(`Hello, ${userName}!`);

/* TASK-2
Запросите у пользователя год его рождения, посчитайте,
сколько ему лет и выведите результат. Текущий год укажите
в коде как константу. */
// const userYear = Number(prompt("Enter your year of birth"));
// const currentYear = 2024;
// alert(`You are ${currentYear - userYear} years old`);

/* TASK-3
Запросите у пользователя длину стороны квадрата и вы-
ведите периметр такого квадрата. */
// const side = Number(prompt("Enter side of square"));
// const squarePerimeter = side * 4;
// alert(`Perimeter of square is ${squarePerimeter}`);

/* TASK-4
Запросите у пользователя радиус окружности и выведите
площадь такой окружности. */
// const radius = Number(prompt("Enter radius of circle"));
// const circleArea = Math.PI * radius ** 2;
// alert(`Area of circle is ${circleArea}`);

/* TASK-5
Запросите у пользователя расстояние в км между двумя
городами и за сколько часов он хочет добраться. Посчи-
тайте скорость, с которой необходимо двигаться, чтобы
успеть вовремя. */
// const distance = Number(prompt("Enter distance in km"));
// const time = Number(prompt("Enter time in hours"));
// const speed = distance / time;
// alert(`Your speed is ${speed} km/h`);

/* TASK-6
Реализуйте конвертор валют. Пользователь вводит долла-
ры, программа переводит в евро. Курс валюты храните в
константе. */
// const dollar = Number(prompt("Enter dollars"));
// const euro = dollar * 0.85;
// alert(`Euro is ${euro}`);

/* TASK-7
Пользователь указывает объем флешки в Гб. Программа
должна посчитать сколько файлов размером в 820 Мб по-
мещается на флешку. */
// const flashCardMemoryGB = Number(prompt("Enter flash size in Gb"));
// const fileSize = 820;
// const flashCardMemoryMB = flashCardMemoryGB * 1024;
// const flashCardMemoryFiles = Math.floor(flashCardMemoryMB / fileSize);
// alert(`There are ${flashCardMemoryFiles} files in flash card`);

/* TASK-8
Пользователь вводит сумму денег в кошельке и цену одной
шоколадки. Программа выводит сколько шоколадок может
купить пользователь и сколько сдачи у него останется. */
// const walletMoney = Number(prompt("Enter wallet money"));
// const chocolatePrice = Number(prompt("Enter chocolate price"));
// const chocolateAmount = Math.floor(walletMoney / chocolatePrice);
// const change = walletMoney % chocolatePrice;
// alert(`You can buy ${chocolateAmount} chocolates and your change is ${change}`);

/* TASK-9
Запросите у пользователя трехзначное число и выведите
его задом наперед. Для решения задачи вам понадобится
оператор % (остаток от деления). */
// const number = Number(prompt("Enter three-digit number"));
// const firstDigit = Math.floor(number / 100);
// const secondDigit = Math.floor((number % 100) / 10);
// const thirdDigit = number % 10;
// alert(`${thirdDigit}${secondDigit}${firstDigit}`);

/* TASK-10
Запросите у пользователя целое число и выведите в ответ,
четное число или нет. В задании используйте логические
операторы. В задании не надо использовать if или switch. */
const number = Number(prompt("Enter number"));
if (number % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}
