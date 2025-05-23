Q1 – What challenges did you face when using the native http module that Express.js 
helped you solve? 
• Manual URL routing 
• Complex request body parsing 
• No built-in middleware support 
• Difficulty serving static files 
• Lack of structure and scalability 
Q2 – How does Express simplify route handling compared to the native HTTP server? 
• Uses simple methods like app.get() or app.post() instead of if-else blocks 
• Automatically parses routes and query strings 
• Allows cleaner and modular route definitions 
Q3 – What does middleware mean in Express, and how would you replicate similar 
behavior using the native module? 
• Middleware in Express is a function that processes requests before reaching the final 
route handler (e.g., for logging, parsing, authentication). 
• To replicate in the native module, you manually call functions in sequence, checking 
conditions and passing the request/response objects between them. 