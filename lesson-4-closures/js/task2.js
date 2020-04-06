var obj = {
    className: 'open menu'
};

function removeClass(obj , cls) {
    var arr = obj.className ? obj.className.split(' '): [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i --;
        }
    }
    obj.className = arr.join(' ');
}
removeClass(obj, 'open');

console.log (obj.className);