const jwt = require('jsonwebtoken');
const authConfig = require('../config/AuthConfig');

module.exports = async (req, res, next) => {

  const [, token] = req.headers.authorization.split(' ');
  console.log('Token: ', token);
  try {
    const decoded = await jwt.verify(token, authConfig.secret);
    console.log(decoded);
    return next();
  } catch (err) {
    return res.status(400).json({ msg: 'invalid token' });
  }
}