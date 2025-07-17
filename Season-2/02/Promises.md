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

