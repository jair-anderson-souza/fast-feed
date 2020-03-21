const User = require('../models/User');

class UserController {

  async findAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

}

module.exports = new UserController();