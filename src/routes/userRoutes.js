const { Router } = require('express');
const dbUser = require('../controllers/usersController')
const ud = require('../middlewares/userMiddleware')

const route = new Router();

route.post('/register/user', ud.validateKeys, dbUser.createUser);
route.get('/users', dbUser.getUsers);
route.post('/login', ud.validateKeysLogin, dbUser.login);

module.exports = route;