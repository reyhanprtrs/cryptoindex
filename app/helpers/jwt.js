const jwt = require('jsonwebtoken');
const secret = 'cryptoindex';

exports.generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secret);
};
