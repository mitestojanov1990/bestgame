# Best game in the world

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/mitestojanov1990/marvelgame.git <project_name>
```
- Set .env. Please copy or rename .env.example to .env and set your mongodb connection string

# Build the server

npm run build
or
yarn build

# Run the server

npm run start
or
yarn start

you can fetch avengers from: http://localhost:5000/avengers

# Data Migration 
- You can run 
migrate up 
# to bulk insert some data in the database
migrate down
# to delete all data from the database
