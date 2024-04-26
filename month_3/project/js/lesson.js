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
// const converter = (element, target1, target2, current) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open('GET', '../data/converter.json')
//         request.setRequestHeader('Content-type', 'application/json')
//         request.send()
//
//         request.onload = () => {
//             const data = JSON.parse(request.responseText);
//            switch (current){
//                case 'som':
//                    target1.value = (element.value / data.usd).toFixed(2)
//                    target2.value = (element.value / data.eur).toFixed(2)
//                    break
//                case  'usd':
//                    target1.value = (element.value * data.usd).toFixed(2)
//                    target2.value = (element.value * data.usd / data.eur).toFixed(2)
//                    break
//                case 'eur':
//                    target1.value = (element.value * data.eur).toFixed(2);
//                    target2.value = (element.value * data.eur / data.usd).toFixed(2);
//                    break;
//                default:
//                    break
//            }
//            // if (element.value === ''){
//            //     target.value = ''
//            // }
//             element.value === '' && (target1.value = target2.value = '');
//         }
//      }
// }
// const somInput = document.getElementById('som');
// const usdInput = document.getElementById('usd');
// const eurInput = document.getElementById('eur');
//
// converter(somInput, usdInput, eurInput, 'som');
// converter(usdInput, somInput, eurInput, 'usd');
// converter(eurInput, somInput, usdInput, 'eur');
const converter = async (element, target1, target2, current) => {
  element.oninput = async () => {
      try {
          const response = await fetch ('../data/converter.json')
          const data = await response.json();

          switch (current){
              case 'som':
                  target1.value = (element.value / data.usd).toFixed(2);
                  target2.value = (element.value / data.eur).toFixed(2);
                  break;
              case 'usd':
                  target1.value = (element.value * data.usd).toFixed(2);
                  target2.value = (element.value * data.usd / data.eur).toFixed(2);
                  break;
              case 'eur':
                  target1.value = (element.value * data.eur).toFixed(2);
                  target2.value = (element.value * data.eur / data.usd).toFixed(2);
                  break;
              default:
                  break;
          }
          if (element.value === '') {
              target1.value = '';
              target2.value = '';
          }
      } catch (error){
          console.error('error fetching converter data:', error)
      }
  };
};
const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const eurInput = document.getElementById('eur');

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput, 'usd');
converter(eurInput, somInput, usdInput, 'eur');


//card switcher

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let count = 1;
const fetchCard = async (cardNumber) => {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
        const data = await response.json();

        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
            `;

    }catch (error){
        console.error('error fetching card:', error);
    }
};
fetchCard(count);
btnNext.onclick = async() => {
   count = count === 200 ? 1 : count + 1;
   await fetchCard(count);
};
btnPrev.onclick = async() => {
     count = count === 1 ? 200: count -1;
     await fetchCard(count);
};

//zapros --- 2part
const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
fetchPosts();
//weather
const searchInput = document.querySelector('.cityName')
// const btnSearch = document.querySelector('#btn-search')
const cityName = document.querySelector('.city')
const tempCity = document.querySelector('.temp')

const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const BASE_API = 'http://api.openweathermap.org/data/2.5/weather'
const citySearch = () => {
 searchInput.oninput = (event)=>{
    fetch(`${BASE_API}?q=${event.target.value}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data =>{
          cityName.innerHTML = data.name ? data.name: 'город не найден...'
          tempCity.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C': '...'
        } )
 }
}
citySearch()

// //optional chaining - ?.
//
// const address = {
//     street: {
//         home_number: 103,
//         str_name: 'ibraimova'
//     }
// }
// console.log(address.street.str_name)



