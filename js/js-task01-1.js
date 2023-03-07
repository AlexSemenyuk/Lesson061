'use strict';

// Вариант 1 - use class keyword (since ES6)
class Shape {
    name

    constructor(name) {
        this.name = name;
    }

    toString = function () {
        console.log('Наименование фигуры: ' + this.name);
    }
}

class Rectangle extends Shape {
    hightRec
    widthRec

    constructor(name, hightRec, widthRec) {
        super(name);
        this.hightRec = hightRec;
        this.widthRec = widthRec;
    }

    toString = function () {
        return 'Наименование фигуры: ' + this.name + ', высота x ширина: ' + this.hightRec + ' x ' + this.widthRec + ', площадь: ' + this.areaRectangle();
    }
    areaRectangle = function () {
        let area = 0;
        area = this.hightRec * this.widthRec;
        return area;
    }

}

class Square extends Rectangle {
    hightSquare;

    constructor(name, hightSquare) {
        super(name, hightSquare, hightSquare);
        this.hightSquare = hightSquare;
    }

    toString = function () {
        return 'Наименование фигуры: ' + this.name + ', высота: ' + this.hightSquare + ', площадь: ' + this.areaRectangle();
    }
}


const square1 = new Square('квадрат №1', 5);
console.log(square1);
let rezultSquare1 = 0;
rezultSquare1 = square1.toString();
console.log(square1.toString());
console.log(rezultSquare1);

let div1 = document.createElement("div");
div1.className = "rezult";
let h31 = document.createElement("h3")
let val1 = document.createTextNode('Result, when use class keyword (since ES6)');
h31.append(val1);
// const id1 = first;
const id1 = document.querySelector('#first');
id1.append(div1);

let p1 = document.createElement("p");
p1.className = "text-rezult";
let value1 = document.createTextNode(square1.toString());
p1.appendChild(value1);
div1.append(h31);
div1.append(p1);


const rectangle1 = new Rectangle('прямоугольник №1', 10, 10);
console.log(rectangle1);
console.log(rectangle1.toString());

let p2 = document.createElement("p");
p2.className = "text-rezult";
let value2 = document.createTextNode(rectangle1.toString());
p2.appendChild(value2);
div1.append(p2);


class Ellipse extends Shape {
    radius1
    radius2

    constructor(name, radius1, radius2) {
        super(name);
        this.radius1 = radius1;
        this.radius2 = radius2;
    }

    toString = function () {
        return 'Наименование фигуры: ' + this.name + ', радиус 1 и 2: ' + this.radius1 + ' и ' + this.radius2 + ', площадь: ' + this.areaEllipse().toFixed(2);
    }
    areaEllipse = function () {
        let area = 0;
        area = Math.PI * this.radius1 * this.radius2;
        return area;
    }

}

class Circle extends Ellipse {
    radius;

    constructor(name, radius) {
        super(name, radius, radius);
        this.radius = radius;
    }

    toString = function () {
        return 'Наименование фигуры: ' + this.name + ', радиус: ' + this.radius + ', площадь: ' + this.areaEllipse().toFixed(2);
    }
}


const circle1 = new Circle('окружность №1', 8);
console.log(circle1);
console.log(circle1.toString());

let p3 = document.createElement("p");
p3.className = "text-rezult";
let value3 = document.createTextNode(circle1.toString());
p3.appendChild(value3);
div1.append(p3);


const ellipse1 = new Ellipse('эллипс №1', 6, 5);
console.log(ellipse1);
console.log(ellipse1.toString());

let p4 = document.createElement("p");
p4.className = "text-rezult";
let value4 = document.createTextNode(ellipse1.toString());
p4.appendChild(value4);
div1.append(p4);



