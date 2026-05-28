- JavaScript is single-threaded by default.
- JavaScript executes one line of code at a time.
- JavaScript is synchronous by default.
- In synchronous code, each operation waits for the previous one to finish.

 Blocking vs Non-Blocking Code

Blocking Code:
- Blocks the execution flow.
- Next line waits until current task completes.

Non-Blocking Code:
- Does not stop execution.
- Other code can run while task is processing.

Important Components:

-> Call Stack : 
  - Stores function calls.
  - Executes functions one by one (LIFO).
-> Memory Heap:
  - Stores variables and objects.
-> Web APIs:
  - Browser features provided outside JS engine:
  - DOM API
  - setTimeout()
  - setInterval()
  - fetch()
-> Event Loop:
 Checks:
- Is call stack empty?
- If yes, pushes callbacks from queue to stack.
-> Callback Queue / Task Queue:
  - Stores completed async callbacks.
Example:
setTimeout(() => {
   console.log("Hello")
}, 1000)

-> Promises:
  - Used to handle async operations.
  - States:
      Pending, Resolved, Rejected

-> Async / Await:
  - Cleaner way to write async code.
  - await pauses inside async function only.
