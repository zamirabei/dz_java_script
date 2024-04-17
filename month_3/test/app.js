//zadacha_1
const containsOnlyDigits = (str) => {
    const regular = /^\d+$/; // Регулярное выражение, которое , содержbn только цифры
    return regular.test(str); // Проверka, соответствует ли строка регулярному выражению
}
console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // false


//zadacha_2
const message = () => {
    console.log('proshla sekunda');
}
setInterval(message, 1000);

//zadacha_3
const countNumbers = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}
countNumbers();

//zadacha_4
const myBlok = document.getElementById('blok');

myBlok.addEventListener('click', ()=> {
    // myBlok.classList.toggle('bg-color');
    if (myBlok.classList.contains('bg-color')) {
        // Если есть, удаляем этот класс
        myBlok.classList.remove('bg-color');
    } else {
        // Если нет, добавляем этот класс
        myBlok.classList.add('bg-color');
    }
})

//zadacha_5
const xhr = new XMLHttpRequest();
const url = 'bd.json';

xhr.open('GET', url, true);
//обработчик событий
xhr.onreadystatechange = function() {
    //проверка
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
xhr.send();
