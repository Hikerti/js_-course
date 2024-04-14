/**  let obj = {}

function A(){
  return obj;
}
function B(){
  return obj;
}

alert(new A() == new B()); 

function Calculator() {

  this.read = function() {
    this.a = +prompt('Введите первое число', 0);
    this.b = +prompt('Введите второе число', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

function Accumulator(startingValue) {
  this.value = startingValue;
  this.history = this.value;
  this.read = function() {
    this.type = +prompt('Введете новое число', 0);
    this.value += this.type;
    this.history = '+' + this.type;
  };

}

let accumulator = new Accumulator(140); 

accumulator.read(); 

alert(accumulator.history);
alert(accumulator.value); 

let key = 'original_name';

let userName = {
  original_name: "Roman"
};

let myName = null;

alert( userName?.[key] );
alert( myName?.[key] ); */
