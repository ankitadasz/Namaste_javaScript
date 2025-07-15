### Closures in JavaScript

1. A **function bundled with its lexical scope** is called a **closure**.
2. Even if a function is returned from another function, it **remembers its original lexical environment and local variables**, allowing it to access those values later.
3. When we write `return function x() { ... }`, it **automatically returns the function reference**, not the result of executing it.
4. Since the returned value is a **reference to the function**, any **changes to variables within that closure** will persist and be reflected in subsequent accesses.

> 🔍 A closure allows a function to retain access to its **lexical scope** even after the outer function has finished executing.
