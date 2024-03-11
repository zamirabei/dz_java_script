// Запрашиваем у пользователя ввод языка программирования
let language = prompt("Введите язык программирования:").toLowerCase();

// Определяем сферу применения языка программирования
switch(language) {
    case 'javascript':
        console.log("JavaScript - отличный выбор для веб-разработки.");
        break;
    case 'python':
        console.log("Python - широко используется в научных вычислениях, анализе данных и разработке искусственного интеллекта.");
        break;
    case 'java':
        console.log("Java - часто применяется для разработки мобильных приложений (Android), корпоративных приложений и игр.");
        break;
    case 'c#':
        console.log("C# - широко используется для разработки приложений под Windows и игр на платформе Unity.");
        break;
    case 'ruby':
        console.log("Ruby - часто применяется для веб-разработки, особенно в сфере создания веб-приложений на фреймворке Ruby on Rails.");
        break;
    case 'php':
        console.log("Язык программирования, с помощью которого создаются веб-ресурсы – сайты, CMS");
        break;
    case 'c++':
        console.log("Если вы любите компьютерные игры, то знайте, что скорей всего она разработана именно на C++");
        break;
    case 'visual basic':
        console.log("Это наследник такого фундаментального языка как Basic. Конкретно Visual Basic заточен для программирования различных приложений под Windows");
        break;
    case 'sql':
        console.log("Этот язык программирования все еще считается лучшим в вопросе взаимодействия с базами данных");
        break;
    default:
        console.log("Указанный язык программирования не поддерживается или введено некорректное значение.");
}
//задание про обьект "студент"

var student = {
    name: 'Tilek',
    surname: 'Tilekov',
    age: 21,
    major:'frontend'
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.major)
student.grades = [88, 89, 99, 90, 95, 85]
student ['age'] = 31 //izmenenie vozrasta
//student.grades = 91
student.grades.push(88)
console.log(student)
console.log(student.grades)

//цикл фор сумма чисел
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum +=i;
}
console.log('Сумма чисел от 1 до 5', sum)

//цикл фор четные числа от 0 до 10
for (var i = 0; i<=10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}


