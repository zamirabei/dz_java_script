//phone block
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_span')

// phoneButton.addEventListener('click')

// const regExp = /\+996 [2579][0-9][0-9]/
const regExp = /^\+996 [2579]\d{2}-\d{2}-\d{2}/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'ok'
        phoneSpan.style.color = 'green'
    }else{
        phoneSpan.innerHTML = 'not ok'
        phoneSpan.style.color = 'red'
    }
}
//recursion -рекурсия
let count = 0
const increment = () => {
    count++
    console.log(count)
    increment() //рекурсия - вызывает саму себя , нужны ограничители
}
increment()