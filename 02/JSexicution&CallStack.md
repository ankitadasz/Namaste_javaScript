# JavaScript Execution Context & Call Stack

1. **Global Execution Context (GEC):**  
   Whenever any JavaScript code is executed, an *execution context* is created. Initially, this is the **Global Execution Context**.

2. **What is an Execution Context?**  
   An *Execution Context* is essentially a box that has two main components:
   - **Memory Component (Variable Environment):**  
     Stores variables and function declarations as key-value pairs.
   - **Code Component (Thread of Execution):**  
     Executes the code line-by-line.

3. **Phases of Execution Context Creation:**
   - **a. Memory Creation Phase:**  
     Memory is allocated for all variables and functions in the global scope.  
     - Variables are initialized with `undefined`.  
     - Functions are stored as their full definition.
   - **b. Code Execution Phase:**  
     Code is executed line-by-line using the memory created in the first phase.

4. **Function Invocation:**  
   Whenever a function is invoked, a **new execution context** is created, and the same two-phase process is followed.

5. **Function Parameters:**  
   If a function has parameters, memory is also allocated for them during the creation of that function’s execution context.

6. **Return Keyword:**  
   When the `return` statement is encountered:
   - The function's task is considered complete.
   - Control returns to the point from where the function was invoked.
   - The corresponding execution context is **deleted from the stack**.

7. **Call Stack:**  
   - The **Call Stack** maintains the order of execution contexts.
   - Initially, the Global Execution Context is pushed into the stack.
   - As functions are invoked, their execution contexts are **pushed** onto the stack.
   - When a function completes, its context is **popped** from the stack.
   - Finally, the Global Execution Context is also popped when execution ends.
