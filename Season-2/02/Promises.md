***promises in js are the object which represent the eventual success or failure of the async operation***
 # 1. What are Promises?

Promises are **objects** used to perform **asynchronous operations**. They act like placeholders to store a **future value** that will be returned after some time.  
They contain two main properties:
- **PromiseState**
- **PromiseResult**

---

# 2. Importance of Promises:

a) Promises help us write **trustworthy code**.  
b) Promises solve the problems of **callbacks** like:
   - **Inversion of Control**
   - **Callback Hell**  
c) They provide results in **three states**:
   1. **Pending**
   2. **Fulfilled**
   3. **Rejected**  
d) We can **attach functions** to a promise object and retrieve its value (unlike callbacks where functions must be passed explicitly).  
e) **Nesting** can be done in Promises, allowing us to return values in each individual chain.


# 1. Before Promises
We used to depend on **callback functions**, which resulted in:
1. **Callback Hell (Pyramid of Doom)**
2. **Inversion of Control**

---

# 2. How Promises Solve This
**Inversion of Control** is overcome by using **Promises**:

## 2.1 What is a Promise?
A **Promise** is an object that represents the **eventual completion or failure** of an asynchronous operation.

## 2.2 States of a Promise:
- **Pending**
- **Fulfilled**
- **Rejected**

## 2.3 Behavior:
- As soon as a promise is **fulfilled/rejected**, it updates the empty object (initially `undefined` in the pending state).

## 2.4 Characteristics:
- A promise **resolves only once** and is **immutable**.

## 2.5 Control with `.then()`:
- Using `.then()`, we can control **when to call the callback function**.

---

# 3. Avoiding Callback Hell
To avoid **callback hell (Pyramid of Doom)**, we use **Promise Chaining**.  
This way, our code expands **vertically instead of horizontally**.  
Chaining is done using **`.then()`**.

---

# 4. Common Mistake
A very common mistake developers make:
- **Not returning a value during chaining of promises.**  
Always remember to **return a value**. This returned value will be used by the **next `.then()`**.

