### This demo is based on this LinkedIn Learning tutorial:

- https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express


## Quickstart

### Create your free MongoDB Cloud instance (server)

* https://www.mongodb.com/free-cloud-database

### Download and install MongoDB Compass (client)

* https://www.mongodb.com/products/compass

Then, install, run, and create a user/pass and connect to your instance

### MongoDB Auth

```
cp .env.samples .env  # edit this file with your db info
```

### Install and run locally

```
npm install
npm start
```

### Deploy to Vercel

```
now --prod
```

Alternatively...

```
npx vercel login
npx vercel --prod
```

* https://dev.to/preciouschicken/stacking-vercel-a-graphql-apollo-server-and-react-2l55


## Live Demo

*  https://express-mongo-api-demo.vercel.app/
*  https://express-mongo-api-demo.vercel.app/contact
