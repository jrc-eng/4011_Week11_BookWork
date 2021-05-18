const superagent = require('superagent')
const PokemonGames = async (req, res, next) => {
    // Do stuff
    res.send('games')
    next()
}
module.exports = PokemonGames