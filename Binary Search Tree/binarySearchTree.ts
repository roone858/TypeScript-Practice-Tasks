class NodeClass<T> {
  value: T;
  left: NodeClass<T> | null;
  right: NodeClass<T> | null;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: NodeClass<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new NodeClass(value);
    if (this.root == null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(root: NodeClass<T>, newNode: NodeClass<T>): void {
    if (root.value > newNode.value)
      if (root.left == null) root.left = newNode;
      else this.insertNode(root.left, newNode);
    if (root.value < newNode.value)
      if (root.right == null) root.right = newNode;
      else this.insertNode(root.right, newNode);
  }
  search(value: T): NodeClass<T> | null {
    return this.searchNode(this.root, value);
  }

  private searchNode(root: NodeClass<T> | null, value: T): NodeClass<T> | null {
    if (!root || root.value === value) {
      return root;
    }

    if (value < root.value) {
      return this.searchNode(root.left, value);
    }

    return this.searchNode(root.right, value);
  }
  traverseInOrder(): T[] {
    const result: T[] = [];
    this.inOrder(this.root, result);
    return result;
  }

  private inOrder(node: NodeClass<T> | null, result: T[]): void {
    if (!node) {
      return;
    }

    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
  }

  traversePreOrder(): T[] {
    const result: T[] = [];
    this.preOrder(this.root, result);
    return result;
  }

  private preOrder(node: NodeClass<T> | null, result: T[]): void {
    if (!node) {
      return;
    }

    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
  }

  traversePostOrder(): T[] {
    const result: T[] = [];
    this.postOrder(this.root, result);
    return result;
  }

  private postOrder(node: NodeClass<T> | null, result: T[]): void {
    if (!node) {
      return;
    }

    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.value);
  }
}

// Testing the BinarySearchTree class
const bst = new BinarySearchTree<number>();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
console.log(bst.traverseInOrder()); // Output: [1, 3, 6, 8, 10, 14]
console.log(bst.traversePreOrder()); // Output: [8, 3, 1, 6, 10, 14]
console.log(bst.traversePostOrder()); // Output: [1, 6, 3, 14, 10, 8]
console.log(bst.search(6)); // Output: Node { value: 6, left: Node { ... }, right: Node { ... } }
console.log;
