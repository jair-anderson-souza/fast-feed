const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ msg: 'invalid token' })
  }

  const [, token] = authorization.split(' ');
  try {
    const decoded = await jwt.verify(token, authConfig.secret);
    return next();
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
}