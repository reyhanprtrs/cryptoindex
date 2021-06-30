const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const userSchema = new Schema({
  id: ObjectId,
  username: {
    type: String,
    required: [true, 'Missing username']
  },
  email: {
    type: String,
    required: [true, 'Missing email address']
  },
  accountNumber: {
    type: Number,
    min: 1,
    required: [true, 'Missing account number']
  },
  identityNumber: {
    type: Number,
    min: 1,
    required: [true, 'Missing identity number']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;