1. **`setTimeout` Behavior**  
   `setTimeout` stores the function in a different place (Web APIs) and attaches a timer to it. When the timer finishes, the function is placed in the **callback queue**, and once the call stack is empty, it's pushed back to the call stack and executed.

2. **Issue with `var` and Closures**  
   Without using a **closure**, the `var` reference gives the **latest value** because it does not retain the original value. Instead, it holds a reference to the variable, so any update to the value after the timeout will be reflected when the function executes.

3. **Solution with `let`/`const`**  
   If we use `let` or `const`, which have **block scope**, a new copy of the variable is created each time within the loop block. This behavior ensures correct values are captured, and thus this problem can be resolved **without closures**.
