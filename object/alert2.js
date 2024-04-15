/** let userName = {
    name: 'John',
    money: 1000,


    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

alert(user);
alert(+user);
alert(user + 500); 

let user = {
    name: 'John',
    mone: 1000,

    toString() {
        return `{name "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    }

};

alert(user);
alert(+user);
alert(user + 500); 

let user = {
    name: "John",
    age: 30
};

if ('age' in user) {
    alert('есть age');
}
else {
    alert(undefined);
} 

let city1 = {
    name: 'ГородN',
    popular: 100000000,
};

city1.getName = function() {
    alert(name)
};

city1.exportStr = function() {
    alert(name, popular)
};

city1.getObj = function() {
    return city1.getName
};

let city2 = {
    name: 'ГородM',
    popular: 1000000,
};

city2.getName = function() {
    alert(name)
};

city2.exportStr = function() {
    alert(name, popular)
};

alert(city1.getObj); 

function Calculator() {

    this.load = function() {
        this.a = +prompt('Введите число', 0);
        this.action = prompt('Введите действие');
        this.b = +prompt('Введите число', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.min = function() {
        return this.a - this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };

    this.del = function() {
        return this.a / this.b;
    };
}

let calulator = new Calulator();
calulator.load();

if (calulator.load.action == '+') {
    alert(calulator.sum());
} else if (calulator.load.action == '-') {
    alert(calulator.min())
} else if (calulator.load.action == '*') {
    alert(calulator.mul())
} else if (calulator.load.action == '/') {
    alert(calulator.del())
} else {
    alert('Такого действия нет');
} */


