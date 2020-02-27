## Goal
To serve as an example for how a frontend application might primarily rely on a JSON API server for data,
but that it's static resources are not actually delivered by that server.

E.G. The HTML/CSS/JS would be static files on one server (like a CDN), but the API server would be elsewhere and authenticate the client through JWT.

## Installation
```
git clone
yarn
cd ./front
yarn start      // opens front-end app
cd ../server
yarn dev        // starts API server
```

## Notes

### Login
The login is static (u: foo, p: bar)
This is done through a post request to `:3000/api/login`. This endpoint does not require any JWT to use.
On success, this endpoint will return a JWT. The app will store this in `localStorage`.

On successive requests, the JWT is retrieved from `localStorage` and appended in the `Authorization` request header. The server will verify this JWT on protected routes (in this case, requests to `:3000/api/users`).
