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
// //recursion -рекурсия
// let count = 0
// const increment = () => {
//     count++
//     console.log(count)
//     increment() //рекурсия - вызывает саму себя , нужны ограничители
// }
// increment()

//tab slider

// const tabContentBlocks = document.querySelector('.tab_content_item')
// const tabContentItems = document.querySelector('.tab_content_item')

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const hideTabContent = () => {
   tabContentBlocks.forEach((item) => {
       item.style.display = 'none'
   })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (index=0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent(0)

tabParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        tabContentItems.forEach((item,index) =>{
            if(event.target === item){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}
let currentIndex = 0;
const showNextSlide = () => {
    hideTabContent();
    currentIndex = (currentIndex +1) % tabContentBlocks.length;
    showTabContent(currentIndex);
}
let intervalId = setInterval(showNextSlide, 3000);

tabParent.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
})

tabParent.addEventListener('mouseLeave', ()=>{
    intervalId = setInterval(showNextSlide, 3000);
});

//converter

// const usdInput = document.querySelector('#usd');
// const somInput = document.querySelector('#som');

// somInput.addEventListener('input', ()=> {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', ()=> {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     })
// })
//
// usdInput.addEventListener('input', ()=> {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', ()=> {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     })
// })

//GRY - gont repeat yourself- принцип программирования - не копируй код
const converter = (element, target1, target2, current) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.responseText);
           switch (current){
               case 'som':
                   target1.value = (element.value / data.usd).toFixed(2)
                   target2.value = (element.value / data.eur).toFixed(2)
                   break
               case  'usd':
                   target1.value = (element.value * data.usd).toFixed(2)
                   target2.value = (element.value * data.usd / data.eur).toFixed(2)
                   break
               case 'eur':
                   target1.value = (element.value * data.eur).toFixed(2);
                   target2.value = (element.value * data.eur / data.usd).toFixed(2);
                   break;
               default:
                   break
           }
           // if (element.value === ''){
           //     target.value = ''
           // }
            element.value === '' && (target1.value = target2.value = '');
        }
     }
}
const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const eurInput = document.getElementById('eur');

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput, 'usd');
converter(eurInput, somInput, usdInput, 'eur');

