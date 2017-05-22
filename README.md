# rest-api-crud

This is a simple application to create, read, update, and delete users. The application doesn't have UI so just use Postman to enter the URL.

## List of Basic Routes:

| Routes | HTTP | Description |
| --------------- | ------------- | --------------------------- |
| /api/users | POST | Create new users |
| /api/users/ | GET | Get all users |
| /api/users/:id | GET | Get a user by id |
| /api/users/:id | PUT | Update user data by id |
| /api/articles/:id | DELETE | Delete a user by id |

# Usage:

First after cloning the repository, install the packages needed:

npm install

Then run the application:

npm start

Access the website via http://localhost:3000 by using Postman
