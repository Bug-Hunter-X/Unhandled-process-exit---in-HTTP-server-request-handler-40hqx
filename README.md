# Unhandled process.exit() in Node.js HTTP Server

This repository demonstrates a scenario where calling `process.exit()` directly within an HTTP server's request handler causes the server to crash without emitting an 'error' event.  This can make debugging difficult.

## The Problem

The `bug.js` file shows a simple HTTP server. If a request is made, `process.exit(1)` is called, immediately terminating the process.  Standard error handling mechanisms within the server are bypassed.

## The Solution

The `bugSolution.js` demonstrates a solution using a custom `onError` listener to catch process termination, ensuring clean shutdown and error logging. This improves the robustness of the application and aids in debugging unexpected exits.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory: `cd Unhandled_process.exit`
3. Run the buggy version: `node bug.js`
4. Make a request to `http://localhost:3000`. Observe that the server crashes without a clear error message in the console.
5. Run the fixed version: `node bugSolution.js`
6. Make a request to `http://localhost:3000`. This time, a more informative error will be logged.