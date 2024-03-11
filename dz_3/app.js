let numbers = [34, 54, 1, 23, 678, 72, 9, 10, 5, 89, 900];
let min = numbers[0]; // Переменная для хранения минимального числа
let max = numbers[0]; // Переменная для хранения максимального числа

// Поиск минимального и максимального числа в массиве
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Самое наименьшее число:", min);
console.log("Самое наибольшее число:", max);
printDelimiter()
//zadanie 2
// Запрос числа от пользователя, c помощью парсеинт функции преобразуем введенного пользователем значения в целое число.
let number = parseInt(prompt("Введите число для генерации таблицы умножения:"));

// Проверка, что введенное значение является числом
if (!isNaN(number)) {
    // Цикл для создания таблицы умножения
    for (let i = 1; i <= 10; i++) {
        let result = number * i; // Результат умножения
        console.log(`${i} * ${number} = ${result}`);
    }
} else {
    console.log("Вы ввели некорректное значение. Пожалуйста, введите число.");
}
function printDelimiter(){
    console.log('-'.repeat(50))
}
printDelimiter()

//zadanie 3
function countVowels(str) {
    var vowels = "aeiouAEIOU"; // Строка с гласными буквами
    var count = 0; // Счетчик гласных

    // Цикл для проверки каждого символа в строке
    for (var i = 0; i < str.length; i++) {
        // Проверка, является ли текущий символ гласной буквой
        // if (vowels.indexOf(str[i]) !== -1) {
        //     count++; // Если да, увеличиваем счетчик на 1
        // }
    }
    return count; // Возвращаем количество гласных
}

// Пример использования функции
var str = "apple";
var vowelsCount = countVowels(str);
console.log(`${str} - количество гласных: ${vowelsCount}`);
