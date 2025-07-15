 1. **Callback Function**  
   A function that is passed as an argument to another function is called a **callback function**.

2. **setTimeout and Asynchronous Behavior**  
   `setTimeout` helps convert JavaScript — which is single-threaded and synchronous — into asynchronous behavior by deferring execution.

3. **Closures in Event Listeners**  
   Event listeners can also invoke **closures**, maintaining access to their lexical scope.

4. **Memory Management with Event Listeners**  
   Event listeners consume a lot of memory, which can potentially slow down the website.  
   ➤ Therefore, it is good practice to **remove unused event listeners** to improve performance.
