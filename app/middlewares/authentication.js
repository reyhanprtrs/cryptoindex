const { User } = require('../repositories');
const { verifyToken } = require('../helpers');

module.exports = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) next({ name: 'TokenError' });
    else {
      const decoded = verifyToken(token);
      const user = await User.findById(decoded.id);

      if (!user) next({ name: 'ErrorAuthenticate' });
      else {
        req.user = decoded;
        next();
      }
    }
    
  } catch (error) {
    next(error)
  }
}