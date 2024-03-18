//1 zadanie--сортировка
//инициализируем массив тегс -- в нем набор строк
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']

//здесь мы создали пустой объект, который нужен для того, чтобы использовать его для подстчета
var tagCounts = {}

//здесь цикл перебирает элементы массива тегс
//внутри цикла переменная тегс будет хранить текущее значение эл-та массива тегс
for (var tags of tags){
    if (tagCounts[tags]){
        tagCounts[tags]++
    }else {
        tagCounts[tags]=1
    }
}
console.log(tagCounts)
//преобразуем объект в массив массивов,где у каждого подмассива есть ключ-значение
//б-а уже сама сортировка в порядке убывания и преобрузуем его обратно в объект
let sortTagsCount = Object.fromEntries(
    Object.entries(tagCounts).sort(([,a],[,b]) => b-a)
);
console.log(sortTagsCount)

//задание 2 --- рест-параметр
//обьявляем массив с названиями книг
let allbooks = [
    {nameBook: "Аргументируй это. Как убедить кого угодно и в чем угодно"},
    {nameBook: "Разреши себе быть богатым"},
    {nameBook: "Обладать"},
    {nameBook: "Свобода"},
    {nameBook: "Сила подсознания"},
    {nameBook: "Счастливый карман"},
    {nameBook: "Продавец воздуха"},
    {nameBook: "Великий канцлер"},
    {nameBook: "Горе от ума"},
    {nameBook: "Преступление и наказание"},
    {nameBook: "Гивенгур"},
    {nameBook: "Антимемуары"},
]
//создаем новый массив филтербукс, где используем метод фильтр, который проходит по каждому обьъекту в массиве
//для каждого бук, проверяем содержит ли его свойство неймбук строку с буквой У
//если содержит, то оно добавляется в наш новый массив
let filterBooks = allbooks.filter(book => book.nameBook.toLowerCase().includes('у'));
//и фильтруем остальные книги, аналогичным образом, с частицей НЕ
let otherBooks = allbooks.filter(book => !book.nameBook.toLowerCase().includes('у'))

console.log('Книги, которые имеют букву у в названии', filterBooks)
console.log('Остальные книги', otherBooks)

//задание 3 ---
const courses = [
    {
        courseName: 'JavaScript',
        students: [
            { name: 'John', grades: [60, 55, 95] },
            { name: 'Jack', grades: [59, 90, 95] }
        ]
    },
    {
        courseName: 'Python',
        students: [
            { name: 'Mark', grades: [78, 82, 80] },
            { name: 'Alice', grades: [85, 88, 90] }
        ]
    }
];
//обьявили kursWithAverage, который будет содержать результат метода мэп
//этот  метод будет проходить по каждому элементу и выполнит указанную функцию
const kursWithAverage = courses.map(course =>{

    //теперь для каждого курса внутри массива курсес, выполнится  также метод мэп
    //для каждого студента, с пом.метода редьюс вычислим средний балл
    //складываем текущую оценку с тотал, а в конце редьюс делит сумму всех оценок на количество(student.grades.length)
    const studentyWithAverages = course.students.map(student =>{
        const averageGrade = student.grades.reduce((total, grade) => total + grade, 0)/ student.grades.length;
        return {name: student.name, averageGrade: averageGrade };
    });
    //создаем для каждого сту3дента новый объект, куда возвращаются значения из мэп
    return { courseName: course.courseName, students: studentyWithAverages};
});
console.log(kursWithAverage);