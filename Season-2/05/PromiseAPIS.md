### Promise Methods in JavaScript

---

#### **`Promise.all`**
- Will wait for **all promises** to finish.
- It will collect the result and give you an **array of outputs**.
- **As soon as any of the promises get rejected**, `Promise.all` will throw an **error**.
  - Immediately as an error happens, it will return the error.
  - It will **not even wait** for other promises to get successful or rejected.
- `Promise.all` will get rejected when **any** of the promises get rejected.
- It's kind of **"all or nothing"** (it happens when any of the promise cases fail).

---

#### **`Promise.allSettled`**
- If one of the APIs fails to handle, we have another case which is `Promise.allSettled(p1, p2, p3)`.
- If **all of them get successful**, it will give the result same as `Promise.all`.
- But if **one promise gets rejected**, it will **wait for all promises to get settled** after the maximum time taken.
- The result will be like:
  ```js
  [val1, val2, err3]
  ```
  - If it's a success you will get result.
  - If it's a failure you will get error in the place of result.
- It is also known as **fail safe**, unlike `Promise.all` which is **fail fast**.

---

#### **`Promise.race`**
- Suppose we are applying it to `[p1, p2, p3]` where:
  - `p1` takes 3 sec,
  - `p2` takes 1 sec,
  - `p3` takes 2 sec.
- After 1 sec, it will give you the **first settled promise value**, which is `p2`.
- It will not give an array, it will give a **single value**.
- **What if the promise which has to settle first gets rejected first?**
  - It will return the error.
  - So it will always return the **first settled promise value** (resolved or rejected).
- When you say a promise is **settled**, that means you have got the result which is either **success or failure (resolved or rejected)**.

---

#### **`Promise.any`**
- `Promise.any([p1, p2, p3])` will **wait for the first success**.
- Suppose:
  - `p1 = 3 sec`,
  - `p2 = 1 sec`,
  - `p3 = 2 sec`.
- Suppose here `p2` is rejected:
  - It will wait for the **next success promise** and ignore the rejected value.
- Suppose `p3` also gets rejected:
  - Then it will wait for the next success, which is `p1`, so it will give the value of `p1`.
- **But what if everything fails?**
  - The result will be an **AggregateError**, which is an array of:
    ```js
    [err1, err2, err3]
    ```
  - After 3 sec you will get the array of aggregate errors.
- An **AggregateError** in JavaScript is a special type of error object that groups together multiple errors into a single error.

---
