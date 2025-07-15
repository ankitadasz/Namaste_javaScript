1. **Browser Superpowers & Web APIs:**  
   The browser provides *superpowers* to the JavaScript engine through Web APIs, such as:
   - `console`
   - `location`
   - `DOM API`
   - `setTimeout`
   - `fetch`
   - `localStorage`

2. **Callback Functions & Event Handlers:**  
   These are first stored in the Web API environment and then moved to the **callback queue** after their respective triggers.

3. **Promises & MutationObserver:**  
   These are also handled by the Web API environment but are transferred to the **microtask queue** instead of the callback queue.

4. **Event Loop:**  
   The event loop keeps checking the call stack. When the stack is empty, it moves tasks from the queues to the call stack for execution.

5. **Microtask Priority:**  
   Tasks in the **microtask queue** (like resolved promises) are given **priority** over tasks in the callback queue.

6. **Microtask Starvation:**  
   If too many microtasks are continuously generated, it can lead to **starvation**—callback tasks don't get a chance to execute.
