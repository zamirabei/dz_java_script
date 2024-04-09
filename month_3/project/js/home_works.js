//дз_1.1
//функция гетЭлементБайАйди принимает идентификатор элемента в качестве аргумента
//и возвращает ссылку на этот элемент
//click - событие на которое реагирует обработчик
document.getElementById('gmail_button').addEventListener('click', function () {
    validateEmail();
});

//сама проверка почтового адреса
function validateEmail() {
    let emailInput = document.getElementById('gmail_input').value;
    let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

    if (gmailPattern.test(emailInput)) {
        document.getElementById('gmail_result').innerHTML = 'Почта введена правильно';
        document.getElementById('gmail_result').style.color = 'green';
    } else {
        document.getElementById('gmail_result').innerHTML = 'Пожалуйста введите правильный адрес почты';
        document.getElementById('gmail_result').style.color = 'red';
    }
}

//дз_1.2 --- квадратик --- дз_2.1
//находим родительский и маленькие блоки
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

//ширина и высота родите-ого и маленького блока
const blockWidth = childBlock.offsetWidth; //ширина маленького квадрата
const blockHeight = childBlock.offsetHeight; //ширина маленького квадрата
const parentWidth = parentBlock.offsetWidth; //штрина родителя
const parentHeight = parentBlock.offsetHeight; //высота родителя


let currentDir = 'right'; //начинаем движ слева направо

//функ moveBlock отвечает за движение мал. блока
function moveBlock() {
    let currentLeft = parseInt(childBlock.style.left) || 0;
    let currentTop = parseInt(childBlock.style.top) || 0;

    //оператор выбора на основе переменной каррентдир(т.е. дивжение идет справа
    switch (currentDir) {
        //условие проверяет не достиг ли блок правого края родителя
        case "right":
            if (currentLeft + blockWidth < parentWidth) {
                childBlock.style.left = currentLeft + 1 + 'px';
            } else { //если блок достиг правого  края родит эл-та, то выполняется элсе
                childBlock.style.left = parentWidth - blockWidth + 'px';
                currentDir = 'down';
            }
            break;
        case 'down':
            if (currentTop + blockHeight < parentHeight) {
                childBlock.style.top = currentTop + 1 + 'px';
            } else {
                childBlock.style.top = parentHeight - blockHeight + 'px';
                currentDir = 'left';
            }
            break;
        case 'left':
            if (currentLeft > 0) {
                childBlock.style.left = currentLeft - 1 + 'px';

            }else{
                childBlock.style.left = '0px';
                currentDir = 'up';
            }
            break;
        case 'up':
            if (currentTop > 0) {
                childBlock.style.top = currentTop - 1 + 'px';

            }else{
                childBlock.style.top = '0px';
                currentDir = 'right';
            }
            break;
        // default: не знаю, можно ли использовать здесь дефолт, точнее я посчитала, что он не обязателен
            break;
    }
    requestAnimationFrame(moveBlock);//вызов снова и снова
}
requestAnimationFrame(moveBlock);//запуск анимации

//секундомер  --- дз_2.2
let seconds = 0;
let intervalID;

//обновление времени
function updateTime(){
    const secondsElement = document.getElementById('seconds');
    secondsElement.textContent = seconds;
}
//запуск секундомера
function startStopWatch(){
    if(!intervalID){
        intervalID = setInterval(() => {
            seconds++;
            updateTime();
        }, 1000);
    }
}

//остановка секундомера
function stopStopWatch(){
    clearInterval(intervalID);
    intervalID = null;
}
//сброс
function resetStopwatch(){
    stopStopWatch();
    seconds = 0;
    updateTime();
}
//обработчики событий для кнопок
document.getElementById('start').addEventListener('click', startStopWatch);
document.getElementById('stop').addEventListener('click', stopStopWatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);

updateTime();