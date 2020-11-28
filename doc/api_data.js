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
  }
] });
