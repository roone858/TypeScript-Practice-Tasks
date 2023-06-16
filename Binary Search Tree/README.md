Task: Implement a Binary Search Tree

1. Create a TypeScript file (e.g., binarySearchTree.ts) and define a BinarySearchTree class.

2. Inside the BinarySearchTree class, define a Node class to represent the nodes of the tree. Each node should have a `value` property and `left` and `right` child pointers. You can also include an optional `parent` pointer if desired.

3. Implement the following methods for the BinarySearchTree class:

   - `insert(value: T): void`: This method inserts a value into the BST while maintaining the binary search tree property.
   - `search(value: T): Node<T> | null`: This method searches for a value in the BST and returns the corresponding node if found, or null if not found.
   - `traverseInOrder(): T[]`: This method performs an in-order traversal of the BST and returns an array of values in sorted order.
   - `traversePreOrder(): T[]`: This method performs a pre-order traversal of the BST and returns an array of values.
   - `traversePostOrder(): T[]`: This method performs a post-order traversal of the BST and returns an array of values.

4. Use generics in TypeScript to ensure type safety. Define the `T` type parameter in the class declaration and use it to specify the type of values stored in the BST.

5. Implement each method based on the corresponding functionality:

   - In `insert`, you will need to compare the value being inserted with the current node's value and determine whether to insert it in the left or right subtree.
   - In `search`, you can start from the root and traverse the tree based on the comparison of values until you find the target value or reach a leaf node.
   - In the traversal methods (`traverseInOrder`, `traversePreOrder`, `traversePostOrder`), you can use recursion to traverse the tree and collect the values in the desired order.

6. Test your implementation by creating an instance of the BinarySearchTree class, inserting values, performing searches, and traversing the tree in different orders.

By completing this task, you will practice implementing a binary search tree, working with tree nodes, and performing different types of tree traversals. You can further extend the implementation by adding methods for deleting nodes or balancing the tree.