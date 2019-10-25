const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()


const PORT = process.env.PORT || 8000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})