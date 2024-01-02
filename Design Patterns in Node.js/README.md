# Design Patterns in Node.js
## Intro
- This is a simple implementation to popular design patterns in Node.js
- You can find an amazing article which I used to type this code.
  - See the [**`article`**](https://medium.com/@techsuneel99/design-patterns-in-node-js-31211904903e).

## Singleton Pattern
- The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
- The key point to this pattern is to make the constructor **private**, to prevent the direct instantiation and make a static method to handle this process.
<hr>

## Factory Pattern
- The Factory pattern offers a way to create objects without specifying the exact class of object that will be created.
> **Note:**
> If we separate each type of car on separated class, this called the **Abstract Factory Pattern**. 
> 
>  In Abstract Factory Pattern a single factory class is responsible for creating objects of a certain type of cars. You would have a family of related factory classes, each responsible for creating a different type of product.