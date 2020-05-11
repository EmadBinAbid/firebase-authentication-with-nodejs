# Firebase Authentication with Node.js

This project is a boilerplate for creating Node.js applications with Firebase and Express. Currently, it sets up the development environment by exposing user registration and login functionalities by seamlessly integrating with Firebase authentication services. It also exposes a bunch of dummy routes to help you identify the way to go in order to build large and complex applications. 

# Directory Structure

- `./bin` : This folder sets the express server up and running with default entry point as `./app.js`.
- `./config` : This folder contains all the configuration files. Since, this project is a boilerplate, it only contains `firebase-config.js`. You can further add other configuration files as per your use cases.
- `./docs` : This folder has all the misc docs that are necessary to run the application. Currently, this folder has `service-key.json` file that has the configuration information to connect to Firebase cloud console.
- `./routes` : We create API routes in this directory.
- `./src` : The actual program logic goes here.
- `./app.js` : The app entry point.
- `package.json` and `package-lock.json` : Node.js app package management and configuration files.

# Running the App

Use `npm install` to acquire all the packages in your local directory. In the project's root directory, run either `npm start` or `nodemon start`. Running this command will start the server at http://localhost:3000/.

# Auth Routes

- `/register` (POST call) : To register a new user
The request body expects `email` and `password` fields.

- `/login` (POST call) : To login existing user
The request body expects `email` and `password` fields.

# Sample Routes

You can find the dummy routes in `./routes/hello.js`. All routes are token-protected so you will need to provide the `authtoken` in the header.

- `/hello-world` (GET call)
- `/hello-user` (POST call)

Feel free to contribute to this boilerplate to make this more robust and efficient. For queries, please contact at `emad.bin.abid@gmail.com`.