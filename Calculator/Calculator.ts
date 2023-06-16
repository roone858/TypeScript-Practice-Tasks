class Calculator {
  add(first: number, second: number): number {
    return second + first;
  }
  subtract(first: number, second: number): number {
    return first - second;
  }
  multiply(first: number, second: number): number {
    return second * first;
  }
  divide(first: number, second: number): number {
    return first / second;
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3
console.log(calculator.multiply(4, 5)); // Output: 20
console.log(calculator.divide(10, 2)); // Output: 5
