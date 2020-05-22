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
var ball = document.createElement("div"); //создаём div для мячика
var ballH; //создаём переменную ballH для дальнейшей работы с мячиком
var areaH; //создаём переменную areaH для дальнейшей работы с мячиком
var settimeout; //создаём переменную settimeout для дальнейшей работы с таймером
var messageGoal = document.createElement("div"); //сoздаём div для текста которая будет отображаться когда будет гол
var messageGoalText = "Гол!";