// vars
var days = document.getElementById('numD'),
    hours = document.getElementById('numH'),
    minuts = document.getElementById('numM'),
    seconds = document.getElementById('numS');

let sec = Number(seconds.getAttribute('time')),
    min = Number(minuts.getAttribute('time')),
    hor = Number(hours.getAttribute('time')),
    dy = Number(days.getAttribute('time'));



// fns
function scnd() {
    seconds.innerHTML = sec--;
    minuts.innerHTML = min;
    hours.innerHTML = hor;
    days.innerHTML = dy;

    /*time manage*/
    if (sec < 1) {
        sec = 60;
        min--;
    }

    if (min < 1) {
        min = 60;
        hor--;
    }
    if (hor < 1) {
        hor = 24;
        dy--;
    }
    setTimeout(scnd, 1000)
}
scnd();


//vars
var num1 = document.querySelector('#numInc1'),
    num2 = document.querySelector('#numInc2'),
    num3 = document.querySelector('#numInc3'),
    num4 = document.querySelector('#numInc4'),
    section = document.querySelector('#stats');

var attrN1 = Number(num1.getAttribute('numInc')),
    attrN2 = Number(num2.getAttribute('numInc')),
    attrN3 = Number(num3.getAttribute('numInc')),
    attrN4 = Number(num4.getAttribute('numInc'));

var i = 0;

//fn

function inc(attr, prop) {
    if (i <= attr) {
        prop.innerHTML = i++;
    };

    setTimeout(() => {
        inc(attr, prop)
    }, 30);
};
window.onload = () => {
    inc(attrN1, num1);
    inc(attrN2, num2);
    inc(attrN3, num3);
    inc(attrN4, num4);
}