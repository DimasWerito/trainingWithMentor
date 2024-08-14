// task 1
/* Запросить у пользователя его возраст и определить, кем он
является: ребенком (0–2), подростком (12–18), взрослым
(18_60) или пенсионером (60– ...). */
// let user;
// let userAge = Number(prompt("How old are you?"));
// if (userAge < 2) {
//   user = "baby";
// } else if (userAge >= 12 && userAge < 18) {
//   user = "teenager";
// } else if (userAge >= 18 && userAge < 60) {
//   user = "adult";
// } else {
//   user = "senior";
// }
// console.log(user);

/* 2. Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,
2–@, 3–# и т. д). */
// let number = Number(prompt("Enter number from 0 to 9"));
// switch (number) {
//   case 0:
//     console.log("!");
//     break;
//   case 1:
//     console.log("@");
//     break;
//   case 2:
//     console.log("#");
//     break;
//   case 3:
//     console.log("$");
//     break;
//   case 4:
//     console.log("%");
//     break;
//   case 5:
//     console.log("^");
//     break;
//   case 6:
//     console.log("&");
//     break;
//   case 7:
//     console.log("*");
//     break;
//   case 8:
//     console.log("(");
//     break;
//   case 9:
//     console.log(")");
//     break;
// }

/* 3. Запросить у пользователя трехзначное и число и проверить,
есть ли в нем одинаковые цифры. */
// let number = Number(prompt("Enter 3 digit number"));
// if (number[0] === number[1]) {
//   console.log("Yes");
// } else if (number[1] === number[2]) {
//   console.log("Yes");
// } else if (number[0] === number[2]) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

/* 4. Запросить у пользователя год и проверить, високосный он
или нет. Високосный год либо кратен 400, либо кратен 4 и
при этом не кратен 100. */
// let year = Number(prompt("Enter year"));
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap year");
// } else {
//   1986;
//   console.log("Not leap year");
// }

/* 5. Запросить у пользователя пятиразрядное число и опреде-
лить, является ли оно палиндромом. */
// let num = Number(prompt("Enter 5 digit number"));
// if (num[0] === num[4] && num[1] === num[3]) {
//   console.log("The number is palindrome");
// } else {
//   console.log("The number is not palindrome");
// }

/* 1. Подсчитать сумму всех чисел в заданном пользователем
диапазоне. */
// let numStart = Number(prompt("Enter a starting number"));
// let numEnd = Number(prompt("Enter an ending number"));
// let sum = 0;
// for (let i = numStart; i <= numEnd; i++) {
//   sum += i;
// }
// console.log(sum);

/* 2. Запросить 2 числа и найти только наибольший общий
делитель. */
// let numOne = Number(prompt("Enter first number"));
// let numTwo = Number(prompt("Enter second number"));
// function gcd(numOne, numTwo) {
//   if (numTwo === 0) {
//     return numOne;
//   }
//   return gcd(numTwo, numOne % numTwo);
// }
// console.log(gcd(numOne, numTwo));

/* 3. Запросить у пользователя число и вывести все делители
этого числа. */
// let number = Number(prompt("Enter number"));
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }

/* 4. Определить количество цифр в введенном числе. */
// let num = prompt("Enter number");
// console.log(num.length);

/* 5. Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной пере-
менной (не 10) для ввода чисел пользователем. */
//?????
