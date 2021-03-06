/*
class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    setWidth(width) {
        this.width = width
    }

    setHeight(height) {
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Rectangle extends Shape {
}

class Square extends Shape {
    setWidth(width) {
        this.width = width
        this.height = width
    }

    setHeight(height) {
        this.width = height
        this.height = height
    }
}

function increaseShapeWidth(rectangle) {
    rectangle.setWidth(rectangle.width +1)
}

const rectangle1 = new Rectangle(10, 2)
const square = new Square(5, 5)

increaseShapeWidth(rectangle1)
increaseShapeWidth(square)

console.log(rectangle1.area())
console.log(square.area())
*/

class FlyingBird {
    fly() {
        console.log('I can fly')
    }
}

class SwimingBird {
    swim() {
        console.log('I can swim')
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log('I can quack')
    }
}

class Pengiun extends SwimingBird {

}

function makeBirdFly(bird) {
    bird.fly()
}

function makeBirdSwim(bird) {
    bird.swim()
}

const duck = new Duck()
const pengiun = new Pengiun()

makeBirdFly(duck)
makeBirdSwim(pengiun)