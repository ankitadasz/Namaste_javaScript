# Hoisting in JavaScript

Hoisting is a phenomenon in JavaScript in which you can access functions and variables even before initializing them.

## Key Points:

1. **Memory Allocation Before Execution**  
   Even before the code starts executing, memory is allocated to variables and functions.

2. **Function vs Arrow Function Behavior**
   - When you create a **regular function**, it behaves like a normal function and is **hoisted completely**.
   - When you declare an **arrow function**, it behaves like a **variable** and is **initialized as `undefined`** during the memory creation phase.

3. **Variable Initialization**
   - In JavaScript, **before the code is executed**, the variables get initialized to `undefined`.

4. **Arrow Functions are Not Hoisted Like Regular Functions**
   - Arrow functions are treated as variables and are **not hoisted** like normal functions.

5. **Hoisting Mechanism**
   - Hoisting is the mechanism in JS where **variable declarations are moved to the top** of their scope before execution.
   - Therefore, it is possible to **call a regular function before it's defined**, but not an arrow function.

6. **Execution Context**
   - Whenever a JavaScript program runs, a **global execution context** is created. This has two phases:
     1. **Memory Creation Phase**
     2. **Code Execution Phase**

7. **What Happens During Memory Creation?**
   - **Variable declarations** are scanned and initialized as `undefined`.
   - **Function declarations** are scanned and made fully available (hoisted).
