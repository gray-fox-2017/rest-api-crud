# rest-api-crud

this app for test restful api

## How to Use

- First install postman or etc
- running app.js with node
- test restful with localhost:3000/{Route}

### Routing REST API CRUD

|       ROUTE       | HTTP |                           DESCRIPTION                           |
| ----------------- | ------ | --------------------------------------------------------------- |
| /api/users/signup | POST   | Insert data / Register users                                    |
| /api/users/signin | POST   | Login users                                                     |
| /api/users        | GET    | Get all data from users (access : Admin)                        |
| /api/users        | POST   | Insert Data Users (access : Admin)                              |
| /api/users/:id    | GET    | Detail data from users (access : Admin and Authenticated users) |
| /api/users/:id    | DELETE | Delete data users (Access : Admin)                              |
| /api/users/:id    | PUT    | Update data users (Acess : Admin adn Authenticated)             |
