# Global Execution Context (GEC) in JavaScript

The **Global Execution Context** is created when a JavaScript program starts and contains two main parts:

## 1. Memory Creation Phase
- All **functions and variables** are initially stored.
- Variables are assigned the value `undefined`.
- Function declarations are stored with their entire code.

## 2. Code Execution Phase
- All the **runtime operations** and logic execution occur here.
- Variables are assigned actual values.
- Functions are invoked, and control is passed to their respective contexts.

---

## Call Stack

- The **call stack** temporarily stores execution contexts (GEC and function ECs).
- When a function is called, a **new Execution Context** is created and **pushed** into the call stack.
- After the function completes, its context is **popped** out and removed from the call stack.

---

## Summary of Function Behavior in JavaScript

1. At first, a **Global Execution Context** is created, which consists of memory and code phases.
2. In the **memory phase**, variables are initialized to `undefined`, while **functions are hoisted with their full definition**.
3. On encountering a **function call**, a **new local execution context** is created and pushed onto the call stack.
4. After the function finishes executing, the **execution context is removed** from the call stack.
5. Once the entire program finishes, even the **Global Execution Context** is popped out of the stack.
