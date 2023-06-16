Task: Design a Shape Hierarchy

In this task, you will design a shape hierarchy using TypeScript. The shape hierarchy will consist of different types of shapes, each with its own properties and methods.

Here are more details on how to approach this task:

1. Define the base shape class:
   - Create a TypeScript file (e.g., shape.ts) to define the base shape class.
   - The base shape class should have common properties and methods that are shared by all shapes in the hierarchy.
   - Some common properties could include the color, position, and opacity of the shape.
   - Some common methods could include methods to calculate the area and perimeter of the shape.

2. Define specific shape classes:
   - Create TypeScript classes for specific shapes that inherit from the base shape class.
   - For example, you can create classes for Circle, Square, Rectangle, Triangle, etc.
   - Each shape class should have its own properties and methods that are specific to that shape.
   - For example, the Circle class might have a radius property and a method to calculate the area based on the radius.

3. Implement inheritance:
   - Use the `extends` keyword to define the inheritance relationship between the base shape class and the specific shape classes.
   - For example, `class Circle extends Shape`.

4. Implement properties and methods:
   - Define properties specific to each shape class.
   - For example, the Circle class would have a `radius` property, and the Rectangle class would have `width` and `height` properties.
   - Implement methods specific to each shape class.
   - For example, the Circle class would have a method to calculate the area based on the radius.

5. Test the shape hierarchy:
   - Create instances of the different shape classes and test their properties and methods.
   - For example, create a Circle object with a specific radius and call its `calculateArea` method to verify the calculated area.

By completing this task, you will gain experience in designing a shape hierarchy using TypeScript, implementing inheritance, and defining properties and methods specific to each shape. This task will help you understand object-oriented programming concepts and how they can be applied in TypeScript.