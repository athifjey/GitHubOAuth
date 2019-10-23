const express = require('express')
const axios = require('axios')

const clientID = 'c8f6ec7d2be463e761f7'
const clientSecret = '2f5bfafc24ad826a13aea7fc16a3815133705f4a'

const app = express()



app.get('/oauth/redirect', (req, res) => {

  const requestToken = req.query.code
  axios({
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    
    const accessToken = response.data.access_token;
    res.redirect(`/home.html?access_token=${accessToken}`)
  })
})

app.use(express.static(__dirname + '/public/'))
app.listen(8080)