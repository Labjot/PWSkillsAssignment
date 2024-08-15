--------------POST /api/v1/users/register

Description : Registers a new user

Endpoint : /api/v1/users/register

Request Body Parameters:
--name (required, string): The desired name for the new account.
--email (required, string): The email address for the account.
--password (required, string): The password for the account.

Request Example : 
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}

Response Example : 
{
    "statusCode": 200,
    "data": {
        "name": "johndoe",
        "email": "john@example.com",
        "password": "securepassword123",
        "_id": "66bd328f0fb9105b4c6d6544",
        "__v": 0
    },
    "message": "User registered successfully.",
    "success": true
}


--------------POST /api/v1/users/login
Description : Allows a user to log in by providing their email and password.

Endpoint : /api/v1/users/login

Request Body Parameters:
--email (required, string): The email address for the account.
--password (required, string): The password for the account.

Request Example : 
{
  "email": "john@example.com",
  "password": "securepassword123"
}

Response Example : 
{
    "statusCode": 200,
    "data": "User login successfully",
    "success": true
}