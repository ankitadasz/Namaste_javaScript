1. **Scope of a variable** is directly dependent on the **lexical environment**.

2. Whenever an **execution context** is created, a **lexical environment** is also created.  
   A lexical environment consists of:
   - The **local memory** (variables/functions inside that context).
   - A reference to the **lexical environment of its parent**.  
   The term *lexical* means *in hierarchy or in sequence*.

3. Having the reference of the **parent's lexical environment** means the child or local function can **access all the variables and functions** defined in the memory space of its lexical parent.

4. The **JavaScript engine** first searches for a variable in the **current local memory space**.  
   - If not found, it searches in the **lexical environment of its parent**.
   - If still not found, it continues the search in the **next level up**, and so on.  
   This continues until the variable is found or the lexical environment becomes `null`.

5. This mechanism of searching variables in the **subsequent lexical environments** is known as the **Scope Chain**.  
   If a variable is **not found anywhere**, then we say the variable is **not present in the scope chain**.
