var firstName = prompt('Ваше имя?');
var lastName = prompt('Ваша фамилия?');
var surName = prompt('Ваше Отчество?');
var age = parseInt(prompt('Сколько вам полных лет?'));
var pension;

if (age >= 63) {
    pension = 'да';
} else {
    pension = 'нет'
}

var maleGender = confirm('Ваш пол мужской?');
var gender;
if (maleGender === true) {
    gender = 'мужской';
} else {
    gender = 'женский';
}

var fullName = lastName + ' ' + firstName + ' ' + surName;

alert('Ваше ФИО: ' + fullName +
    '\nВаш возраст в годах: ' + age +
    '\nВаш возраст в днях: ' + age * 365 +
    '\nЧерез 5 лет Вам будет: ' + (age + 5) +
    '\nВаш пол: ' + gender +
    '\nВы на пенсии: ' + pension);
