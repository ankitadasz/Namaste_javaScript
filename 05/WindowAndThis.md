### Global Space and the Window Object in JavaScript

- Anything that is **not inside any function** is called the **global space**.
- A **`window` object** is created by the JavaScript engine of the respective browser when the **global execution context** is created.
- Whenever an execution context is created, a special variable called **`this`** is also created.
- At the **global level**, `this` refers to the **global object** (which is the `window` object in browsers).
- Any **variables or functions** declared in the **global space** get attached to the **global object** (`window` in browsers).

#### Accessing Variables/Functions Defined in Global Space

You can access them in any of the following ways:

```javascript
console.log(window.a);
console.log(a);
console.log(this.a); // At global space, 'this' points to the window object
