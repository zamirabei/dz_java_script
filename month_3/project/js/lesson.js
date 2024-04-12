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
