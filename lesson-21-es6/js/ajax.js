'use strict';

var AjaxHandlerScript = "http://fe.it-academy.by/TestAjax2.php";

function getData() {

    $.ajax(AjaxHandlerScript, {
        type: 'GET', dataType: 'json',
        data: {func: 'COURSES_JSON'},
        success: CoursesListReady, error: ErrorHandler
    });

    function CoursesListReady(data) {

        var CoursesA = data;

        var byName = CoursesA.slice(0);
        byName.sort(function (a, b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });

        var OptionsStr = '';
        var listLetter = '';

        for (var C = 0; C < byName.length; C++) {
            var CourseH = byName[C];

            if (listLetter !== CourseH.name.charAt(0).toLocaleUpperCase()) {

                listLetter = CourseH.name.charAt(0).toLocaleUpperCase();

                OptionsStr += '<p><strong>' + listLetter + '</p></strong>';
            }
            OptionsStr += '<a id=id' + CourseH.id + '>' + CourseH.name + '</a><br>';
        }
        document.getElementById('linkContainer').innerHTML = OptionsStr;

        for (var C = 0; C < byName.length; C++) {

            var CourseH = byName[C];

            var thirdPageLink = document.getElementById('id' + CourseH.id);

            thirdPageLink.addEventListener('click', function () {
                switchToThird();
                thirdPageID = CourseH.id;
            });
        }
    }
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + ' ' + ErrorStr);
}
