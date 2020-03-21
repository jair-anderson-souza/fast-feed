const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
// const auth = require('./controllers/Auth');

require('./database');

const router = new Router();

router.post('/login', SessionController.login);
// router.use(auth);

router.get('/users', UserController.findAll);

module.exports = router;