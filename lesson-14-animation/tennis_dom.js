var wrap = document.getElementById('wrapper');
var widthOfWrap = "700px"; //ширина wrap
var heightOfWrap = "400px"; //высота wrap
var buttonStart = document.createElement("input"); //создаём input для кнопки СТАРТ
var scoreBoard = document.createElement("div"); //сoздаём div для табло
var score1 = 0; //очки первого игрока
var score2 = 0; //очки второго игрока
var racquet1 = document.createElement("div"); //создаём div для первой(левой) ракетки
var racquet2 = document.createElement("div"); //создаём div для второй(правой) ракетки
var racquetH; //создаём переменную racquetH для дальнейшей работы с ракетками
var racquetAreaH; //создаём переменную racquetAreaH для дальнейшей работы с ракетками
var ball = document.createElement("div"); //создаём div для мяча
var ballH; //создаём переменную ballH для дальнейшей работы с мячом
var areaH; //создаём переменную areaH для дальнейшей работы с мячом
var settimeout; //создаём переменную settimeout для дальнейшей работы с таймером
var messageGoal = document.createElement("div"); //сoздаём div для текста который будет отображаться когда будет гол
var messageGoalText = "Гол!";

messageGoal.classList.add("messageGoal");
messageGoal = wrap.appendChild(messageGoal); // работа с сообщением

wrap.style.width = widthOfWrap;
wrap.style.height = heightOfWrap; // задаём размеры для wrap

requestAnimationFrame('tick'); // таймер

buttonStart.type = "button"; // работа с кнопкой. Задаём тип
buttonStart.value = "Старт!"; // текст, который будет отображаться на кнопке
buttonStart.classList.add("buttonStart"); // присваиваем готовый CSS
buttonStart = document.body.insertBefore(buttonStart, document.body.children[0]); // делаем кнопку дочерним элементом body
buttonStart.onclick = start; // на событие onclick вешаем цункцию start

scoreBoard.classList.add("scoreBoard"); // работаем с таблом. Присваиваем готовый CSS.
scoreBoardInnerHtml(); // вызываем функцию для вывода на табло счёта
scoreBoard = document.body.insertBefore(scoreBoard, document.body.children[0]); // делаем дочерним элементом body
// работа с ракетками
racquet1.classList.add("racquet1"); // присваиваем готовый CSS для первой ракетки
racquet2.classList.add("racquet2"); // присваиваем готовый CSS для второй ракетки
racquet1 = wrap.appendChild(racquet1); //первую(левую) ракетку делаем дочерним элементом wrap
racquet2 = wrap.appendChild(racquet2); //вторую(правую) ракетку делаем дочерним элементом wrap

racquetH = {
    racquet1PosX: wrap.getBoundingClientRect().left,
    racquet1PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquet1.getBoundingClientRect().height/2,
    racquet1Speed: 0,

    racquet2PosX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquet2.getBoundingClientRect().width,
    racquet2PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquet1.getBoundingClientRect().height/2,
    racquet2Speed: 0,
    width: 10,
    height: 120,

    update: function () {
        var racquet1Obj = racquet1;
        var racquet2Obj = racquet2;
        racquet1Obj.style.left = this.racquet1PosX + "px";
        racquet1Obj.style.top = this.racquet1PosY + "px";
        racquet2Obj.style.left = this.racquet2PosX + "px";
        racquet2Obj.style.top = this.racquet2PosY + "px";

    }

};

racquetAreaH = {
    width: 10,
    height: wrap.getBoundingClientRect().height
};

racquetAreaH.update();

// работа с мячом

