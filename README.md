# Next.js API Route 405 Method Not Allowed Error

This repository demonstrates a common error in Next.js API routes where a 405 Method Not Allowed error is thrown when an incorrect HTTP method is used.  The solution involves explicitly checking the request method before processing the request.

## Bug

The original `pages/api/hello.js` file lacks a check for the HTTP method.  This means that a GET request will result in a 405 error because the route expects a POST request. 

## Solution

The solution adds an explicit check for the request method.  If the method is not POST, the route will return a 405 status code with an appropriate message.