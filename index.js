require("dotenv").config();
// import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
// import routes from "./src/routes/routes";
// import regeneratorRuntime from 'regenerator-runtime'
// import "regenerator-runtime/runtime.js";

// import dbh from "./src/config/database.js";

const PORT = 4000;
const KEEP_ALIVE_INTERVAL = 5000;

// console.log('DBUSER: ' + process.env.DBUSER)
// console.log('DBNAME: ' + process.env.DBNAME)
// console.log('DBHOST: ' + process.env.DBHOST)

const app = express();
app.use(cors());

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// routes(app)

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(
    `Server running on port ${PORT}, keep-alive every ${KEEP_ALIVE_INTERVAL} ms`
  )
);

// Server Keep-alive
// https://stackoverflow.com/questions/20210522/nodejs-mysql-error-connection-lost-the-server-closed-the-connection
// setInterval(() => {
//   dbh.query('SELECT 1')
// }, KEEP_ALIVE_INTERVAL)
