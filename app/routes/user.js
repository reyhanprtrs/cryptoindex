const user = require('express').Router();
const { User } = require('../controllers');
const { authentication } = require('../middlewares');

user.post('/signin', User.SignIn);
user.post('/', User.CreateUser);

user.use(authentication);
user.get('/', User.GetAllUsers);
user.get('/account/:accountNumber', User.GetUserByAccountNumber);
user.get('/identity/:identityNumber', User.GetUserByIdentityNumber);
user.put('/:id', User.UpdateUser);
user.delete('/:id', User.DeleteUser);

module.exports = user;