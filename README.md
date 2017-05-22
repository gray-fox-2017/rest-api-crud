# rest-api-crud

## Demo app with basic REST api

List of basic routes :

| Route          | HTTP   | Description                                         |
|----------------|--------|-----------------------------------------------------|
| /api/users     | GET    | Get all the users (role : admin)                    |
| /api/users/:id | GET    | Get a single user (role : admin and user)           |
| /api/users     | POST   | Create a user (role : admin)                        |
| /api/users/:id | DELETE | Delete a user (role : admin)                        |
| /api/users/:id | PUT    | Update a user with new info (role : admin and user) |
| /api/users/:id | PATCH  | Update a user with specific new info                |
| /api/signup    | POST   | Create a user                                       |
| /api/signin    | POST   | Sign                                                |


## Usage
With only npm :

```
npm install
npm start
```