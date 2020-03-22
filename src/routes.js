const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const RecipientController = require('./controllers/RecipientController');
const auth = require('./controllers/Auth');

require('./database');

const router = new Router();

router.post('/login', SessionController.login);
router.use(auth);
router.get('/recipients', RecipientController.findAll);
router.post('/recipients', RecipientController.store);
router.put('/recipients/:id', RecipientController.update);
router.delete('/recipients/:id', RecipientController.findAll);




module.exports = router;