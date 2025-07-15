1. **`setTimeout` and the Callback Queue:**  
   The `setTimeout` function places its callback in the **callback queue**, which is executed **only after the call stack is empty**—even if the delay is set to `0ms`.

2. **Minimum Delay Guarantee:**  
   `setTimeout` guarantees that the callback will take **at least** the specified time to execute. However, actual execution may be **delayed further** if the call stack is still busy.
