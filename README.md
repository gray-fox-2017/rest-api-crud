# USER API CRUD
Demo app with basic REST API and authentication using jsonwebtoken.

## REST API
List of public routes:

Route | HTTP | Description
------|------|------------
/api/signup | POST | Create new user (with default role of 'customer')
/api/signin | POST | Generate token for registered user


List of user routes:

Route | HTTP | Description
------|------|------------
/api/users/:id | GET | Get his/her respectful user info
/api/users/:id | PUT | Update his/her respectful user info

List of admin routes:

Route | HTTP | Description
------|------|------------
/api/users | GET | Get all the users
/api/users/:id | GET | Get a single user
/api/users | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info

## HEROKU APP LINK
http://morning-sands-45224.herokuapp.com/

Fully functional REST API CRUD with authentication and authorization, can be used using Postman app.