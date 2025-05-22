1. Why is separating concerns (routes, controllers, models, middleware) important in backend 
development? 
➢ Separating concerns helps organize the code by responsibility: 
• Routes handle incoming requests and define paths. 
• Controllers manage logic and response behavior. 
• Models store data or interact with databases. 
• Middleware adds reusable functions (e.g., logging, auth). 
This makes the code cleaner, easier to debug, and simpler to maintain. 
2. What challenges did you face when refactoring the monolithic server.js into multiple files? 
➢ Challenges that face when refactoring the monolithic server 
• Managing import/export errors (e.g., using wrong syntax in ES modules). 
• Keeping track of relative paths between folders. 
• Making sure all files are correctly connected (e.g., router uses the right controller). 
• Needing to restart the server often to check if changes worked. 
But once refactored, the structure became more organized and scalable. 
3. How does moving business logic into controllers improve the readability and testability of 
your code? 
➢ It is : 
• separates logic from routing, so files are shorter and clearer. 
• Easier to read and understand what each part does. 
• Controllers can be tested independently without relying on the whole server. 
• Simplifies future updates since logic is all in one place. 
4. If this project were to grow to support authentication, database integration, and logging, how 
would this folder structure help manage that growth? 
• You can add new folders like middleware/auth/, db/, or utils/ without touching other 
parts. 
• Each component stays modular and isolated, reducing bugs. 
• It supports clean scalability, as new features like JWT auth or MongoDB just plug into 
their respective layers. 
• Helps team members work on different parts without conflicts. 