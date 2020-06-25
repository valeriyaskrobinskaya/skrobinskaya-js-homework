var wrap = document.getElementById('clock_dom');
var wrapCenterX = wrap.offsetLeft + wrap.offsetWidth / 2; // узнаем центр div по X
var wrapCenterY = wrap.offsetTop + wrap.offsetHeight / 2; // узнаем центр div по Y
var wrapChildElemForDigitalWatch = document.createElement("div"); // создаем div для электронных часов
var radius = 120; // радиус
var radiusForDigitalWatch = 70; // радиус для электронных часов
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние(в градусах) между цифрами на часах
var time = new Date(); //текущее время
var elemForArrowHours = document.createElement("div"); // создаем div для стрелки часов
var elemForArrowMinutes = document.createElement("div"); // создаем div для стрелки минут
var elemForArrowSeconds = document.createElement("div"); // создаем div для стрелки секунд
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); //определяем по времени где должна быть стрелка часов
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); //определяем по времени где должна быть стрелка минут
var secondsDeg = 6 * time.getSeconds() - 6; //определяем по времени где должна быть стрелка секунд
var hourDigits = 12; //цифры часов

for (let i = 1; i <= hourDigits; i++) {
    var wrapChildElem = document.createElement("div"), // создаем div для номеров часов
        angle,
        wrapChildElemCenterX,
        wrapChildElemCenterY;

    angleValue += distanceOfDigits;
    angle = angleValue / 180 * Math.PI;

    wrapChildElem = wrap.appendChild(wrapChildElem); //div для номеров часов делаем дочерним элементом wrap
    wrapChildElem.classList.add('childElem'); //устанавливаем готовый CSS класс для дочерних элементов
    wrapChildElem.innerHTML = i;

    wrapChildElemCenterX = wrapCenterX + radius * Math.sin(angle); // узнаем центр дочернего элемента по X
    wrapChildElemCenterY = wrapCenterY - radius * Math.cos(angle); // узнаем центр дочернего элемента по Y

    wrapChildElem.style.left = Math.round(wrapChildElemCenterX - wrapChildElem.offsetWidth / 2) + "px";
    wrapChildElem.style.top = Math.round(wrapChildElemCenterY - wrapChildElem.offsetHeight / 2) + "px";
}

// вставляем созданные элементы (часы и стрелки) в конец дочерних элементов wrap
wrapChildElemForDigitalWatch = wrap.appendChild(wrapChildElemForDigitalWatch); //часы
elemForArrowHours = wrap.appendChild(elemForArrowHours); //стрелка часов
elemForArrowMinutes = wrap.appendChild(elemForArrowMinutes); //стрелка минут
elemForArrowSeconds = wrap.appendChild(elemForArrowSeconds); //стрелка секунд

// устанавливаем класс для электронных часов и к каждой стрелке
wrapChildElemForDigitalWatch.classList.add("childElemWatch"); // для электронных часов
elemForArrowHours.classList.add("elemHours"); // для стрелки часов
elemForArrowMinutes.classList.add("elemMinutes"); //для стрелки минут
elemForArrowSeconds.classList.add("elemSeconds"); //для стрелки секунд

// определяем где будут стоять электронные часы
wrapChildElemForDigitalWatch.style.left = wrapCenterX - wrapChildElemForDigitalWatch.offsetWidth / 2 + "px";
wrapChildElemForDigitalWatch.style.top = wrapCenterY - radiusForDigitalWatch + 10 + "px";
// определяем где будет стоять стрелка часа
elemForArrowHours.style.top = wrapCenterY - elemForArrowHours.offsetHeight + 10 + "px";
elemForArrowHours.style.left = wrapCenterX - elemForArrowHours.offsetWidth / 2 + "px";
// определяем где будет стоять стрелка минут
elemForArrowMinutes.style.top = wrapCenterY - elemForArrowMinutes.offsetHeight + 10 + "px";
elemForArrowMinutes.style.left = wrapCenterX - elemForArrowMinutes.offsetWidth / 2 + "px";
// определяем где будет стоять стрелка секнд
elemForArrowSeconds.style.top = wrapCenterY - elemForArrowSeconds.offsetHeight + 10 + "px";
elemForArrowSeconds.style.left = wrapCenterX - elemForArrowSeconds.offsetWidth / 2 + "px";

// определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
elemForArrowHours.style.transformOrigin = "center 50px";
elemForArrowMinutes.style.transformOrigin = "center 110px";
elemForArrowSeconds.style.transformOrigin = "center 135px";

// функция для определения положение электронных часов и стрелок для часов, минут, секунд
function arrows() {
    // электронные часы
    var time = new Date();
    wrapChildElemForDigitalWatch.innerHTML = time.toLocaleTimeString();
    // секундные стрелки
    secondsDeg += 6;
    elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
    // минутныеные стрелки
    minutesDeg += 6 * (1 / 60);
    elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
    // часовые стрелки
    hoursDeg += 6 * (1 / 360);
    elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
}

window.onload = arrows();
window.setInterval (arrows, 1000); // выполняем код каждую секунду