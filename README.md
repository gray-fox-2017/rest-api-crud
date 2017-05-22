**REST API Basic by Zulfikar**


|Route | HTTP | Desc
|---|---|---|
|/api/users| GET | Get all the users (admin only)
|/api/users/:id | GET | Get single user (user and admin)
|/api/users | POST | Create user (admin only)
|/api/users/:id | DELETE | Delete a user (admin only)
|/api/users/:id| PUT | Update user (user and admin)
|/api/signup | POST | Create user with default role user|
|/api/signin | POST | Return token|

**How to use**

1) npm install
2) npm start (this app use nodemon)

Heroku
https://rest-api-basic-by-zulfikar.herokuapp.com
