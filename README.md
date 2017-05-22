# rest-api-crud
Routes API untuk mendapatkan data berupa json

## REST API
List of basic routes:

Route | HTTP | Description
------------ | ------------- | -------------
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users (admin only)
/api/users/:id | GET | Get single users (admin and authenticated user)
/api/users | POST | Create a user (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT | Update a user with new info (admin and authenticated user)

## USAGE
With only npm:
```ruby
>npm install
>npm start
>npm run dev
```

## Dependencies
bcrypt
body-parser
cookie-parser
debug
dotenv
express
jade
morgan
nodemon
pg
sequelize
sequelize-cli
serve-favicon
