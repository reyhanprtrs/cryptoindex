const { User } = require('../models');

module.exports = {
  find() {
    return User.find().exec();
  },

  findById(id) {
    return User.findById(id).exec();
  },

  findByEmail(email) {
    return User.findOne({ email }).exec();
  },

  findByAccountNumber(accountNumber) {
    return User.findOne({ accountNumber }).exec();
  },

  findByIdentityNumber(identityNumber) {
    return User.findOne({ identityNumber }).exec();
  },

  create(username, email, accountNumber, identityNumber) {
    const user = new User({
      username,
      email,
      accountNumber,
      identityNumber,
    });

    return user.save();
  },

  update(id, payload) {
    return User.findByIdAndUpdate(id, payload);
  },

  delete(id) {
    return User.findByIdAndDelete(id);
  }
};
