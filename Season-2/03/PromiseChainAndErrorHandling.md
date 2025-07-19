# Key Points About Promises in JavaScript

1. A promise can be created using the `new Promise()` constructor function.
2. This constructor function takes a callback function as an argument.
3. The callback function has 2 arguments named `resolve` and `reject`.  
   - `resolve` and `reject` are keywords provided by JavaScript to control the state of the promise.
4. We can only **resolve** or **reject** a promise. Nothing else can be done.
5. An error can also be created using `new Error('error message')`.
6. The `.catch()` method is used to attach a failure callback function that handles any error that pops up during the execution of the promise chain.
7. `.catch()` only handles errors of `.then()` that are **above it** in the chain.  
   - If there is any `.then()` below it, `.catch()` will not handle errors for that, and that `.then()` will still get executed no matter what.
8. This can be useful if we want to catch errors for a **particular portion** of a chain.
9. We can have multiple `.catch()` statements based on requirement and then a **general `.catch()`** at the end.
10. Always remember to **return a value** in the promise chain for the next `.then()` to use.
11. If a `.then()` returns a value:
    - That value will be used as an argument in the next function.
    - If it returns a **promise**, then the next `.then()` in the chain is attached to the promise returned by the current callback function.
