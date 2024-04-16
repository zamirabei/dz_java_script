// const object = {
//     "name": "zama",
//     "age": 20
// }
// const json =JSON.stringify(object)//стрингифай метод может превращать объекты в JSON
// console.log(json)
// // console.log(JSON.parse(json))// метод парсе может снова JSON превращать в объекты
// const newObj = JSON.parse(json)
// console.log(newObj)

//AJAX - асинхрониурс джаваскрипт and xml
//xhr - xml расширяемый язык разметки (как и нтмл)
//http - протокол передачи гипертекста
//https - с шифрованием , для безопасности
// REQUEST - запрос

// const button = document.querySelector('.btn')
// button.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '')
// }

//гет-запрос на persons.json
fetch('persons.json')
    //метод then-принимает функцию обратного вызова(для преобразования ответа в json
    .then(response => response.json())
    // принимает данные json и обрабатывает их. внутри --- создание картчоек и персонажей и добавление в контейнер
    .then(data => {
        const personsContainer = document.querySelector('.persons-container');
        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('person-card');

            const image = document.createElement('img');
            image.src = person.person_photo; // добавила локальную картинку, для 1ого персонажа,
            image.alt = person.name;
            card.appendChild(image);

            const details = document.createElement('div');
            details.classList.add('person-details');
            details.innerHTML = `
        <h2>${person.name}</h2> 
        <p>Age: ${person.age}</p>
        <p>job: ${person.job}</p>
      `;
            card.appendChild(details);

            personsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading persons:', error));

//создаем новый экземпляр объекта XMLHttpRequest
const zapros = new XMLHttpRequest();

//открываем запрос на получение данных из джейсон файла
zapros.open('GET', 'persons.json', true);

//устанвливаем обработчик события загрузки данных
zapros.onload = function (){
    //проверка статуса ответа сервера. код 200
    if(zapros.status === 200){
        //парсим данные
        const data = JSON.parse(zapros.responseText);
        console.log(data);
    }else {
        //если сервер вернул ошибку,выводим месседж вконсоль
        console.error('Ошибка загрузки дданных:', zapros.statusText);
    }
};
//установка обработчика события ошибки
zapros.onerror = function (){
    console.error('произошла ошибка запроса данных');
};
zapros.send();