//zadanie_1
//здесь получаем ссылку на наш счетчик в нтмл
//и сохраняем эту ссылку в переменной counterInput
const counterInput = document.getElementById('counter')


//эта функция увеличивает значение счетчика.
//сначала получаем текущее значение счетчика и увеличиваем его на 1
//и присваиваем значение обратно в counterInput
//потом вызываем функцию counterColor, чтобы обновить цвет счетчика в зависимочти от нового значения
//аналогично для двух других функций ниже
function increment(){
    let value = parseInt(counterInput.value); //parseInt преобразует строку в число
    value++;
    counterInput.value = value;
    counterColor(value);
}
function decrement(){
    let value = parseInt(counterInput.value);
    value--;
    counterInput.value = value;
    counterColor(value);
}
function reset(){
    counterInput.value =0;
    counterColor(0);
}
//фнкция каунтерКОлор обновляет цвет счетчика, в зависимости от переданного значения value
//если value > 0, то удаляем классы ред и грей, и добавляем грей в counterInput
//аналогично с другими цветами
function counterColor(value){
    if (value > 0){
        counterInput.classList.remove('red');
        counterInput.classList.remove('gray');
        counterInput.classList.add('green');
    }else if (value < 0){
        counterInput.classList.remove('green');
        counterInput.classList.remove('gray');
        counterInput.classList.add('red');
    }else {
        counterInput.classList.remove('green');
        counterInput.classList.remove('red');
        counterInput.classList.add('gray');
    }
}

//zadanie_2
//сообщаем пользователю и показываем текст
function showMessage(message){
    alert(message);
}