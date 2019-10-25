const express = require('express')
const app = express()
const server = require('http').Server(app)

const PORT = process.env.PORT || 8000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))

app.use('/api', require('./routes/api'))
app.use('/', require('./routes'))



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})