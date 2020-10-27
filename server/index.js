const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 8080


console.log('server is running')
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../build')))
app.enable('trust proxy')
app.get('*/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
