const { User } = require('../repositories');
const { generateToken } = require('../helpers');

module.exports = {
  async SignIn(req, res, next) {
    try {
      const { email } = req.body;

      if (!email) next({ name: 'FillInTheBlank' });
      else {
        const user = await User.findByEmail(email);

        if (!user) next({ name: 'InvalidAccount' });
        else {
          const token = generateToken({
            id: user._id,
            email: user.email,
            accountNumber: user.accountNumber
          });

          res.status(200).json({ token });
        }
      }
    } catch (error) {
      next(error);
    }
  },

  async GetAllUsers(req, res, next) {
    try {
      const users = await User.find();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  async GetUserByAccountNumber(req, res, next) {
    try {
      const { accountNumber } = req.params;
      const user = await User.findByAccountNumber(accountNumber);

      if (!user) next({ name: 'NotFound' });
      else res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  async GetUserByIdentityNumber(req, res, next) {
    try {
      const { identityNumber } = req.params;
      const user = await User.findByIdentityNumber(identityNumber);
      
      if (!user) next({ name: 'NotFound' });
      else res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  async CreateUser(req, res, next) {
    try {
      const { username, email, accountNumber, identityNumber } = req.body;

      if (!username || !email || !accountNumber || !identityNumber)
        next({ name: 'FillInTheBlank' });
      else {
        const user = await User.create(
          username,
          email,
          accountNumber,
          identityNumber
        );

        if (user._id != null)
          res.status(201).json({ message: 'User account created successfully' });
      }
    } catch (error) {
      next(error);
    }
  },

  async UpdateUser(req, res, next) {
    try {
      const { id } = req.params;

      await User.update(id, req.body);

      res.status(200).json({ message: 'User account has been updated' });
    } catch (error) {
      next(error);
    }
  },

  async DeleteUser(req, res, next) {
    try {
      const { id } = req.params;

      await User.delete(id);

      res.status(200).json({ message: 'User account has been deleted' });
    } catch (error) {
      next(error);
    }
  },
};