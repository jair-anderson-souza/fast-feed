const { Router } = require('express');
const User = require('./models/User');
const UserController = require('./controllers/UserController');

require('./database');

const router = new Router();

router.get('/users', UserController.findAll);

module.exports = router;