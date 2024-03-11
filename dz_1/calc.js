var num1 = Number(prompt('Введите первое число:'))
var num2 = Number(prompt('Введите второе число:'))

if (num1 >0 && num2 >0) {
    var operator = prompt('Введите оператор (+, -, *, /):');
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/")
    {
        alert ('Неправильный оператор');
    } else {
        if (operator === "+") {
            console.log(num1 + num2)
        } else if (operator === "-") {
            console.log(num1 - num2 )
        } else if (operator === "*") {
            console.log(num1 * num2)
        } else if (operator === "/") {
            if (num2 !== 0) {
                console.log(num1 / num2);
            } else {
                alert('Деление на ноль невозможно');
            }
        }
    }
} else {
    alert('Число должно быть положительным!');
}

var month = prompt('Введите месяц:').toLocaleLowerCase()

if (month === 'март' || month === 'апрель' || month === 'май') {
    alert('Сезон года: Весна');
} else if (month === 'июнь' || month === 'июль' || month === 'август') {
    alert('Сезон года:Лето');
} else if (month === 'сентябрь' || month === 'октябрь' || month === 'ноябрь') {
    alert('Сезон года:Осень');
} else if (month === 'декабрь' || month === 'январь' || month === 'февраль') {
    alert('Сезон года:Зима');
}else {
    alert('Неправильно введены данные')
}
// console.log('Сезон года:'+ season);
