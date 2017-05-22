# rest-api-crud

## ABOUT

Melakukan fungsi CRUD sederhana mengunakan express, postgres, sequelize yang dapat di akses di <a href="rest-api-crud-p2w1d1.herokuapp.com/api/users/">
Heroku</a>

## REST List of routes:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


| Route | HTTP | Description |
| ----- |:-----:| --------|
| <span style="color:red">/api/users </span> | GET | Get all Users (admin only) |
| <span style="color:red">/api/users/:id</span> | GET | Get User By ID (admin & authenticated user) |
| <span style="color:red">/api/users/:id</span> | DELETE | Delete User By ID (admin only) |
| <span style="color:red">/api/users/:id</span> | PUT | Edit User By ID (admin & authenticated user) |
| /api/users/signup | POST | Sign up with new user info |
| /api/users/signin | POST | Sign in while get an access token based on credentials |

## USAGE

With only npm:
>npm install

>npm start

>npm run dev

Access the website via <a href="https://rest-api-crud-p2w1d1.herokuapp.com/api/users">HEROKU</a>