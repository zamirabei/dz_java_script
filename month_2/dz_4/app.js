//1 zadanie
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
    var tagCounts = {}
for (var tags of tags){
    if (tagCounts[tags]){
        tagCounts[tags]++
    }else {
        tagCounts[tags]=1
    }
}
console.log(tagCounts)

//2 zadanie

var firstArr = [1,2,3,45,32,56,61,23,12,2,34,5,6,3,76,67,87,76];
var secondArr = [1,45,32,3,4,2,56,76,67,87,89,8,56,54];
var elements = [];

for (var i = 0; i < firstArr.length; i++) {
    var currentElement = firstArr[i];
    for (var j=0; j<secondArr.length; j++){
        if (currentElement === secondArr[j]){
            elements.push(currentElement);
            break;
        }
    }
}
console.log(elements);

//3 zadanie
function averageOfPositiveNumbers(arr) {
    let sum = 0
    let count = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i]>0){
            sum +=arr[i]
            count++
        }
    }
    if (count === 0){
        return 'net'
    }
    return sum/count
}
 var numbers =   [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
console.log(averageOfPositiveNumbers(numbers))

//4 zadanie
var wordsArr = ['text', 'frontend', 'apple', 'orange', 'Banana', 'student', 'course'];
var filteredWords = wordsLetters (wordsArr);

function wordsLetters(arr) {
    var filteredWords = [];

    for (var word of arr) {
        var lowerCaseWord = word.toLowerCase(); // переводим  слово в нижний регистр
        // if (lowerCaseWord.includes('t') || lowerCaseWord.includes('c')) {
        //     filteredWords.push(word);
        // }  можно ли было использовать такой вариант кода ?
        if (lowerCaseWord.indexOf('t') !== -1 || lowerCaseWord.indexOf('c') !== -1) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}
console.log(filteredWords);
