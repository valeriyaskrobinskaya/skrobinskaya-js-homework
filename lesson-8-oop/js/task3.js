function anClean (arr) {
    var map = new Map();

    for (var word of arr) {
        var sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(arr));
