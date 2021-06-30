module.exports = (err, req, res, next) => {
  console.log(err, '<<<<')
  const errorObject = (code, message) => {
    return res.status(code).json({
      status: 'Error',
      name: err.name,
      message: message
    });
  };

  switch (err.name) {
    case 'FillInTheBlank':
      errorObject(400, 'Please fill in the blank');
      break;
    case 'InvalidAccount':
      errorObject(400, 'Invalid account');
      break;
    case 'ErrorAuthenticate':
      errorObject(401, 'Error authenticate user');
      break;
    case 'ErrorToken':
      errorObject(403, 'Invalid token');
      break;
    case 'NotFound':
      errorObject(404, 'Error not found');
      break;
    default:
      return res.status(500).json({
        status: 'Error',
        name: 'InternalServerError',
        message: 'Internal server error'
      });
  }
};
