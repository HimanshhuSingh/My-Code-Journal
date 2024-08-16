/*Middleware functions in Express.js are functions that have access to the request object (req),
the response object (res), and the next middleware function in the application’s request-response cycle.
They are used to execute code, make changes to the req and res objects, end the request-response cycle,
and call the next middleware in the stack.

Key Concepts:
Execution in the Request-Response Cycle:

Middleware functions can execute at different points in the request-response cycle, 
allowing you to perform tasks such as logging, authentication, modifying request data, and more.
next() Function:

The next() function is a callback that, when invoked, passes control to the next middleware function. 
If next() is not called, the request will be left hanging.*/