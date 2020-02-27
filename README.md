## Goal
To serve as an example for how a frontend application might primarily rely on a JSON API server for data,
but that it's static resources are not actually delivered by that server.

E.G. The HTML/CSS/JS would be static files on one server (like a CDN), but the API server would be elsewhere and authenticate the client through JWT.