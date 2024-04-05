//дз_1.1
//функция гетЭлементБайАйди принимает идентификатор элемента в качестве аргумента
//и возвращает ссылку на этот элемент
//click - событие на которое реагирует обработчик
document.getElementById('gmail_button').addEventListener('click', function (){
    validateEmail();
});
//сама проверка почтового адреса
function validateEmail(){
    let emailInput = document.getElementById('gmail_input').value;
    let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

    if (gmailPattern.test(emailInput)){
        document.getElementById('gmail_result').innerHTML = 'Почта введена правильно';
        document.getElementById('gmail_result').style.color = 'green';
    }else {
        document.getElementById('gmail_result').innerHTML = 'Пожалуйста введите правильный адрес почты';
        document.getElementById('gmail_result').style.color = 'red';
    }
}
//дз1.2
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
const moveDistance = 5;

function moveRight() {
    let currentPosition = parseFloat(childBlock.style.left) || 0;

    if (currentPosition < parentBlock.offsetWidth - childBlock.offsetWidth){
        childBlock.style.left = currentPosition + moveDistance + 'px';
        setTimeout(moveRight, 100);//рекурсия. вызываем функцию через задержку

    }
}
moveRight();//движение вправо