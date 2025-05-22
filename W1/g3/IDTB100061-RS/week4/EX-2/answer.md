1. How do sub-resource routes improve the organization and clarity of your API? 
Sub-resource routes like /journalists/:id/articles show the relationship between resources clearly. 
They make the API more readable, intuitive, and aligned with REST principles by organizing 
related data in a structured way. 
2. What are the pros and cons of using in-memory dummy data instead of a real database during 
development? 
Pros: 
• Easy and fast to set up 
• Great for testing and prototyping 
• No database configuration needed 
Cons: 
• Data is lost on server restart 
• Not suitable for production 
• Can’t handle large or complex data 
• No real persistence or querying 
3. How would you modify the current structure to add authentication for journalists to manage 
only their own articles? 
• Add an auth middleware folder with token verification 
• Update the journalist model to store login credentials (e.g., hashed password) 
• Add authController.js for login/logout 
• Use middleware to check if a journalist owns the article before editing/deleting 
• Apply this middleware to protected article routes 
4. What challenges did you face when linking related resources (e.g., matching journalistId in 
articles), and how did you resolve them? 
Challenges: 
• Making sure the journalistId exists before creating an article 
• Handling deletion of journalists who still have articles 
Solutions: 
• Validate the existence of the journalist during article creation 
• Use helper functions for relationship checks 
• Implement in-memory cascading delete 
• Add error handling for invalid links 
5. How would RESTful design help frontend developers interact with your API? 
• Consistent and predictable routes (e.g., /articles, /articles/:id) 
• Clear HTTP methods show the action (GET, POST, PUT, DELETE) 
• Standard status codes help understand success or errors 
• Nested routes reflect real data structure 
• Makes integration easier and faster with less confusion