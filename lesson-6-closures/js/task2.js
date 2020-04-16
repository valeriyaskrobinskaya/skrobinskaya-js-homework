function interviwQuestion(firstname) {

    return function(job) {

        if (job === 'designer') {
            console.log(firstname + ' ' + 'can you please explain what UX design is?');
        }

        if (job === 'teacher') {
            console.log('What subject do you teach' + ', ' + firstname + '?');
        }
        else{
            console.log('Hello' + ' ' + firstname + ', ' + 'what do you do?');
        }
    }

}

console.log(interviwQuestion('john')('teacher'));