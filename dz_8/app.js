//переменная,кот. будет отслеживать статус покупки билетов для каждого фильма
let moviesStatus = [];

//массив содержит инфу о фильмах в виде обьектов
//каждый объект содержит свойства
let movies = [
    {title: 'Inseption', rating: 5, year: 2010, director: 'Christopher Nolan'},
    { title: 'The Shawshank Redemption', rating: 9.3, year: 1994, director: 'Frank Darabont' },
    { title: 'The Dark Knight', rating: 9.0, year: 2008, director: 'Christopher Nolan' },
    { title: 'Pulp Fiction', rating: 8.9, year: 1994, director: 'Quentin Tarantino' },
];

//DOMContentLoaded выполянет код после загрузки всех нтмл элементов
document.addEventListener("DOMContentLoaded", function (){

    //получение ссылки на тибоди-- и сохранение ее в tableBody
    const tableBody = document.querySelector('#moviesTable tbody');

    //итерация по каждому объекту movie в массиве movies, он принимает тек.объект и его индекс
    movies.forEach((movie, index) => {

        //создание новой строки внутри таблицы
        const row = document.createElement('tr');

       //нмтл содержимое строки и кнопка Купить внутри таблицы (в строке, рядом с фильмом)
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.director}</td>
            <td><button onclick="buyTicket(${index})">Купить</button></td>
        `;
        tableBody.appendChild(row);//добавляем созданную строку в конец тела таблицы
        moviesStatus.push(false);//здесь,отмечаем, что пока что фильм не был куплен
    });
});

//фнкция кот. вызывается при нажатии на кнопку купить
// и получает ссылку на мод.окно с классом модал
function buyTicket(index) {
    //получаем ссылку на мод.окно с классом модал и сохраняем его в переменной модал
    const modal = document.querySelector('.modal');

    modal.rowIndex = index; // Сохраняем индекс строки в модальном окне для послед.использов. при подстверждении покупки
    modal.style.display = 'block';//отображение мод.окна
}
//функция подтверждения при нажатии для покупки билета
function confirmPurchase() {
    const modal = document.querySelector('.modal');
    const rowIndex = modal.rowIndex; // Получаем индекс строки из модального окна

    //получение ссылки на строку таблицы о выбранном фильме, и сохранение ее в переменной роу
    const row = document.querySelector(`#moviesTable tbody tr:nth-child(${rowIndex + 1})`);

    //доабвляем класс bought, чтобы отметить,что билет был куплен
    row.classList.add('bought');

    //получение ссылки на кнопку купить изменяет ее статус на куплено,
    //далее он закрывает мод.окно и обновляет статус фильма в массиве moviesStatus
    const button = row.querySelector('button');
    button.disabled = true;//отключаем кнопку
    button.textContent = 'Билет был куплен';
    closeModal();
    moviesStatus[rowIndex] = true;
}

//закртыие мод.окна
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none'; //скрытие окна
}
