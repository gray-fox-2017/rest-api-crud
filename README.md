## RESTAPI-CRUD


Rest - API - CRUD (resapi krud) is a simple API for user management, every user can edit whichever user as long as they have account, everyone also can sign up to become an Admin. with admin you can view every user and delete them.

In other words, this is the simpliest user management API.

## New Features!

  - Sign Up and Sign In!
  - Available to be tested with postman!


### Installation

RESTAPI CRUD requires [Node.js](https://nodejs.org/) v4+ to run locally.

Install the modules and start the localhost.

```sh
$ npm init
$ npm install --save express
$ npm install nodemon
$ npm install jsonwebtoken
$ npm install bcrypt
```

### Important link

Rest API CRUD currently operated with hard route only and can only be managed by postman. here is the list of important link to operate this API.

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/api/signup` | POST | Sign up with new user info |
| `/api/signin` |POST| Sign in while get an access token based on credentials |
| `/api/users` |GET|Get all the users info (admin only)|
| `/api/users/:id` |GET|Get a single user info (admin and authenticated user)|
| `/api/users` |POST|Create a user (admin only)|
| `/api/users/:id` |DELETE|Delete a user (admin only)|
| `/api/users/:id` |PUT|Update a user with new info (admin and authenticated user)|


### Development

Want to contribute? Great!

Rest API CRUD uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

**Free Software, Hell Yeah!**
