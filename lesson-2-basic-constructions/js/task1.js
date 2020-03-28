// var vowelsLetters  = ["а","е","ё","и","о","у","ы","э","ю","я"];
//
// var array = ["ваидоыврадрафдугк"];
//
// function findVowels() {
//
// }

function words() {
    var vowelsLetters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    var f = prompt("Введите строку:");

    var k = [...f].reduce((a, b) => a + vowelsLetters.includes(b), 0);

    return k ? k : "Нет совпадений";
}

console.log(words());