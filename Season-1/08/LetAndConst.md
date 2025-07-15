1. **`let` and `const` are hoisted**, but their memory is allocated in a different place than `window`, which **cannot be accessed before initialization**.

2. The **Temporal Dead Zone (TDZ)** exists **until the variable is declared and assigned a value**.

3. Accessing variables declared with `let` or `const` using `window.variable` or `this.variable` **will not return their value**.

4. You **cannot redeclare** the same variable with `let` or `const` (even if you try to use `var` the second time).

5. With `const`, **declaration and initialization must happen on the same line**.

6. There are **three types of errors** in JavaScript:
   - `ReferenceError`: Occurs when a variable **does not have memory allocation**.
   - `TypeError`: Occurs when you **try to change a type** that is not supposed to be changed.
   - `SyntaxError`: Occurs when **proper syntax is not used**.

7. Always **use `const` wherever possible**, followed by `let`. Use `var` as little as possible (only if absolutely needed).  
   👉 This helps **avoid errors** and improves code clarity.

8. **Initializing variables at the top** of their scope is a good idea — it helps **shrink the Temporal Dead Zone to zero**.
