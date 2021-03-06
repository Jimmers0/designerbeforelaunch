const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => res.send('API Running'))

// Init Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))
app.use(express.static('public'))

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/projects', require('./routes/api/projects'))


const PORT = process.env.PORT || 8000




app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})