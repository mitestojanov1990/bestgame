# Best game in the world

# Backend explained
```
The backend is build with a framework called NestJS. 
- Link: https://docs.nestjs.com/
It is using and fully supports TypeScript.

I have built a server using Express, which you can find on this git branch: /express-server

The reason I changed it is simple because it is a lot easier and faster to write and run NestJS. I like the architecture because it is inspired and very closely related to how Angular works (Dependency Injection). I believe anyone can understand and find its way through NestJS module architecture.
```

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/mitestojanov1990/bestgame.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
or
yarn
```
- Install client dependencies
```
cd <project_name>/src/public/react/demo-react
npm install
or
yarn
```
- Configure your mongoDB server
- Start your mongoDB server, you check how to make it a windows service here: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
```
- Build and run the project
```
- build server
```
- .ENV setup
Please copy or rename .env.example to .env and set you mongodb connection string there
```
npm run build
or
yarn build

- Please copy or rename .env.example to .env and set your mongodb connection string there
```
- Start server with
```
npm run start
or
yarn start
```
- Debug server with
```
npm run serve-debug
or
yarn serve-debug
```
- Start both server and client with one command
```
npm run dev
or
yarn dev

# Data Migration
- I was not able to use package migrate with NestJS, so just for this exercise I made two REST end points who will bulk insert or delete data from the database
- You can find the end points in the Swagger UI link:
- to insert data, there is POST end point
- to delete data, there is DELETE end point

# Documentation
```
- The project lacks documentation
```
# Testing
```
- The project lacks tests

