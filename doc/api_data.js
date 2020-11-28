define({ "api": [
  {
    "type": "post",
    "url": "/forgot-password",
    "title": "Forgot Password",
    "version": "0.0.1",
    "group": "Auth",
    "name": "Forgot_Password",
    "description": "<p>Forgot Password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"message\": \"Please check your email for password reset instructions\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n \"message\": \"Validation error: \\\"email\\\" must be a valid email\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loginRoute.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/forgot-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "version": "0.0.1",
    "group": "Auth",
    "name": "Login",
    "description": "<p>Authenticate</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"email\": \"test2@gmail.com\",\n    \"role\": \"User\",\n    \"isVerified\": 1,\n    \"jwtToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjMsImlhdCI6MTYwNjUzNjEyMiwiZXhwIjoxNjA2NjIyNTIyfQ.ik-uzjIrp6VDHDVsMBXI7V1fuektXDiohCahCD4ZVQw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n   \"message\": \"Email or password is incorrect\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loginRoute.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "version": "0.0.1",
    "group": "Auth",
    "name": "Register",
    "description": "<p>Register</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirm Password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>User role</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "acceptTerms",
            "description": "<p>Accept terms</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"message\": \"Registration successful, please check your email for verification instructions\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n \"message\": \"Validation error: \\\"confirmPassword\\\" must be [ref:password]\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loginRoute.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/reset-password",
    "title": "Reset Password",
    "version": "0.0.1",
    "group": "Auth",
    "name": "Reset_Password",
    "description": "<p>Reset Password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Reset Token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>New Password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirm New Password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"message\": \"Password reset successful, you can now login\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loginRoute.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/reset-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/verify-email",
    "title": "Verify email",
    "version": "0.0.1",
    "group": "Auth",
    "name": "Verify_email",
    "description": "<p>Verify email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Verification token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"message\": \"Verification successful, you can now login\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Verification failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loginRoute.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/verify-email"
      }
    ]
  },
  {
    "type": "get",
    "url": "/profile/delete/:id_user",
    "title": "Delete",
    "version": "0.0.1",
    "group": "Profile",
    "name": "ProfileDelete",
    "description": "<p>Delete a profile</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 0,\n        \"warningStatus\": 0\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n   \"status\": false\n   \"message\": \"Operation failed\"\n   \"detail\": \"Error Message\"\n   \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/profileController.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/profile/delete/:id_user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU1OTExNSwiZXhwIjoxNjA2NjQ1NTE1fQ.S2nact0nfjqk7Wgyo9yEdA_LoJQhUd9yU7kIq24FbB8\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/profile/detail/:id_user",
    "title": "Detail",
    "version": "0.0.1",
    "group": "Profile",
    "name": "ProfileDetail",
    "description": "<p>Get detail of a profile</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n         \"id_profile\": 32,\n         \"name\": \"John\",\n         \"lastname\": \"Doe\",\n         \"birthday\": \"2020-11-27T23:00:00.000Z\",\n         \"gender\": \"male\",\n         \"phone\": 2147483647,\n         \"status\": 1,\n         \"photo\": \" photo\",\n         \"profile_address\": \"SW 8\",\n         \"role\": \"User\",\n         \"user_id_user\": 2,\n         \"id_chef\": 1,\n         \"short_intro\": \"short_intro\",\n         \"long_intro\": \"long_description\",\n         \"services_name\": \"rt\",\n         \"service_availability\": \"service\",\n         \"price\": 4,\n         \"position\": \"senior\",\n         \"languages\": \"en\",\n         \"chef_address\": \"SW 8\",\n         \"location_service\": \"location_example\",\n         \"banner\": \"banner_example\",\n         \"id_address\": 8,\n         \"country\": \"USA\",\n         \"first_address\": \"SW 8\",\n         \"second_address\": \"AVE 8\",\n         \"state_region\": \"FLORIDA\",\n         \"city\": \"MIAMI\",\n         \"postcode\": \"95000\",\n         \"lat_lon\": \" test\",\n         \"about_info\": \"Lorem Ipsum Dolor\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n   \"status\": false\n   \"message\": \"Operation failed\"\n   \"detail\": \"Error Message\"\n   \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/profileController.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/profile/detail/:id_user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU1OTExNSwiZXhwIjoxNjA2NjQ1NTE1fQ.S2nact0nfjqk7Wgyo9yEdA_LoJQhUd9yU7kIq24FbB8\" }",
          "type": "String"
        }
      ]
    }
  }
] });
