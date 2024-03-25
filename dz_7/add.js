//функция принимает два значения макс и мин.
//return возвращает целое случайное число в диапазоне от мин до макс
//return возвращает цело случайное число в диапазоне от мин до макс
//Math.random используется для округления результата до ближайшего целого числа
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}
//вызываем функцию getRandomNumber с параметрами 1 и 100, чтобы сгенерировать случайное число
// а потом сохраняем это число в generatedNumber
const generatedNumber = getRandomNumber(1,100);

// checkNumber эта функция вызывается при нажатии на кнопку Проверить
function checkNumber(){
    // userInput сюда получаем значение кот ввел юзер
    // adviceElement получаем ссылку на элемент с айди advice, который используем для вывода подсказок юзеру
    const userInput = document.getElementById('userInput').value;
    const adviceElement = document.getElementById('advice');

// регулярное выражение кот. проверяет содержит ли значение что-то кроме цифр
    if (!/^\d+$/.test(userInput)){
        alert('Пожалуйста введите только цифры!');
        return;
    }


    // проверяем является ли значение userInput не числом нан,
    // и находится ли он в нашем диапазоне
    if(isNaN(userInput) || userInput < 1 || userInput> 100){
        alert('Пожалуйста, введите число от 1 до 100');
        return; //прерываем выполнение функции,
    }

    // если введенноне число меньше(больше) загадонного, то
    if (userInput < generatedNumber){
        adviceElement.textContent = 'Загаданное число больше';
        adviceElement.style.color = 'green';
    }else if (userInput > generatedNumber){
        adviceElement.textContent = 'Загаданное число меньше';
        adviceElement.style.color = 'red';
    }else { //если юзер угадал
        adviceElement.textContent = 'Вы угадали';
        adviceElement.style.color = 'black';
    }
}
