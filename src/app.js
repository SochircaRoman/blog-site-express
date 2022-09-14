const express = require('express')
require('dotenv').config()

const app = express()
const router = require("./api/routes/index");

app.use(express.json())
app.use('/', router);

const startApp = async () => {
  try {
    app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
      console.log(`Server started on port http://localhost:${process.env.SERVER_PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()
require('./database').init()