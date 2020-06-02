var drinkStorage = new tLocalStorage("lsDrink"),
    drinkName = document.getElementById("drinkName"),
    drinkInfo = document.getElementById("drinkInfo"),
    drinkInfoDel = document.getElementById("drinkInfoDel"),
    drinkList = document.getElementById("drinkList"),
    drinkInfoP = document.getElementById("drinkInfoP");

var dishStorage = new tLocalStorage("lsDish"),
    dishName = document.getElementById("dishName"),
    dishInfo = document.getElementById("dishInfo"),
    dishInfoDel = document.getElementById("dishInfoDel"),
    dishList = document.getElementById("dishList"),
    dishInfoP = document.getElementById("dishInfoP");

var store = document.getElementById("store");

drinkName.onclick = function() {
    var keyP = prompt("напишите название напитка"),
        valueC = {};

    valueC.alcohol = confirm(keyP + " - алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");
    valueC.recipe = prompt("напишите рецепт напитка - " + keyP);
    drinkStorage.addValue(keyP, valueC);
    drinkStorage.store();
};

drinkInfo.onclick = function() {
    var drinkInf = prompt("Напишите название напитка"),
        drinkInfoP = document.getElementById("drinkInfoP"),
        answer = drinkStorage.getValue(drinkInf);

    if (drinkStorage.getValue(drinkInf) !== undefined) {
        drinkInfoP.style.height = "auto";
        drinkInfoP.innerHTML = "Название напитка: " + drinkInf +
            "<br>" + "алкогольный: " + (answer.alcohol === true ? "да" : "нет") +
            "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "к сожалению РЕЦЕПТА НЕТ");
    } else {
        drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
    }
};

drinkInfoDel.onclick = function() {
    var drinkInfoDel = prompt("Напишите название напитка"),
        drinkInfoP = document.getElementById("drinkInfoP");

    if (drinkStorage.deleteValue(drinkInfoDel) === true) {
        drinkInfoP.innerHTML = "информация о напитке УДАЛЕНО!";
        drinkStorage.store();
    } else {
        drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
    }
};

drinkList.onclick = function() {
    var drinkInfoP = document.getElementById("drinkInfoP");
    drinkInfoP.innerHTML = drinkStorage.getKeys();
};

dishName.onclick = function() {
    var keyP = prompt("напишите название блюда"),
        valueC = {};

    valueC.country = prompt("напишите с какой страны это блюдо - " + keyP);
    valueC.recipe = prompt("напишите рецепт блюда - " + keyP);
    dishStorage.addValue(keyP, valueC);
    dishStorage.store();
};

dishInfo.onclick = function() {
    var dishInf = prompt("Напишите название блюда"),
        dishInfoP = document.getElementById("dishInfoP"),
        answer = dishStorage.getValue(dishInf);

    if (dishStorage.getValue(dishInf) !== undefined) {
        dishInfoP.style.height = "auto";
        dishInfoP.innerHTML = "Название блюда: " + dishInf +
            "<br>" + "Страна: " + (answer.country) +
            "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "к сожалению РЕЦЕПТА НЕТ");
    } else {
        dishInfoP.innerHTML = "В хранилище такое блюдо ОТСУТСТВУЕТ!";
    }
};

dishInfoDel.onclick = function() {
    var dishInfoDel = prompt("Напишите название блюдА"),
        dishInfoP = document.getElementById("dishInfoP");

    if (dishStorage.deleteValue(dishInfoDel) === true) {
        dishInfoP.innerHTML = "информация о блюде УДАЛЕНО!";
        dishStorage.store();
    } else {
        dishInfoP.innerHTML = "В хранилище такое блюдо ОТСУТСТВУЕТ!";
    }
};

dishList.onclick = function() {
    var dishInfoP = document.getElementById("dishInfoP");
    dishInfoP.innerHTML = dishStorage.getKeys();
};

