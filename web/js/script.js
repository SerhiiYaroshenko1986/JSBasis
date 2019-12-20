let enterNumber = prompt("Введіть трьохзначне число");
let fixingNumber = 0;
if (enterNumber > 0) {
    fixingNumber = enterNumber;
} else {
    fixingNumber = enterNumber * (-1);
}
let firstNumber = fixingNumber % 10;
let twoNumbers = (fixingNumber - firstNumber) / 10
let secondNumber = twoNumbers % 10;
let thirdNumber = (twoNumbers - secondNumber) / 10;

if (enterNumber > 0) {
    alert(`Дзеркальне відображення вашого числа ${firstNumber}${secondNumber}${thirdNumber}`);
} else {
    alert(`Дзеркальне відображення вашого числа -${firstNumber}${secondNumber}${thirdNumber}`);
}