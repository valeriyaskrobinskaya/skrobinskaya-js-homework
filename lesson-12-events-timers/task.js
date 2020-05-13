var wrap = document.getElementById('clock_dom');
var wrapCenterX = wrap.offsetLeft + wrap.offsetWidth / 2; // узнаём центр div по x
var wrapCentrY = wrap.offsetTop + wrap.offsetHeight / 2; // узнаём центр div по y
var wrapChildElemForDigitalWatch = document.createElement('div'); // создаём div для электронных часов
var radius = 120; // радиус
var radiusForDigitalWatch = 70; // радиус для электронных часов
var angleValue = 0;
var distanceOfDigits = 30; // расстояние в градусах между цифрами на часах
var time = new Date(); // текущее время
var elemForArrowHours = document.createElement('div'); //создаём div для стрелки часов
var elemForArrowMinutes = document.createElement('div'); // создаём div для срелки минут
var elemForArrowSeconds = document.createElement('div'); // создаём div для стрелки секунд
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); // определяем по времени где должна быть стрелка часов
var minutesDeg = 6 * (time.getMinutes() + (1/ 60) * time.getSeconds()); // определяем по времени где должна быть стрелка минут
var secondsDeg = 6 * time.getSeconds() - 6; // определяем по времени где должна быть стреклка секунд
var hoursDigit = 12; // цифры часов

