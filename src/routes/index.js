// App routes modules
const { Router } = require('express')
const router = Router()
const passport = require('passport');
const { getUser, createUser } = require('../components/user.controller')
const { getProductsDb } = require('../components/search')
const { Login, Register } = require('../components/auth.controller')
const { recommendations } = require('../components/latestSearch.controller')
const { addFavs, removeFavs, getFavs } = require('../components/favs.controller')

//App routes
router.post('/login', Login)
router.post('/register', Register)
router.get('/users', passport.authenticate('jwt', { session: false }), getUser)
router.post('/users', passport.authenticate('jwt', { session: false }), createUser)
router.get('/search', getProductsDb)
router.get('/recommendations', recommendations)
router.post('/favs/:user_id', addFavs)
router.post('/removefavs/:favs_id', removeFavs)
router.get('/favs/:user_id', getFavs)

module.exports = router;
