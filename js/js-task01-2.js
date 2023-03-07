'use strict';

// Вариант 2 - use Object.setPrototypeOf
function Shape1(name1) {
    this.name1 = name1;
}

function Rectangle1(name1, hightRec1, widthRec1) {
    Shape1.call(this, name1);
    this.hightRec1 = hightRec1;
    this.widthRec1 = widthRec1;

    this.areaRec1 = function () {
        let area = 0;
        area = this.hightRec1 * this.widthRec1;
        return area;
    }
    this.toString = function () {
        return 'Наименование фигуры: ' + this.name1 + ', высота x ширина: ' + this.hightRec1 + ' x ' + this.widthRec1 + ', площадь: ' + this.areaRec1();
    }
}

function Square1(name1, hightSquare1) {
    this.hightSquare1 = hightSquare1;
    Rectangle1.call(this, name1, hightSquare1, hightSquare1);
    this.toString = function () {
        return 'Наименование фигуры: ' + this.name1 + ', высота: ' + this.hightSquare1 + ', площадь: ' + this.areaRec1();
    }
}


Object.setPrototypeOf(Rectangle1.prototype, Shape1.prototype);
Object.setPrototypeOf(Square1.prototype, Rectangle1.prototype);
const square2 = new Square1('квадрат №2', 4);
console.log(square2.toString());

const rectangle2 = new Rectangle1('прямоугольник №2', 8, 9);
console.log(rectangle2.toString());


let div2 = document.createElement("div");
div2.className = "rezult";
let h32 = document.createElement("h3")
let val2 = document.createTextNode('Result, when use Object.setPrototypeOf');
h32.append(val2);
const id2 = document.querySelector('#first');
id2.append(div2);
div2.append(h32);


let p21 = document.createElement("p");
p21.className = "text-rezult";
let value21 = document.createTextNode(square2.toString());
p21.appendChild(value21);
div2.append(p21);

let p22 = document.createElement("p");
p22.className = "text-rezult";
let value22 = document.createTextNode(rectangle2.toString());
p22.appendChild(value22);
div2.append(p22);


function Ellipse1(name1, radius11, radius21) {
    Shape1.call(this, name1);
    this.radius11 = radius11;
    this.radius21 = radius21;

    this.areaEll1 = function () {
        let area = 0;
        area = Math.PI * this.radius11 * this.radius21;
        return area;
    }

    this.toString = function () {
        return 'Наименование фигуры: ' + this.name1 + ', радиус 1 и 2: ' + this.radius11 + ' и ' + this.radius21 + ', площадь: ' + this.areaEll1().toFixed(2);
    }
}

function Circle1(name1, radius3) {
    this.radius3 = radius3;
    Ellipse1.call(this, name1, radius3, radius3);

    this.toString = function () {
        return 'Наименование фигуры: ' + this.name1 + ', радиус: ' + this.radius3 + ', площадь: ' + this.areaEll1().toFixed(2);
    }
}

Object.setPrototypeOf(Ellipse1.prototype, Shape1.prototype);
Object.setPrototypeOf(Circle1.prototype, Ellipse1.prototype);

const circle2 = new Circle1('окружность №2', 7);
console.log(circle2.toString());

const ellipse2 = new Ellipse1('эллипс №2', 3, 9);
console.log(ellipse2.toString());

let p23 = document.createElement("p");
p23.className = "text-rezult";
let value23 = document.createTextNode(circle2.toString());
p23.appendChild(value23);
div2.append(p23);

let p24 = document.createElement("p");
p24.className = "text-rezult";
let value24 = document.createTextNode(ellipse2.toString());
p24.appendChild(value24);
div2.append(p24);

