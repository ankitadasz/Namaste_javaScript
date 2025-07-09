1. **`undefined` is a special keyword and placeholder** which is kept inside a variable until some value is defined for it.  
   It stays in the variable if no value is assigned.

2. **`undefined` ≠ `not defined`**  
   - `undefined` means the variable is declared but no value is assigned.  
   - `not defined` means the variable is not even declared.

3. **JavaScript is a loosely typed (or weakly typed) language**  
   - You can use the same variable to store values of different types like string, integer, and boolean.

**Example:**
```javascript
var a;
console.log(a);    // undefined

a = 10;
console.log(a);    // 10

a = "hello JS";
console.log(a);    // "hello JS"
