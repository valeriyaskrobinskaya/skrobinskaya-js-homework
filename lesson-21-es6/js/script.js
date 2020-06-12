var AjaxHandlerScript = "http://fe.it-academy.by/TestAjax2.php";
$.ajax('articles/volshebstvo.html',
    {type: 'GET', dataType: 'html', success: function() {
            console.log('success');
        }, error: function() {
            console.log('error');
        }}
);

var articles = [
    {title: 'волшебство', url: 'volshebstvo'},
    {title: 'Басов Николай Геннадиевич', url: 'basov'},
    {title: 'Вернадский Владимир Иванович', url: 'vernadsky'},
    {title: 'Галилей Галилео', url: 'galilee'},
    {title: 'Дарвин Чарльз', url: 'darvin'},
    {title: 'Ковалевская Софья Васильевна', url: 'kovalevskaya'},
    {title: 'Коперник Николай', url: 'kopernik'},
    {title: 'Леонардо да Винчи', url: 'leonardo'},
    {title: 'Ломоносов Михаил Васильевич', url: 'lomonosov'},
    {title: 'Менделеев Дмитрий Иванович', url: 'mendeleev'},
    {title: 'Ньютон Иссак', url: 'newton'},
    {title: 'Павлов Иван Петрович', url: 'pavlov'},
    {title: 'Планк Макс', url: 'plank'},
    {title: 'Столетов Александр Григорьевич', url: 'stoletov'},
    {title: 'Тесла Никола', url: 'tesla'},
    {title: 'Фарадей Майкл', url: 'faradei'},
    {title: 'Фрейд Зигмунд', url: 'freud'},
    {title: 'Циолковский Константин Эдуардович', url: 'tsiolkovsky'},
    {title: 'Эйлер Леонард', url: 'euler'},
    {title: 'Эйнштейн Альберт', url: 'einstein'}
];
var letters = [];


for (var i = 0; i < articles.length; i++) {
    var content = document.getElementById('scientists');
    var firstLetter = articles[i].title.substr(0, 1);
    var link = articles[i].url;

    if (!letters.includes(firstLetter)) {
        letters.push(firstLetter);
        var scientist = document.createElement('div');
        scientist.setAttribute('class', 'scientist');
        var header = document.createElement('h3');
        header.innerHTML = firstLetter;
        scientist.appendChild(header);
        content.appendChild(scientist);
    }
    var paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'name');
    var a = document.createElement('a');
    a.setAttribute('href', '#articles/' + link + '.html');
    a.innerHTML =  articles[i].title;
    paragraph.appendChild(a);
    scientist.appendChild(paragraph);
}

function createFrameArticles() {
    var scientist = document.getElementById('scientist');
    var aside = document.createElement('aside');
    aside.setAttribute('class', 'articles');
    var ul = document.createElement('ul');

    for (var i = 0; i < articles.length; i++) {
        var link = articles[i].url;
        var title = articles[i].title;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', '#articles/' + link + '.html');
        a.innerHTML = title;
        li.appendChild(a);
        ul.appendChild(li);
    }
    aside.appendChild(ul);
    scientist.appendChild(aside);
}

//SPA
window.onhashchange = switchToStateFromUrlHash;

function switchToStateFromUrlHash() {
    var article = null;
    var page = window.location.hash.substr(1);
    if (page == '') {
        page = 'main-information';
    }
    if (page.includes('articles')) {
        article = page.split('/')[1];
        page = 'articles';
    }

    switch (page) {
        case 'main-information':
            document.getElementById('main-information').style.display ='block';
            document.getElementById('scientists').style.display = 'none';
            document.getElementById('scientist').style.display = 'none';
            break;
        case 'table-of-contents':
            document.getElementById('main-information').style.display = 'none';
            document.getElementById('scientists').style.display = 'block';
            document.getElementById('scientist').style.display = 'none';
            break;
        case 'articles':
            document.getElementById('main-information').style.display ='none';
            document.getElementById('scientists').style.display = 'none';
            document.getElementById('scientist').style.display = 'block';

            var scientist = document.getElementById('scientist');
            var frame = document.createElement('iframe');
            frame.setAttribute('class', 'about-scientist');
            frame.setAttribute('src', './articles/' + article);
            scientist.innerHTML = '';
            scientist.appendChild(frame);
            createFrameArticles();
            break;
        default:
            document.getElementById('main-information').style.display ='block';
            document.getElementById('scientists').style.display = 'none';
            document.getElementById('scientist').style.display = 'none';
            break;
    }
}

switchToStateFromUrlHash();
