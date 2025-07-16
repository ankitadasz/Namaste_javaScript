# JavaScript Array Methods

1. **`map` Method**  
   Used when we want to **transform** the entire array and return a new array.

2. **`filter` Method**  
   Used when we want to **filter elements** from the array based on a condition to obtain the required values.

3. **`reduce` Method**  
   Used when we want to **reduce the array to a single value** (e.g., `max`, `min`, `avg`, `sum`, `difference`, etc.).

4. **How `reduce` Works**  
   - It takes two arguments:
     - A **callback function** (which includes `accumulator` and `current value` as arguments).
     - An **initial value** for the accumulator.

---

### **Homework**
```javascript
const output = users.reduce(function(acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output);
