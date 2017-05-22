# rest-api-crud

### express
### Jalankan Program
### npm start

| Route        | Http           | Descriptin  |
| ------------- |:-------------:| -----:|
| /api/users      | GET   | Get all users |
| /api/users/:id     | GET      |   Get a single users |
| /api/users | POST      |    Create users |
| /api/users | DELETE      |    Delete users |
| /api/users | PUST      |    Update a users with a new info |


## REST API WITH AUTH
| Route        | Http           | Descriptin  |
| ------------- |:-------------:| -----:|
| /api/signup      | POST   | Signup with new user |
| /api/signin      | POST   | Sign in while get an acces token based on credentials |
| /api/users      | GET   | Get all users (admin only)|
| /api/users/:id     | GET      |   Get a single users (admin and authenticated user)|
| /api/users | POST      |    Create users (admin only) |
| /api/users | DELETE      |    Delete users (Admin only)|
| /api/users | PUST      |    Update a users with a new info (admin and authenticated user) |
