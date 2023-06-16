class Queue<T> {
  private elements: T[] = [];
  enqueue(element: T): void {
    this.elements.push(element);
  }
  dequeue(): T | undefined {
    return this.elements.shift();
  }
  peek(): T | undefined {
    const firstEle = this.elements[0];
    return firstEle;
  }
  isEmpty(): boolean {
    if (this.elements.length == 0) return true;
    return false;
  }
}


const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // Output: 1
console.log(queue.peek());     // Output: 2
console.log(queue.isEmpty());  // Output: false
console.log(queue.dequeue());  // Output: 2
console.log(queue.dequeue());  // Output: 3
console.log(queue.isEmpty());  // Output: true