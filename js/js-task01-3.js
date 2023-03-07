'use strict';

// Вариант 3 - use Object.create

function Shape2(name2) {
    this.name2 = name2;
}

function Rectangle2(name2, hightRec2, widthRec2) {
    Shape2.call(this, name2);
    this.hightRec2 = hightRec2;
    this.widthRec2 = widthRec2;
}

Rectangle2.prototype = Object.create(Shape2.prototype);

Rectangle2.prototype.areaRec2 = function () {
    let area = 0;
    area = this.hightRec2 * this.widthRec2;
    return area;
};

Rectangle2.prototype.toString = function () {
    return 'Наименование фигуры: ' + this.name2 + ', высота x ширина: ' + this.hightRec2 + ' x ' + this.widthRec2 + ', площадь: ' + this.areaRec2();
};

function Square2(name2, hightSquare2) {
    this.hightSquare2 = hightSquare2;
    Rectangle2.call(this, name2, hightSquare2, hightSquare2);
}

Square2.prototype = Object.create(Rectangle2.prototype);

Square2.prototype.toString = function () {
    return 'Наименование фигуры: ' + this.name2 + ', высота: ' + this.hightSquare2 + ', площадь: ' + this.areaRec2();
};

const squ3 = new Square2('квадрат №3', 11);
console.log(squ3);
console.log(squ3.toString());

const rec3 = new Rectangle2('прямоугольник №3', 2, 8);
console.log(rec3.toString());

let div3 = document.createElement("div");
div3.className = "rezult";
let h33 = document.createElement("h3")
let val3 = document.createTextNode('Result, when use Object.create');
h33.append(val3);
const id3 = document.querySelector('#first');
id3.append(div3);
div3.append(h33);


let p31 = document.createElement("p");
p31.className = "text-rezult";
let value31 = document.createTextNode(squ3.toString());
p31.appendChild(value31);
div3.append(p31);


let p32 = document.createElement("p");
p32.className = "text-rezult";
let value32 = document.createTextNode(rec3.toString());
p32.appendChild(value32);
div3.append(p32);


function Ellipse2(name2, radius31, radius32) {
    Shape2.call(this, name2);
    this.radius31 = radius31;
    this.radius32 = radius32;
}

Ellipse2.prototype = Object.create(Shape2.prototype);

Ellipse2.prototype.areaEll2 = function () {
    let area = 0;
    area = Math.PI * this.radius31 * this.radius32;
    return area;
};

Ellipse2.prototype.toString = function () {
    return 'Наименование фигуры: ' + this.name2 + ', радиус 1 и 2: ' + this.radius31 + ' и ' + this.radius32 + ', площадь: ' + this.areaEll2().toFixed(2);
};

function Circle2(name2, radius4) {
    this.radius4 = radius4;
    Ellipse2.call(this, name2, radius4, radius4);
}

Circle2.prototype = Object.create(Ellipse2.prototype);

Circle2.prototype.toString = function () {
    return 'Наименование фигуры: ' + this.name2 + ', радиус: ' + this.radius4 + ', площадь: ' + this.areaEll2().toFixed(2);
};

const circ3 = new Circle2('окружность №3', 5);
console.log(circ3);
console.log(circ3.toString());

const ell3 = new Ellipse2('эллипс №3', 3, 6);
console.log(ell3.toString());


let p33 = document.createElement("p");
p33.className = "text-rezult";
let value33 = document.createTextNode(circ3.toString());
p33.appendChild(value33);
div3.append(p33);


let p34 = document.createElement("p");
p34.className = "text-rezult";
let value34 = document.createTextNode(ell3.toString());
p34.appendChild(value34);
div3.append(p34);
