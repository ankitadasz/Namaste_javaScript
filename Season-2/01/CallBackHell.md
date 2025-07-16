# Callback Hell

**Callback:** A function passed as an argument to another function so it can be invoked later.

**Callback Hell:** When callbacks are nested inside other callbacks multiple levels deep, the code grows *horizontally* (deep indentation) instead of vertically. This structure becomes hard to read, debug, and maintain—often called the "Pyramid of Doom."

---

# Inversion of Control (with Callbacks)

When you pass a callback to another function, you hand over control of **when**, **how many times**, and **with what arguments** your function will be called. If that external code misbehaves (calls too early, too late, never, multiple times, or with wrong data), you lose reliability and predictability. This loss of control in program flow is known as **inversion of control**.
