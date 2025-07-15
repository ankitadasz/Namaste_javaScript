# 💻 JavaScript Function Concepts (Namaste JavaScript)

---

## 1. What is a Function Statement?

A Function Statement is a normal named function.  
✅ It is hoisted — you can call it before its definition.

```javascript
function xyz() {
    console.log("Function Statement");
}
```

---

## 2. What is a Function Expression?

A Function Expression is when a function is assigned to a variable.  
❌ It is NOT hoisted.

```javascript
var a = function() {
    console.log("Function Expression");
};
```

---

## 3. What is an Anonymous Function?

An Anonymous Function is a function without a name.  
⚠️ It must be used where functions are treated as values.

```javascript
// ❌ Invalid alone
function() {
    console.log("Anonymous Function");
}

// ✅ Valid as expression
var anon = function() {
    console.log("Anonymous Function Expression");
};
```

---

## 4. What is a Named Function Expression?

A Named Function Expression is a function with a name, assigned to a variable.  
🧠 The function name is accessible only inside its own scope.

```javascript
var a = function xyz() {
    console.log("Named Function Expression");
};

a();    // ✅ Works
xyz();  // ❌ ReferenceError: xyz is not defined
```

---

## 5. Difference Between Parameters and Arguments

🟢 **Parameters**: Variables in the function definition  
🔵 **Arguments**: Values passed during function call

```javascript
// Parameters
function ab(param1, param2) {
    console.log(param1, param2);
}

// Arguments
ab(4, 5);
```

---

## 6. What is a First-Class Function / First-Class Citizen?

In JS, functions are first-class citizens — they can be:
- Assigned to variables
- Passed as arguments
- Returned from other functions

```javascript
var b = function(param) {
    return function xyz() {
        console.log("First Class Function");
    };
};

var returnedFunc = b();
returnedFunc(); // logs "First Class Function"
```

---

## 7. Why are Functions Called First-Class Citizens in JavaScript?

Because they:
- Can be stored in variables
- Can be passed as arguments
- Can be returned from other functions

```javascript
function greet(fn) {
    fn();
}

greet(function() {
    console.log("Hello from a passed function!");
});
```

---
