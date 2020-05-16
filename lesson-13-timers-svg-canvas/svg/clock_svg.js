var svg = document.getElementById("wrapper");
var widthOfSvg = 300; //ширина svg,
var heightOfSvg = 300; //высота svg
var xmlnsOfSvg = 'http://www.w3.org/2000/svg'; //для объявления пространства имен
var svgCenterX;
var svgCenterY;
// для большого круга часов
var bigCircleForWatch; //большой круг для часов
var bigCircleCX = 150; //сх большого круга
var bigCircleCY = 150; //су большого круга
var bigCircleRadius = 150; //r большого круга
var bigCircleColor = "#FCCA66"; //цвет большого круга
// для электронных часов
var svgChildElemForDigitalWatch; //создали переменную для электронных часов
var svgChildElemForDigitalWatchText;
var radiusForDigitalWatch = 70; // радиус (растояние) для электронных часов;

var radius = 120; // радиус (растояние)
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние(в градусах) между цифрами на часах
var time = new Date(); //текущее время
// для стрелок часов(час, минут, секунд)
var elemForArrowHours; // создаем переменную для стрелки часов
var elemForArrowHoursHeight = 50;
var elemForArrowHoursWidth = 9;
var elemForArrowMinutes; // создаем переменную для стрелки минут
var elemForArrowMinutesHeight = 110;
var elemForArrowMinutesWidth = 5;
var elemForArrowSeconds; // создаем переменную для стрелки секунд
var elemForArrowSecondsHeight = 135;
var elemForArrowSecondsWidth = 2;
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); //определяем по времени где должна быть стрелка часов
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); //определяем по времени где должна быть стрелка минут
var secondsDeg = 6 * time.getSeconds() - 6; //определяем по времени где должна быть стрелка секунд
var hourDigits = 12; //цифры часов

svg.style.width = widthOfSvg;
svg.style.height = heightOfSvg;
svg.style.xmlns = xmlnsOfSvg;

// для большого круга часов
bigCircleForWatch = document.createElementNS(xmlnsOfSvg, "circle");
bigCircleForWatch.setAttribute("cx", bigCircleCX);
bigCircleForWatch.setAttribute("cy", bigCircleCY);
bigCircleForWatch.setAttribute("r", bigCircleRadius);
bigCircleForWatch.setAttribute("fill", bigCircleColor);
svg.appendChild(bigCircleForWatch); //созданный большой круг для часов делаем дочерным элементом svg
// размер svg и его позиция относительно окна
svgCenterX = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width / 2; //узнаем центр svg по X
svgCenterY = svg.getBoundingClientRect().top + svg.getBoundingClientRect().height / 2; //узнаем центр svg по Y

for (var i = 1; i <= hourDigits; i++) {
    var svgChildElem = document.createElementNS(xmlnsOfSvg, "circle"),// создаем круги для цифр
        svgChildElemText = document.createElementNS(xmlnsOfSvg, "text"),// создаем текст цифры
        angle,
        smallCircleCX,
        smallCircleCY,
        smallCircleRadius = 20,
        smallCircleColor = "#48B382";

    angleValue += distanceOfDigits;
    angle = angleValue / 180 * Math.PI;

    smallCircleCX = Math.round(svgCenterX + radius * Math.sin(angle) - svg.getBoundingClientRect().left);
    smallCircleCY = Math.round(svgCenterY - radius * Math.cos(angle) - svg.getBoundingClientRect().top);

    // круги для цифр
    svgChildElem.setAttribute("cx", smallCircleCX);
    svgChildElem.setAttribute("cy", smallCircleCY);
    svgChildElem.setAttribute("r", smallCircleRadius);
    svgChildElem.setAttribute("fill", smallCircleColor);
    svgChildElem = svg.appendChild(svgChildElem);

    //  цифры
    svgChildElemText.innerHTML = i;
    svgChildElemText.setAttribute("x", smallCircleCX);
    svgChildElemText.setAttribute("y", smallCircleCY);
    svgChildElemText.setAttribute("text-anchor", "middle");
    svgChildElemText.setAttribute("dominant-baseline", "central");
    svgChildElemText.style.fontSize = 20;
    svgChildElemText = svg.appendChild(svgChildElemText);
}

