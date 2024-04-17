/*let a = +prompt('Введите число', 0);
let b = +prompt('Введите число', 0);
let c = a + b;
alert(Math.trunc(c));
alert(Math.round(6.56 * 10)/10);

function random(min, max) {
    return min + Math.random() * (max-min);
}

alert( random(1, 3) );*/

function readNumber() {
    let num = prompt('Введите число');
    if (isFinite(num) == true) {
        return +num; 
    } 
    else if (isFinite(num) == false) {
        return readNumber();
    }
    else if (num === null || num === '') {
        return null;
    }  
}

alert(`Число: ${readNumber()}`);