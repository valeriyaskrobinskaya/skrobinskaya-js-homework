var age;
var male = 'Мужской';
var female = 'Женский';
var noData = 'Нет данных';

function getUserDate(question = 'Введите ваше Имя') {
    var answ = prompt(`${question}:`);
    if (answ) {
        return answ;
    }
    answ = prompt(`${question} корректно, пожалуйста:`);
    return answ || noData;
}

function checkAge(num) {
    var toNum = parseInt(num, 10);
    return toNum > 1 && toNum <= 120;
}

function getNumAndWord(num, wrd1, wrd2, wrd3) {
    if (!parseInt(num, 10)) {
        return noData;
    }
    var dd = num % 100;
    var d = dd % 10;
    
    switch (dd) {
        case 11:
        case 12:
        case 13:
        case 14:
            return `${num} ${wrd3}`;
    }
    switch (d) {
        case 1:
            return `${num} ${wrd1}`;
        case 2:
        case 3:
        case 4:
            return `${num} ${wrd2}`;
        default:
            return `${num} ${wrd3}`;
    }
}

function getYesOrNoOrOtherAnswer(value, trueWord = 'Yes', falseWord = 'No') {
    return value ? trueWord : falseWord;
}

function checkOnRetire(ageOfRetire, sexToCheck = true) {
    return sexToCheck ? ageOfRetire >= 63 : ageOfRetire >= 58;
}

var name = getUserDate();
var surname = getUserDate('Введите вашу Фамилию');
var patronymic = getUserDate('Введите ваше Отчество');
var age = getUserDate('Сколько вам лет');
if (age !== noData && !checkAge(age)) {
    age = getUserDate('Введите числом и правильно сколько вам лет');
    if (!checkAge(age)) {
        age = noData;
    }
}

// eslint-disable-next-line no-restricted-globals
var sex = confirm('Ваш пол мужской?');


alert(`
    Ваше ФИО: ${surname} ${name} ${patronymic}
    Ваш возраст в годах: ${getNumAndWord(age, 'год', 'года', 'лет')}
    Ваш возраст в днях: ${getNumAndWord((age * 365), 'день', 'дня', 'дней')}
    Через 5 лет вам будет: ${getNumAndWord((+age + 5), 'год', 'года', 'лет')}
    Ваш пол: ${getYesOrNoOrOtherAnswer(sex, male , female)}
    Вы на пенсии: ${getYesOrNoOrOtherAnswer(checkOnRetire(age, sex))}`);


