var canvaS = document.getElementById('wrapper');
var context = canvaS.getContext("2d");
var canvaSCenterX = canvaS.offsetWidth / 2; // узнаем центр canvas(обвёртки) по X
var canvaSCenterY = canvaS.offsetHeight / 2; // узнаем центр canvas(обвёртки) по Y
var radius = 120; // радиус (растояние)
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние(в градусах) между цифрами на часах для электронных часов
var digitalWatchText;
var digitalWatchWidth = 90;
var digitalWatchHeight = 25;
var radiusForDigitalWatch = 70; // радиус (растояние) для электронных часов;
// (для стрелки часов)
var elemForArrowHours;
var elemForArrowHoursHeight = 50;
var elemForArrowHoursWidth = 9;
// для стрелки минут
var elemForArrowMinutes;
var elemForArrowMinutesHeight = 110;
var elemForArrowMinutesWidth = 5;
// для стрелки секунд
var elemForArrowSeconds;
var elemForArrowSecondsHeight = 135;
var elemForArrowSecondsWidth = 2;
var hoursDeg; //переменная для дальнейшего определение по времени где должна быть стрелка часов
var minutesDeg; //переменная для дальнейшего определение по времени где должна быть стрелка минут
var secondsDeg; //переменная для дальнейшего определение по времени где должна быть стрелка секунд
var hourDigits = 12; //цифры часов


// весь канвас(часы аналоговые)
function Watch() {
    context.fillStyle = "#FCCA66";
    context.beginPath();
    context.arc(canvaSCenterX,canvaSCenterY,150,0,Math.PI*2, false);
    context.fill();

    for (var i = 1; i <= hourDigits; i++) {
        var smallCircleCX,
            smallCircleCY,
            smallCircleRadius = 20,
            smallCircleColor = "#48B382",
            angle;

        angleValue += distanceOfDigits;
        angle = angleValue / 180 * Math.PI;

        smallCircleCX = Math.round(canvaSCenterX + radius * Math.sin(angle));
        smallCircleCY = Math.round(canvaSCenterY - radius * Math.cos(angle));

        context.beginPath();
        context.fillStyle = smallCircleColor;
        context.arc(smallCircleCX,smallCircleCY,smallCircleRadius,0,Math.PI*2, false);
        context.fill();

        context.fillStyle ='black';
        context.font ="normal normal 20px 'Times New Roman'";
        context.textAlign='center';
        context.textBaseline='middle';
        context.fillText(i,smallCircleCX, smallCircleCY);
    }
}

// для электронных часов
function digitalWatch() {
    var time = new Date(); //текущее время
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "#FCCA66";
    context.beginPath();
    context.fillRect(canvaSCenterX - digitalWatchWidth/2, canvaSCenterY - radiusForDigitalWatch - digitalWatchHeight/2, 100, 25);
    context.fill();

    context.fillStyle = "black";
    digitalWatchText = time.toLocaleTimeString();
    context.font ="normal normal 25px 'Times New Roman'";
    context.textAlign='center';
    context.textBaseline='middle';
    context.fillText(digitalWatchText, canvaSCenterX, canvaSCenterY - radiusForDigitalWatch);
    context.fill();
}

// для стрелок часов
function hoursArrow() {
    var time = new Date();
    hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
    context.strokeStyle = "black";
    context.lineWidth = elemForArrowHoursWidth;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(canvaSCenterX, canvaSCenterY);
    context.lineTo(canvaSCenterX + elemForArrowHoursHeight * Math.sin(hoursDeg/180*Math.PI), canvaSCenterY - elemForArrowHoursHeight * Math.cos(hoursDeg/180*Math.PI));
    context.stroke();
}

// для стрелки минут
function minutesArrow() {
    var time = new Date();
    minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
    context.strokeStyle = "black";
    context.lineWidth = elemForArrowMinutesWidth;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(canvaSCenterX, canvaSCenterY);
    context.lineTo(canvaSCenterX + elemForArrowMinutesHeight * Math.sin(minutesDeg/180*Math.PI), canvaSCenterY - elemForArrowMinutesHeight * Math.cos(minutesDeg/180*Math.PI));
    context.stroke();
}

// для стрелки секунд
function secondsArrow() {
    var time = new Date();
    secondsDeg = 6 * time.getSeconds();
    context.strokeStyle = "black";
    context.lineWidth = elemForArrowSecondsWidth;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(canvaSCenterX, canvaSCenterY);
    context.lineTo(canvaSCenterX + elemForArrowSecondsHeight * Math.sin(secondsDeg/180*Math.PI), canvaSCenterY - elemForArrowSecondsHeight * Math.cos(secondsDeg/180*Math.PI));
    context.stroke();
}

// функция для определения положение электронных часов и стрелок для часов, минут, секунд
function arrows() {
    Watch(); // весь канвас(часы аналоговые)
    digitalWatch(); // электронные часы
    hoursArrow(); // для стрелки часов
    minutesArrow(); // для стрелки минут
    secondsArrow(); // для стрелки секунд
}

window.onload = arrows(); // вызываем функцию arrows на момент загрузки страницы
window.setInterval (arrows, 1000); // устанавливаем setInterval на 1 секунду