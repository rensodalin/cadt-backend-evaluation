1. What are the advantages of using middleware in an Express application? 
Middleware functions in Express allow developers to handle cross-cutting concerns such as 
logging, authentication, validation, error handling, and more. Advantages include: 
• Separation of concerns – keeps the route logic clean. 
• Reusability – middleware can be reused across multiple routes. 
• Scalability – makes the app easier to extend and maintain. 
• Pipeline control – you can control how requests flow through your application. 
2. How does separating middleware into dedicated files improve the maintainability of your 
code? 
Organizing middleware into separate files improves maintainability by: 
• Promoting modularity and clean code practices. 
• Allowing easier debugging and testing of individual components. 
• Helping teams collaborate better as responsibilities are separated. 
• Enabling code reuse in other parts of the app or even in different projects. 
3. If you had to scale this API to support user roles (e.g., admin vs student), how would you 
modify the middleware structure? 
I would: 
• Add a role-based authentication middleware to check user roles. 
• Store user roles in the request (e.g., req.user.role) after authentication. 
• Create route guards to allow or deny access based on roles. 
• Structure middlewares as: authenticate -> authorize(role) -> route handler. 
Query Handling & Filtering 
4. How would you handle cases where multiple query parameters conflict or are ambiguous 
(e.g., minCredits=4 and maxCredits=3)? 
I would: 
• Use validation middleware to detect and reject conflicting parameters early. 
• Return a 400 Bad Request with a clear error message. 
• Optionally, allow custom rules or fallbacks for specific cases if needed. 
5. What would be a good strategy to make the course filtering more user-friendly (e.g., 
handling typos in query parameters like “falll” or “dr. smtih”)? 
To improve usability: 
• Implement fuzzy string matching for parameters like semester or instructor (e.g., using 
Fuse.js). 
• Add fallback defaults or suggest corrections. 
• Use autocomplete or dropdowns in the frontend to limit typos. 
• Log incorrect inputs for analytics and improvement. 
Security & Validation 
6. What are the limitations of using a query parameter for authentication (e.g., 
?token=xyz123)? What alternatives would be more secure? 
Limitations: 
• Exposed in URLs (e.g., in browser history or server logs). 
• Easy to share or steal. 
• Lacks session management. 
Better alternatives: 
• Use HTTP headers for tokens (e.g., Authorization: Bearer <token>). 
• Implement OAuth, JWT (JSON Web Tokens), or session-based authentication with 
cookies. 
• Use HTTPS to encrypt communication. 
7. Why is it important to validate and sanitize query inputs before using them in your 
backend logic? 
• Prevent security risks like injection attacks (e.g., NoSQL or SQL injection). 
• Avoid unexpected behavior or application crashes. 
• Ensure data integrity by accepting only clean and expected data formats. 
Abstraction & Reusability 
8. Can any of the middleware you wrote be reused in other projects? If so, how would you 
package and document it? 
Yes, for example: 
• loggerMiddleware and authMiddleware are highly reusable. 
To reuse: 
• Wrap them in a separate npm package or a shared utilities folder. 
• Write JSDoc comments for documentation. 
• Export functions clearly and provide examples in a README.md. 
9. How could you design your route and middleware system to support future filters (e.g., 
course format, time slot)? 
• Use a dynamic filter system that reads query params and applies filters based on a map. 
• Create a filtering utility function to handle logic. 
• Keep middleware flexible and chainable for future enhancements. 
Bonus – Real-World Thinking 
10. How would this API behave under high traffic? What improvements would you need to 
make for production readiness (e.g., rate limiting, caching)? 
Under high traffic: 
• It may slow down or crash due to too many simultaneous requests. 
To improve: 
• Implement rate limiting (e.g., with express-rate-limit). 
• Add caching for frequent queries (e.g., with Redis). 
• Use a reverse proxy like NGINX. 
• Deploy to scalable platforms (e.g., containerize with Docker, host on Kubernetes, or use 
serverless). 
• Add monitoring and logging tools for performance tracking.