# READ ME!

```
Base URL = http://localhost:3000
```

## API

### POST /user/signin
>User sign in to generate token

_Request Body_
```
{
  email: 'reyhan@mail.com'
}
```
_Response (200) - Success Sign In_
```
{
  token: 'token'
}
```
_Response (400) - Blank Field_
```
{
  status: 'Error',
  name: 'FillInTheBlank',
  message: 'Please fill in the blank'
}
```
_Response (400) - Wrong Email_
```
{
  status: 'Error',
  name: 'InvalidAccount',
  message: 'InvalidAccount'
}
```
_Response (500) - Internal Server Error_
```
{
  status: 'Error',
  name: 'InternalServerError',
  message: 'Internal server error'
}
```

### POST /user
>Create new user account

_Request Headers_
```
{
  token: 'token'
}
```
_Request Body_
```
{
  username: 'reyhan',
  email: 'reyhan@mail.com',
  accountNumber: 123,
  identityNumber: 123
}
```
_Response (201) - Success Create New User_
```
{
  message: 'User account created successfully'
}
```
_Response (400) - Blank Field_
```
{
  status: 'Error',
  name: 'FillInTheBlank',
  message: 'Please fill in the blank'
}
```
_Response (500) - Internal Server Error_
```
{
  status: 'Error',
  name: 'InternalServerError',
  message: 'Internal server error'
}
```

### GET /user
>Get all users from database

_Request Headers_
```
{
  token: 'token'
}
```
_Response (200) - Success Get Data_
```
[
  {
    _id: '60dc3a912e10404384111ff0',
    username: 'reyhan',
    email: 'reyhan@mail.com',
    accountNumber: 123,
    identityNumber: 123
  }
]
```
_Response (500) - Internal Server Error_
```
{
  status: 'Error',
  name: 'InternalServerError',
  message: 'Internal server error'
}
```

### GET /user/account/:accountNumber
>Get user account by account number

_Request Headers_
```
{
  token: 'token'
}
```
_Response (200) - Success Get Data_
```
{
  _id: '60dc3a912e10404384111ff0',
  username: 'reyhan',
  email: 'reyhan@mail.com',
  accountNumber: 123,
  identityNumber: 123
}
```
_Response (404) - Account Not Found_
```
{
  status: 'Error',
  name: 'NotFound',
  message: 'Error not found'
}
```
_Response (500) - Internal Server Error_
```
{
  status: 'Error',
  name: 'InternalServerError',
  message: 'Internal server error'
}
```

### GET /user/identity/:identityNumber
>Get user account by identity number

_Request Headers_
```
{
  token: 'token'
}
```
_Response (200) - Success Get Data_
```
{
  _id: '60dc3a912e10404384111ff0',
  username: 'reyhan',
  email: 'reyhan@mail.com',
  accountNumber: 123,
  identityNumber: 123
}
```
_Response (404) - Account Not Found_
```
{
  status: 'Error',
  name: 'NotFound',
  message: 'Error not found'
}
```
_Response (500) - Internal Server Error_
```
{
  status: 'Error',
  name: 'InternalServerError',
  message: 'Internal server error'
}
```

### PUT /user/:id
>Update user account's information

_Request Headers_
```
{
  token: 'token'
}
```
_Request Body_
```
{
  username: 'yahya',
  email: 'yahya@mail.com',
  accountNumber: 123,
  identityNumber: 123
}
```
_Response (200) - Success Update Data_
```
{
  message: 'User account has been updated'
}
```
_Response (500) - Internal Server Error_
```
{
  status: 'Error',
  name: 'InternalServerError',
  message: 'Internal server error'
}
```

### DELETE /user/:id
>Delete user account

_Request Headers_
```
{
  token: 'token'
}
```
_Response (200) - Success Delete Account_
```
{
  message: 'User account has been deleted'
}
```
_Response (500) - Internal Server Error_
```
{
  status: 'Error',
  name: 'InternalServerError',
  message: 'Internal server error'
}
```