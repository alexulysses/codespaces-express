const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('<h1 style= "color: #242b64"> ValaBot </h1> <img height = "112" width= "112" src= "https://cdn.discordapp.com/attachments/1065410994559516714/1079752354087309435/image0.jpg"> <p style =  "color: #242b64" > Welcome to Vala.com </p> <p style = "color: #ff3333"> To connect Valas bot to your twitch account, you must authorize by clicking the button :) <p> <button style= "background: #242b64 ; color: white" > Connect to Twitch </button>' );})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

