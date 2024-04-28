function extNumbers(str){
    //здесь используем регулярное выражение
    const regex = /\d+/g;
    //метод возвращающий массив совпадений
    const numbersArray = str.match(regex);
    //превращаем найденные строки в числа
    if(numbersArray){
        return numbersArray.map(Number);
    }else {
        return [];
    }
}
console.log(extNumbers("a1fg5hj6kjbhjgvf77"));

//2
function fibonacci (n, a=0, b=1){
    if (n<=0){
        return;
    }
console.log(a);
setTimeout(()=> {
    fibonacci(n-1, b, a+b);
}, 1000)
fibonacci(12, 0, 1);
}
//3
async function productsTitles(){
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();

        data.forEach(product=> {
            console.log(product.title);
    });
}catch (error){
    console.error('oshibka pri vypolnenii zaprosa', error);
    }
}
productsTitles();

//4
const buttonsContainer = document.getElementById('buttonsContainer')
buttonsContainer.addEventListener('click', function (event){
    if (event.target.classList.contains('colorButton')){
        const color = event.target.dataset.color;
        document.body.style.backgroundColor = color;
    }
})
//5
const square = document.getElementById('square')
const toggleBtn = document.getElementById('toggleBtn')
toggleBtn.addEventListener('click', function (){
    square.style.display = square.style.display === 'none' ? 'block' : 'none';

})

//6
const counterElem = document.getElementById('counter')
let count  = 0;
const interval = setInterval(function (){
    count++;
    counterElem.textContent =count
    if(count === 100){
        clearInterval(interval)
    }
},1000)
//7
