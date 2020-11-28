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
    "url": "/cart/detail:/:id",
    "title": "Cart Order Detail",
    "version": "0.0.1",
    "group": "Cart_Order",
    "name": "Cart_Order_Detail",
    "description": "<p>Cart Order Detail</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"data\": {\n    \"id_cart_order\": 8,\n    \"name\": \"Cart1\",\n    \"description\": \"Cart1\",\n    \"type_payment\": \"Cash\",\n    \"price\": 10,\n    \"quantity\": 3,\n    \"tax\": 6.75,\n    \"shipping\": 5.25,\n    \"total\": 22\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": false,\n\"message\": \"cart order don't exists\",\n\"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/cartController.js",
    "groupTitle": "Cart_Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/cart/detail:/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/cart/create",
    "title": "Create Cart Order",
    "version": "0.0.1",
    "group": "Cart_Order",
    "name": "Create_Cart_Order",
    "description": "<p>Create Cart Order</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "tax",
            "description": "<p>TAX, IVA</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "shipping",
            "description": "<p>Shipping cost</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "type_payment",
            "description": "<p>Payment Type</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total",
            "description": "<p>Total value</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Order added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/cartController.js",
    "groupTitle": "Cart_Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/cart/create"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/chefService/create/",
    "title": "Create Service",
    "version": "0.0.1",
    "group": "ChefService",
    "name": "CreateService",
    "description": "<p>Create service</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 5,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/chefServiceController.js",
    "groupTitle": "ChefService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefService/create/"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/chefService/detail/:id_service",
    "title": "Detail Service",
    "version": "0.0.1",
    "group": "ChefService",
    "name": "DetailService",
    "description": "<p>Get detail of a chefService</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n  \"message\": \"Successful Operation\",\n  \"data\": [\n     {\n            \"id\": 2,\n            \"service_name\": \"Lorem\",\n            \"description\": \"Lorem ipsum dolors\",\n            \"created\": \"2020-11-28T21:06:15.000Z\",\n            \"updated\": \"2020-11-28T21:40:55.000Z\",\n            \"status\": 1,\n            \"status_update\": \"2020-11-28T21:06:15.000Z\"\n        }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/chefServiceController.js",
    "groupTitle": "ChefService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefService/detail/:id_service"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/chefService/enableOrDisableService/:id_service",
    "title": "Enable or Disable",
    "version": "0.0.1",
    "group": "ChefService",
    "name": "EnableOrDisableService",
    "description": "<p>Enablo or disable a service chef</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 0,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/chefServiceController.js",
    "groupTitle": "ChefService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefService/enableOrDisableService/:id_service"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/chefService/getAllService/",
    "title": "Get all Service",
    "version": "0.0.1",
    "group": "ChefService",
    "name": "GetAllService",
    "description": "<p>Get all chefService</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n  \"message\": \"Successful Operation\",\n  \"data\": [\n        {\n            \"id\": 1,\n            \"service_name\": \"a1\",\n            \"description\": \"a1...\",\n            \"created\": \"2020-11-28T21:04:16.000Z\",\n            \"updated\": \"2020-11-28T21:04:16.000Z\",\n            \"status\": 1,\n            \"status_update\": \"2020-11-28T21:06:15.000Z\"\n        },\n        {\n            \"id\": 3,\n            \"service_name\": \"a2\",\n            \"description\": \"a2..\",\n            \"created\": \"2020-11-28T21:07:31.000Z\",\n            \"updated\": \"2020-11-28T21:07:31.000Z\",\n            \"status\": 1,\n            \"status_update\": \"2020-11-28T21:47:58.000Z\"\n        }\n    ]s\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/chefServiceController.js",
    "groupTitle": "ChefService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefService/getAllService/"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/chefService/update/:id_service",
    "title": "Update Service",
    "version": "0.0.1",
    "group": "ChefService",
    "name": "UpdateService",
    "description": "<p>Update a chefService</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 0,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/chefServiceController.js",
    "groupTitle": "ChefService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefService/update/:id_service"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/cousine/detail/:id",
    "title": "Cousine Detail",
    "version": "0.0.1",
    "group": "Cousine",
    "name": "Cousine_Detail",
    "description": "<p>Cousine Detail</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"data\": {\n    \"id_cousine\": 2,\n    \"cousine\": \"Filette mignon\",\n    \"description\": \"Wonderful food\",\n    \"created\": \"2020-11-28T20:49:12.000Z\",\n    \"updated\": \"2020-11-28T20:49:12.000Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": false,\n\"message\": \"cousine order don't exists\",\n\"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/cousineController.js",
    "groupTitle": "Cousine",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/cousine/detail/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/cousine/create",
    "title": "Create cousine",
    "version": "0.0.1",
    "group": "Cousine",
    "name": "Create_cousine",
    "description": "<p>Create cousine</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cousine",
            "description": "<p>Cousine Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Cousine added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/cousineController.js",
    "groupTitle": "Cousine",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/cousine/create"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/cousine/delete/:id",
    "title": "Delete Cousine",
    "version": "0.0.1",
    "group": "Cousine",
    "name": "Delete_Cousine",
    "description": "<p>Delete Cousine</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n \"message\": \"Cousine deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad request\n{\n  \"Validation error: \\\"id\\\" is required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/cousineController.js",
    "groupTitle": "Cousine",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/cousine/delete/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/cousine/update/:id",
    "title": "Update Cousine",
    "version": "0.0.1",
    "group": "Cousine",
    "name": "Update_Cousine",
    "description": "<p>Update Cousine</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"message\": \"Cousine updated succefully\",\n\"data\": {\n    \"id_cousine\": 2,\n    \"cousine\": \"Filette mignon\",\n    \"description\": \"Wonderful food\",\n    \"created\": \"2020-11-28T20:49:12.000Z\",\n    \"updated\": \"2020-11-28T21:35:49.000Z\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad request\n{\n  \"message\": \"Validation error: \\\"cousine\\\" must be a string\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/cousineController.js",
    "groupTitle": "Cousine",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/cousine/update/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/dietary/create",
    "title": "Create dietary",
    "version": "0.0.1",
    "group": "Dietary",
    "name": "Create_dietary",
    "description": "<p>Create dietary</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dietary",
            "description": "<p>Dietary Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Dietary added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/dietaryController.js",
    "groupTitle": "Dietary",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/dietary/create"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dietary/delete/:id",
    "title": "Delete dietary",
    "version": "0.0.1",
    "group": "Dietary",
    "name": "Delete_Dietary",
    "description": "<p>Delete Dietary</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n \"message\": \"dietary deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad request\n{\n  \"Validation error: \\\"id\\\" is required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/dietaryController.js",
    "groupTitle": "Dietary",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/dietary/delete/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dietary/detail/:id",
    "title": "dietary Detail",
    "version": "0.0.1",
    "group": "Dietary",
    "name": "Dietary_Detail",
    "description": "<p>Dietary Detail</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"data\": {\n    \"id_dietary\": 2,\n    \"dietary\": \"Filette mignon\",\n    \"description\": \"Wonderful food\",\n    \"created\": \"2020-11-28T20:49:12.000Z\",\n    \"updated\": \"2020-11-28T20:49:12.000Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": false,\n\"message\": \"Dietary order don't exists\",\n\"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/dietaryController.js",
    "groupTitle": "Dietary",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/dietary/detail/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dietary/update/:id",
    "title": "Update dietary",
    "version": "0.0.1",
    "group": "Dietary",
    "name": "Update_Dietary",
    "description": "<p>Update dietary</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"message\": \"dietary updated succefully\",\n\"data\": {\n    \"id_dietary\": 2,\n    \"dietary\": \"Filette mignon\",\n    \"description\": \"Wonderful food\",\n    \"created\": \"2020-11-28T20:49:12.000Z\",\n    \"updated\": \"2020-11-28T21:35:49.000Z\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad request\n{\n  \"message\": \"Validation error: \\\"dietary\\\" must be a string\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/dietaryController.js",
    "groupTitle": "Dietary",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/dietary/update/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/foodItem/create/:id_chef",
    "title": "Create",
    "version": "0.0.1",
    "group": "FoodItem",
    "name": "CreateFoodItem",
    "description": "<p>Create a foodItem</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "day",
            "description": "<p>Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "hour",
            "description": "<p>Hour</p>"
          },
          {
            "group": "Parameter",
            "type": "price",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 2,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/foodItemController.js",
    "groupTitle": "FoodItem",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodItem/create/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/foodItem/delete/:id_food_item",
    "title": "Delete",
    "version": "0.0.1",
    "group": "FoodItem",
    "name": "DeleteFoodItem",
    "description": "<p>Delete a foodItem</p>",
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
          "content": " HTTP/1.1 500 Bad Request\n{\n   \"status\": false\n   \"message\": \"Operation failed\"\n   \"detail\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/foodItemController.js",
    "groupTitle": "FoodItem",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodItem/delete/:id_food_item"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodItem/detail/:id_food_item",
    "title": "Detail",
    "version": "0.0.1",
    "group": "FoodItem",
    "name": "DetailFoodItem",
    "description": "<p>Get a foodItem</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_food_item\": 5,\n            \"name\": \"Lorem\",\n            \"description\": \"Lorem ipsum dolor\",\n            \"day\": 1,\n            \"hour\": \"00:00:04\",\n            \"price\": 55,\n            \"picture\": \"picture\",\n            \"created\": \"2020-11-27T21:17:28.000Z\",\n            \"updated\": \"2020-11-28T15:11:29.000Z\",\n            \"chef_id_chef\": 1\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/foodItemController.js",
    "groupTitle": "FoodItem",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodItem/detail/:id_food_item"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodItem/getItemsByChef/:id_chef",
    "title": "GetItemsByChef",
    "version": "0.0.1",
    "group": "FoodItem",
    "name": "GetItemsByChef",
    "description": "<p>Get all foodItem of the chef</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_food_item\": 5,\n            \"name\": \"Lorem\",\n            \"description\": \"Lorem ipsum dolor\",\n            \"day\": 1,\n            \"hour\": \"00:00:04\",\n            \"price\": 55,\n            \"picture\": \"picture\",\n            \"created\": \"2020-11-27T21:17:28.000Z\",\n            \"updated\": \"2020-11-28T15:11:29.000Z\",\n            \"chef_id_chef\": 1\n        },\n        {\n            \"id_food_item\": 3,\n            \"name\": \"Lorem\",\n            \"description\": \"Lorem ipsum dolor\",\n            \"day\": 1,\n            \"hour\": \"00:00:04\",\n            \"price\": 55,\n            \"picture\": \"picture\",\n            \"created\": \"2020-11-27T21:17:28.000Z\",\n            \"updated\": \"2020-11-28T15:11:29.000Z\",\n            \"chef_id_chef\": 1\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/foodItemController.js",
    "groupTitle": "FoodItem",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodItem/getItemsByChef/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/foodItem/update/:id_food_item",
    "title": "Update",
    "version": "0.0.1",
    "group": "FoodItem",
    "name": "UpdateFoodItem",
    "description": "<p>Update a foodItem</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "day",
            "description": "<p>Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "hour",
            "description": "<p>Hour</p>"
          },
          {
            "group": "Parameter",
            "type": "price",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_chef",
            "description": "<p>Chef_id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 2,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/foodItemController.js",
    "groupTitle": "FoodItem",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodItem/update/:id_food_item"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/foodService/create/:id_chef",
    "title": "Create",
    "version": "0.0.1",
    "group": "FoodService",
    "name": "CreateFoodService",
    "description": "<p>Create a foodService</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_type",
            "description": "<p>Service Type</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "day",
            "description": "<p>Day</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "hour",
            "description": "<p>Hour</p>"
          },
          {
            "group": "Parameter",
            "type": "price",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 2,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/foodServiceController.js",
    "groupTitle": "FoodService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodService/create/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/foodService/delete/:id_service",
    "title": "Delete",
    "version": "0.0.1",
    "group": "FoodService",
    "name": "DeleteFoodService",
    "description": "<p>Delete a foodService</p>",
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
          "content": " HTTP/1.1 500 Bad Request\n{\n   \"status\": false\n   \"message\": \"Operation failed\"\n   \"detail\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/foodServiceController.js",
    "groupTitle": "FoodService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodService/delete/:id_service"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodService/detail/:id_service",
    "title": "Detail",
    "version": "0.0.1",
    "group": "FoodService",
    "name": "FoodServiceDetail",
    "description": "<p>Get detail of a food service</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n  \"message\": \"Successful Operation\",\n  \"data\": [\n     {\n            \"id_food_service\": 7,\n            \"service_type\": \"service_example\",\n            \"description\": \"ipsum dolor\",\n            \"day\": 6,\n            \"hour\": \"00:00:02\",\n            \"price\": 50,\n            \"picture\": \"service_picture\",\n            \"created\": \"2020-11-27T12:45:05.000Z\",\n            \"updated\": \"2020-11-27T12:45:05.000Z\",\n            \"chef_id_chef\": 1\n        }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/foodServiceController.js",
    "groupTitle": "FoodService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodService/detail/:id_service"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodService/getAllService/:id_chef",
    "title": "GetAllServiceChef",
    "version": "0.0.1",
    "group": "FoodService",
    "name": "GetAllServiceChef",
    "description": "<p>Get all servce of a chef</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n  \"message\": \"Successful Operation\",\n  \"data\": [\n     {\n            \"id_food_service\": 7,\n            \"service_type\": \"service_example\",\n            \"description\": \"ipsum dolor\",\n            \"day\": 6,\n            \"hour\": \"00:00:02\",\n            \"price\": 50,\n            \"picture\": \"service_picture\",\n            \"created\": \"2020-11-27T12:45:05.000Z\",\n            \"updated\": \"2020-11-27T12:45:05.000Z\",\n            \"chef_id_chef\": 1\n        },\n        {\n            \"id_food_service\": 8,\n            \"service_type\": \"service_example\",\n            \"description\": \"lorem\",\n            \"day\": 3,\n            \"hour\": \"00:00:02\",\n            \"price\": 50,\n            \"picture\": \"service_picture\",\n            \"created\": \"2020-11-27T12:45:06.000Z\",\n            \"updated\": \"2020-11-27T12:45:06.000Z\",\n            \"chef_id_chef\": 1\n        }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/foodServiceController.js",
    "groupTitle": "FoodService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodService/getAllService/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/foodService/update/:id_service",
    "title": "Update",
    "version": "0.0.1",
    "group": "FoodService",
    "name": "UpdateFoodService",
    "description": "<p>Update a foodService</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_type",
            "description": "<p>Service Type</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "day",
            "description": "<p>Day</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "hour",
            "description": "<p>Hour</p>"
          },
          {
            "group": "Parameter",
            "type": "price",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_chef",
            "description": "<p>Chef id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 0,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/foodServiceController.js",
    "groupTitle": "FoodService",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodService/update/:id_service"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/like/like_or_dislike_post/:id_post",
    "title": "Like Post",
    "version": "0.0.1",
    "group": "Like",
    "name": "LikeOrDislikePost",
    "description": "<p>Action Like or Dislike Post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Type</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_user",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
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
    "filename": "src/app/api/controllers/likeController.js",
    "groupTitle": "Like",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/like/like_or_dislike_post/:id_post"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/post/create/:id_user",
    "title": "Create",
    "version": "0.0.1",
    "group": "Post",
    "name": "CreatePost",
    "description": "<p>Create a post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "privacy",
            "description": "<p>Privascy</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_zone",
            "description": "<p>Timezone</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_profile",
            "description": "<p>Profile id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 14,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/postController.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/post/create/:id_user"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/post/delete/:id_post",
    "title": "Delete",
    "version": "0.0.1",
    "group": "Post",
    "name": "DeletePost",
    "description": "<p>Delete a post</p>",
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
          "content": " HTTP/1.1 500 Bad Request\n{\n   \"status\": false\n   \"message\": \"Operation failed\"\n   \"detail\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/postController.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/post/delete/:id_post"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/post/detail/:id_post",
    "title": "Detail",
    "version": "0.0.1",
    "group": "Post",
    "name": "DetailPost",
    "description": "<p>Get a post</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_post\": 16,\n            \"post_name\": \"Lorem\",\n            \"description\": \"Lorem ipsum Dolor\",\n            \"post_photo\": \"photo\",\n            \"location\": \"Lorem ipsum\",\n            \"status\": 1,\n            \"privacy\": \"public\",\n            \"time_zone\": \"GMT-5\",\n            \"profile_id_profile\": 32,\n            \"profile_user_id_user\": 2,\n            \"profile_name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"profile_photo\": \" photo\",\n            \"likesQty\": 5,\n            \"commentQty\": 12,\n            \"shareQty\": 40\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/postController.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/post/detail/:id_post"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/post/getComment/:id_post",
    "title": "GetAllCommentsPost",
    "version": "0.0.1",
    "group": "Post",
    "name": "GetAllCommentsPost",
    "description": "<p>Get all comments of the post</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n    \"data\": [\n         {\n            \"id_post_comment\": 5,\n            \"comment\": \"Lorem ipsum dolor1\",\n            \"status\": 1,\n            \"created\": \"2020-11-28T14:50:30.000Z\",\n            \"updated\": \"2020-11-28T14:50:28.000Z\",\n            \"post_id_post\": 16,\n            \"user_id_user\": 2\n        },\n        {\n            \"id_post_comment\": 5,\n            \"comment\": \"Lorem ipsum dolor2\",\n            \"status\": 1,\n            \"created\": \"2020-11-28T14:50:30.000Z\",\n            \"updated\": \"2020-11-28T14:50:28.000Z\",\n            \"post_id_post\": 16,\n            \"user_id_user\": 12\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/postController.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/post/getComment/:id_post"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/post/getByProfile/:id_profile",
    "title": "GetByProfile",
    "version": "0.0.1",
    "group": "Post",
    "name": "GetByProfile",
    "description": "<p>Get all post of the profile</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_post\": 16,\n            \"post_name\": \"Lorem\",\n            \"description\": \"Lorem ipsum Dolor\",\n            \"post_photo\": \"photo\",\n            \"location\": \"Lorem ipsum\",\n            \"status\": 1,\n            \"privacy\": \"public\",\n            \"time_zone\": \"GMT-5\",\n            \"profile_id_profile\": 32,\n            \"profile_user_id_user\": 2,\n            \"profile_name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"profile_photo\": \" photo\",\n            \"likesQty\": 5,\n            \"commentQty\": 12,\n            \"shareQty\": 40\n        },\n        {\n            \"id_post\": 17,\n            \"post_name\": \"Gourmet\",\n            \"description\": \"Lorem ipsum Dolor\",\n            \"post_photo\": \"photo\",\n            \"location\": \"Lorem ipsum\",\n            \"status\": 1,\n            \"privacy\": \"public\",\n            \"time_zone\": \"GMT-5\",\n            \"profile_id_profile\": 32,\n            \"profile_user_id_user\": 2,\n            \"profile_name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"profile_photo\": \" photo\",\n            \"likesQty\": 1,\n            \"commentQty\": 8,\n            \"shareQty\": 74\n        }\n\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
    "filename": "src/app/api/controllers/postController.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/post/getByProfile/:id_profile"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/post/update/:id_post",
    "title": "Update",
    "version": "0.0.1",
    "group": "Post",
    "name": "UpdatePost",
    "description": "<p>Update a post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "privacy",
            "description": "<p>Privascy</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_zone",
            "description": "<p>Timezone</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_profile",
            "description": "<p>Profile id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": [\n     {\n        \"affectedRows\": 1,\n        \"insertId\": 0,\n        \"warningStatus\": 0\n    }\n ]\n}",
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
    "filename": "src/app/api/controllers/postController.js",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/post/update/:id_post"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
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
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n  \"message\": \"Successful Operation\",\n  \"data\": [\n     {\n         \"id_profile\": 32,\n         \"name\": \"John\",\n         \"lastname\": \"Doe\",\n         \"birthday\": \"2020-11-27T23:00:00.000Z\",\n         \"gender\": \"male\",\n         \"phone\": 2147483647,\n         \"status\": 1,\n         \"photo\": \" photo\",\n         \"profile_address\": \"SW 8\",\n         \"role\": \"User\",\n         \"user_id_user\": 2,\n         \"id_chef\": 1,\n         \"short_intro\": \"short_intro\",\n         \"long_intro\": \"long_description\",\n         \"services_name\": \"rt\",\n         \"service_availability\": \"service\",\n         \"price\": 4,\n         \"position\": \"senior\",\n         \"languages\": \"en\",\n         \"chef_address\": \"SW 8\",\n         \"location_service\": \"location_example\",\n         \"banner\": \"banner_example\",\n         \"id_address\": 8,\n         \"country\": \"USA\",\n         \"first_address\": \"SW 8\",\n         \"second_address\": \"AVE 8\",\n         \"state_region\": \"FLORIDA\",\n         \"city\": \"MIAMI\",\n         \"postcode\": \"95000\",\n         \"lat_lon\": \" test\",\n         \"about_info\": \"Lorem Ipsum Dolor\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Not record found!\",\n    \"data\": []\n}",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY\" }",
          "type": "String"
        }
      ]
    }
  }
] });