// для электронных часов
svgChildElemForDigitalWatch = document.createElementNS(xmlnsOfSvg, "rect");
svg.appendChild(svgChildElemForDigitalWatch);
svgChildElemForDigitalWatch.setAttribute("x", (svgCenterX - svgChildElemForDigitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
svgChildElemForDigitalWatch.setAttribute("y", (svgCenterY - radiusForDigitalWatch) - svg.getBoundingClientRect().left);
svgChildElemForDigitalWatch.setAttribute("fill", "none");
svgChildElemForDigitalWatchText = document.createElementNS(xmlnsOfSvg, "text");
svgChildElemForDigitalWatchText.setAttribute("x", (svgCenterX - svgChildElemForDigitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
svgChildElemForDigitalWatchText.setAttribute("y", (svgCenterY - radiusForDigitalWatch) - svg.getBoundingClientRect().top);
svgChildElemForDigitalWatchText.setAttribute("text-anchor", "middle");
svgChildElemForDigitalWatchText.setAttribute("dominant-baseline", "central");
svgChildElemForDigitalWatchText.style.fontSize = 25;
svgChildElemForDigitalWatchText = svg.appendChild(svgChildElemForDigitalWatchText);

// для часовой стрелки
elemForArrowHours = document.createElementNS(xmlnsOfSvg, "line");
elemForArrowHours.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
elemForArrowHours.setAttribute("y1", svgCenterY - elemForArrowHoursHeight - svg.getBoundingClientRect().top);
elemForArrowHours.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
elemForArrowHours.setAttribute("y2", svgCenterY);
elemForArrowHours.setAttribute("stroke", "black");
elemForArrowHours.setAttribute("stroke-width", elemForArrowHoursWidth);
elemForArrowHours.setAttribute("stroke-linecap", "round");
svg.appendChild(elemForArrowHours);

// для минутной стрелки
elemForArrowMinutes = document.createElementNS(xmlnsOfSvg, "line");
elemForArrowMinutes.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
elemForArrowMinutes.setAttribute("y1", svgCenterY - elemForArrowMinutesHeight - svg.getBoundingClientRect().top);
elemForArrowMinutes.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
elemForArrowMinutes.setAttribute("y2", svgCenterY);
elemForArrowMinutes.setAttribute("stroke", "black");
elemForArrowMinutes.setAttribute("stroke-width", elemForArrowMinutesWidth);
elemForArrowMinutes.setAttribute("stroke-linecap", "round");
svg.appendChild(elemForArrowMinutes);

// для секундной стрелки
elemForArrowSeconds = document.createElementNS(xmlnsOfSvg, "line");
elemForArrowSeconds.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
elemForArrowSeconds.setAttribute("y1", svgCenterY - elemForArrowSecondsHeight - svg.getBoundingClientRect().top);
elemForArrowSeconds.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
elemForArrowSeconds.setAttribute("y2", svgCenterY);
elemForArrowSeconds.setAttribute("stroke", "black");
elemForArrowSeconds.setAttribute("stroke-width", elemForArrowSecondsWidth);
elemForArrowSeconds.setAttribute("stroke-linecap", "round");
svg.appendChild(elemForArrowSeconds);


// определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
elemForArrowHours.style.transformOrigin = "center 150px";
elemForArrowMinutes.style.transformOrigin = "center 150px";
elemForArrowSeconds.style.transformOrigin = "center 150px";

// функция для определения положение электронных часов и стрелок для часов, минут, секунд
function arrows() {
    // электронные часы
    var time = new Date(); //текущее время
    svgChildElemForDigitalWatchText.innerHTML = time.toLocaleTimeString();
    // стрелки
    secondsDeg += 6;
    elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
    minutesDeg += 6 * (1/60);
    elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
    hoursDeg += 6 * (1/360);
    elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
}

window.onload = arrows(); // вызываем функцию arrows на момент загрузки страницы
window.setInterval (arrows, 1000); // устанавливаем setInterval на 1 секунду