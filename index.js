require('dotenv').config()
import cors from 'cors'
import express from 'express'
import routes from './src/routes/routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
// import regeneratorRuntime from 'regenerator-runtime'
// import "regenerator-runtime/runtime.js";

// import dbh from "./src/config/database.js";

const app = express()
const PORT = 4000
const KEEP_ALIVE_INTERVAL = 5000

console.log('DBUSER: ' + process.env.DBUSER)
console.log('DBNAME: ' + process.env.DBNAME)
// console.log('DBHOST: ' + process.env.DBHOST)

// mongoose connection
mongoose.Promise = global.Promise

try {
  mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}/${process.env.DBNAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
} catch (err) {
  throw new Error(err)
}

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)
app.use(cors())

// serving static files
app.use(express.static('public'))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// routes(app)

app.get('/', (req, res) => res.send(`Node and express server running on port ${PORT}`))

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}, keep-alive every ${KEEP_ALIVE_INTERVAL} ms`)
)

// Server Keep-alive
// https://stackoverflow.com/questions/20210522/nodejs-mysql-error-connection-lost-the-server-closed-the-connection
// setInterval(() => {
//   dbh.query('SELECT 1')
// }, KEEP_ALIVE_INTERVAL)
