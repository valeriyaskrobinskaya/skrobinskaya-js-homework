(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        alert(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            alert(i + ': ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            alert('Верный ответ!');
        } else {
            alert('Ответ неверный. Попробуй снова :)');
        }
    };

    var question1 = new Question('Сколько планет в солнечной системе?',
        ['8', '9', '7'],
        0);

    var question2 = new Question('Лидером какой страны являлся революционер Фидель Кастро?',
        ['Мексики', 'Аргентины', 'Кубы', 'Португалии'],
        2);

    var question3 = new Question('Какое животное изображено на гербе Гриффиндора?',
        ['Орёл', 'Барсук', 'Лев', 'Змея'],
        2);

    var questions = [question1, question2, question3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Введите верный ответ.'));

    questions[n].checkAnswer(answer);
})();