function parseCount(n) {
    let parseN = Number.parseFloat(n);
    if (Number.isNaN(parseN)) {
        throw new Error('Невалидное значение');
    } else {
        return parseN;
    }
}

function validateCount(n) {

    try {
        if (parseCount(n) != NaN) {
            return parseCount(n);
        }
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor (a, b, c) {

        if (a + b < c || a + c < b || c + b < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else if (a != undefined && b != undefined && c != undefined) {
            this.a = a;
            this.b = b;
            this.c = c;
        }

    }

    get perimeter() {
        if (this.hasOwnProperty('a')) {
            return this.a + this.b + this.c;
        } else {
            return 'Ошибка! Треугольник не существует';
        }
    }

    get area() {
        if (this.hasOwnProperty('a')) {
            let p = 0.5 * this.perimeter;
            let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
            return Number(s.toFixed(3));
        } else {
            return 'Ошибка! Треугольник не существует';
        }

        
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return new Triangle();
    }

}
