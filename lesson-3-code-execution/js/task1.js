var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function performMore (obj) {
    var result = 0;
    var resultName ='';
    for (key in obj) {
        if (result < obj[key]) {
            result = obj[key];
            resultName = key;
        }
    }
    return resultName;
};

console.log(performMore(tasksCompleted));