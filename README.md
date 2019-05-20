# Best game in the world

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
npm start build
or
yarn build
```
- Start server with
```
npm start
or
yarn start
```
- Debug server with
```
npm start serve-debug
or
yarn serve-debug
```
- Start both server and client with one command
```
npm start dev
or
yarn dev
```
# Documentation
```
- The project lacks documentation
```
# Testing
```
- The project lacks tests
```

# Backend explained
```
The backend is build with a framework called NestJS. Link: https://docs.nestjs.com/
It is using and fully supports TypeScript.

I have built a server using Express, which you can find on this git branch: 

The reason I changed it is simple because it is a lot easier and faster to write and run NestJS. I like the architecture because it is inspired and very closely related to how Angular works (Dependency Injection). I believe anyone can understand and find its way through NestJS module architecture.
```
