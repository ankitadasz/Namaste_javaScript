### 🧱 Block and Scope in JavaScript

- A **Block** is also known as a **Compound Statement**.
- It is used to **combine multiple statements together** and is enclosed within `{}`.

---

### 🧠 Scope and Hoisting

- `let` and `const` are **hoisted** but within **block scope**.
- `var` is **hoisted in the global scope** (or function scope if inside a function).

---

### 🔒 Block Scope vs Global Scope

- Variables declared with `let` and `const` are **stored in block memory space** → called **block-scoped**.
- Variables declared with `var` are **stored in the global object memory space** → called **global-scoped**.

---

### 🧩 Variable Shadowing

> **Variable shadowing** occurs when a variable declared in an inner scope has the **same name** as a variable in an outer scope, effectively **hiding** the outer variable.

#### Example 1:
```javascript
let x = 10; // Outer scope variable
function example() {
  let x = 20; // Inner scope variable, shadows outer 'x'
  console.log(x); // Prints 20
}
example(); // function call
console.log(x); // Prints 10
```

---

### 🪄 Hoisting with `var` Example:

```javascript
console.log(a); // Hoisting (undefined)
var a = 9;
console.log(a); // 9
{
  var a = 10; // Overwrites outer 'a' in the same GEC
  console.log(a); // 10
}
console.log(a); // 10
```

#### Output:
```
undefined
9
10
10
```

- Variables declared with `var` are **function-scoped or globally scoped**, not block-scoped like `let` or `const`.
- So, the `var a` inside the `{}` block **overwrites** the outer `var a` as both refer to the **same variable in the Global Execution Context (GEC)**.

---

### 🔁 Function Scope Overriding

- A `var` variable declared inside a **function scope** can **overwrite** the value of a global `var` variable if they share the same name.

---

### ➡️ Arrow Function Scope

- The **scope for arrow functions** is **the same** as for normal functions.
- They **do not bind their own `this`**, but their **lexical scope behaves similarly**.

---
