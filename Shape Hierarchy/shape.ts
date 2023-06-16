type Position = { x: number; y: number };

class Shape {
  color: string;
  position: Position;
  opacity: number;

  constructor(color: string, position: Position, opacity: number) {
    this.color = color;
    this.position = position;
    this.opacity = opacity;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(
    color: string,
    position: Position,
    opacity: number,
    radius: number
  ) {
    super(color, position, opacity);
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
  perimeter(): number {
    return Math.PI * this.radius * 2;
  }
}
class Square extends Shape {
  width: number;
  height: number;
  constructor(
    color: string,
    position: Position,
    opacity: number,
    width: number,
    height: number
  ) {
    super(color, position, opacity);
    this.width = width;
    this.height = height;
  }
   area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return (this.width + this.height) * 2;
  }
}
// class Rectangle extends Shape {}
// class Triangle extends Shape {}

const c = new Circle("red", { x: 1, y: 2 }, 100, 5);
const square = new Square("red", { x: 1, y: 2 }, 100,10, 5);
console.log(c.area());
console.log(square.area());
console.log(square.perimeter());
