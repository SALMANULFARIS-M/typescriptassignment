const read = require('readline-sync');
class Area {
    circle(radius: number): number {
        return Math.PI * radius * radius;
    }

    square(side: number): number {
        return side * side;
    }

    rectangle(length: number, breadth: number): number {
        return length * breadth;
    }

    triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

// Subclass for the main program
class MyClass extends Area {
    constructor() {
        super(); // Call parent constructor
        this.main();
    }

    main(): void {
        const input = read.question(
            "Enter shape to calculate area (circle/square/rectangle/triangle)"
        );

        switch (input) {
            case "circle":
                const radius = Number(read.question("Enter the radius of the circle: "));
                const circleArea = this.circle(radius);
                console.log(`The area of the circle is ${circleArea}`);
                break;
            case "square":
                const side = Number(read.question("Enter the side length of the square: "));
                const squareArea = this.square(side);
                console.log(`The area of the square is ${squareArea}`);
                break;
            case "rectangle":
                const length = Number(read.question("Enter the length of the rectangle: "));
                const breadth = Number(read.question("Enter the breadth of the rectangle: "));
                const rectangleArea = this.rectangle(length, breadth);
                console.log(`The area of the rectangle is ${rectangleArea}`);
                break;
            case "triangle":
                const base = Number(read.question("Enter the base of the triangle: "));
                const height = Number(read.question("Enter the height of the triangle: "));
                const triangleArea = this.triangle(base, height);
                console.log(`The area of the triangle is ${triangleArea}`);
                break;
            default:
                console.log("Invalid input");
        }
    }
}

// Create an instance of the main program
const myClass = new MyClass();

