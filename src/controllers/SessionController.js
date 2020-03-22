
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const Yup = require('yup');

class SessionController {

  async login(req, res) {
    const { email, password } = req.body;

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required()
    })
    if(!await schema.isValid(req.body)){
      return res.send(401).json({ msg: 'fields must be filled' })
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.send(401).json({ msg: 'login invalid' })
    }

    const checkPassword = await user.checkPassword(password);

    if (!checkPassword) {
      return res.send(401).json({ msg: 'login invalid' })
    }

    const { id } = user;
    return res.json(
      {
        user: {
          id: id,
          emal: email
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn
        })
      });
  }
}

module.exports = new SessionController();