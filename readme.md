# REST CRUD API by svi

This is a simple crud api made using nodejs, express, sequelize, and postgres. The api is also accessible through [heroku](http://rest-api-crud.herokuapp.com/). 

### Tools:
- Node.js
- Sequelize
- PostgreSQL
- Express framework

### List of user routes: 
|Route           |HTTP   |Description                 |
|----------------|-------|----------------------------|
|`/api/users`    | GET   | Get all users              |
|`/api/users/:id`| GET   | Get a user                 |
|`/api/users/`   | POST  | Create a user              |
|`/api/users/:id`| DELETE| Delete a user              |
|`/api/users/:id`| PUT   | Update user's info         |
|`/signup`       | POST  | User sign up               |
|`/signin`       | POST  | User sign in to get a token|

### Usage
With only npm:
```
npm install
npm start
npm run dev
```
**Access the website via [heroku](http://rest-api-crud.herokuapp.com/).**
