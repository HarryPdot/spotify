const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'd686ce0a39674c5eacd95c2640c83db2',
        clientSecret: '471692e81f5b4c7cb158e6b9863a896a',
        refreshToken
    })
    spotifyApi.refreshAccessToken()
    .then(data => {
        console.log(data.body)
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'd686ce0a39674c5eacd95c2640c83db2',
        clientSecret: '471692e81f5b4c7cb158e6b9863a896a'
    })
    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        // console.log(data.body)
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)