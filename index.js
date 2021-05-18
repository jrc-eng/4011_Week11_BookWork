const express = require('express')
const app = express()
const port = 3000
//import PokemonGames from "./services/pokemonGames.js"

const PokemonGames = require('./services/pokemonGames')

const superagent = require('superagent')

//const pokemonResp = await superagent.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
//console.log(pokemonResp)

app.get('/games', PokemonGames)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})