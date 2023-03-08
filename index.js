const path = require('path')
const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "vb.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

