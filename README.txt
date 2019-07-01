Project Overview
This project is an expense management system which allows a user to manage expense transactions.
The application includes functionality to list all the expenses that have been entered into the system so far.

Task
A partial implementation of creating and editing expense is provided to you. However, 
clicking edit/create button on the expense list page, creating/editing modal doesn't appear.

Deliverable
- You are required to fix the code so that expense creating/editing modal works.
- Click submit button in the Edit modal, Edit action doesn’t run.
- There is no any effect in the expense lists (updated expense). 
- You have to fix the code to ensure the edit is saved and is reflected in the expense list shown.To test your code, 
 open the Firefox browser from the bottom bar of the workspace and go to the url http://localhost:3000/login.
  You can click on the button <create an account> and register a new user in the expense management system. 
  Then use the new account to log in.

Technical Overview
The user data is stored in a mongodb collection. 
Each user document in the collection has the following fields - updatedAt, createdAt, username, email and password.

The expenses are stored in a mongodb collection. 
Each expense document in the collection has the
 following fields -  updatedAt, createdAt, title, amount, status, description, and username.

Relevant Project Files -
client/src/components/Expenses.js

Technology Stack
Frontend: React, Redux, React-dom, Redux-saga
Backend: Node.JS, Express framework
Database: MongoDB
Unit testing tool: Mocha

The project is in MVC architecture
the controllers are in the path: server/controllers
the models are in the path: server/models
since we are using react, so react will be the view
Modifications made:
- there was a wrong assert in the file test/test.js, fixed
- the edit & add modals were not loading, fixed (client/src/components/Expenses.js.working)
- at the server side the user listing is sorted by date modified so that the latest ones come in the beginig of the listing
  server/controllers/expense.controller.js
- if you want to load the working one please rename client/src/components/Expenses.js.working to client/src/components/Expenses.js
- if you want to load the not working one please rename client/src/components/Expenses.js.not-working to client/src/components/Expenses.js