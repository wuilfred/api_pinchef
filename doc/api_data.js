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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/chefPosition/create/",
    "title": "Create Position",
    "version": "0.0.1",
    "group": "Chef_Position",
    "name": "CreateChefPosition",
    "description": "<p>Create Position</p>",
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
    "filename": "src/app/api/controllers/chefPositionController.js",
    "groupTitle": "Chef_Position",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefPosition/create/"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/chefPosition/delete/:id_chef_position",
    "title": "Delete",
    "version": "0.0.1",
    "group": "Chef_Position",
    "name": "DeleteChefPosition",
    "description": "<p>Delete a position</p>",
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
    "filename": "src/app/api/controllers/chefPositionController.js",
    "groupTitle": "Chef_Position",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefPosition/delete/:id_chef_position"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/chefPosition/detail/:id_chef_position",
    "title": "Detail",
    "version": "0.0.1",
    "group": "Chef_Position",
    "name": "DetailChefPosition",
    "description": "<p>Get a Chef Position</p>",
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
    "filename": "src/app/api/controllers/chefPositionController.js",
    "groupTitle": "Chef_Position",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefPosition/detail/:id_chef_position"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/chefPosition/getAllPosition/",
    "title": "Get Positions",
    "version": "0.0.1",
    "group": "Chef_Position",
    "name": "GetChefPosition",
    "description": "<p>Get all positions</p>",
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
    "filename": "src/app/api/controllers/chefPositionController.js",
    "groupTitle": "Chef_Position",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefPosition/getAllPosition/"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/chefPosition/update/:id_chef_position",
    "title": "Update",
    "version": "0.0.1",
    "group": "Chef_Position",
    "name": "UpdateChefPosition",
    "description": "<p>Update a Chef Position</p>",
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
    "filename": "src/app/api/controllers/chefPositionController.js",
    "groupTitle": "Chef_Position",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/chefPosition/update/:id_chef_position"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodItem/getAllItems",
    "title": "GetAllItems",
    "version": "0.0.1",
    "group": "FoodItem",
    "name": "GetAllItems",
    "description": "<p>Get all foodItem</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"status\": true,\n \"message\": \"Successful Operation\",\n \"data\": \"status\": true,\n    \"message\": \"Successful Operation\",\n     \"data\": [\n        {\n            \"id_food_item\": 6,\n            \"name\": \"Food title\",\n            \"description\": \"Idjidhidh, sijwihwi, sojw8he8h, sihsibs, sihsihdihs, sibsihsih,\",\n            \"day\": null,\n            \"hour\": \"00:00:05\",\n            \"price\": 35,\n            \"picture\": \"https://pinchef.s3.amazonaws.com/food_item/8/IMG_1684.JPG\",\n            \"created\": \"2020-12-09T05:22:44.000Z\",\n            \"updated\": \"2020-12-09T05:22:44.000Z\",\n            \"chef_id_chef\": 6\n        },\n        {\n            \"id_food_item\": 7,\n            \"name\": \"cerdo\",\n            \"description\": \"Cedo asado\",\n            \"day\": null,\n            \"hour\": \"00:00:03\",\n            \"price\": 46,\n            \"picture\": \"https://pinchef.s3.amazonaws.com/food_item/8/IMG_1684.JPG\",\n            \"created\": \"2020-12-09T05:24:40.000Z\",\n            \"updated\": \"2020-12-09T05:24:40.000Z\",\n            \"chef_id_chef\": 6\n        },\n        {\n            \"id_food_item\": 8,\n            \"name\": \"askdjb sandasnd \",\n            \"description\": \"Cedo asadodf sdf dsfsdfsdf fsfsfasaf\",\n            \"day\": null,\n            \"hour\": \"00:00:03\",\n            \"price\": 46,\n            \"picture\": \"https://pinchef.s3.amazonaws.com/food_item/8/IMG_1684.JPG\",\n            \"created\": \"2020-12-09T05:25:21.000Z\",\n            \"updated\": \"2020-12-09T05:25:21.000Z\",\n            \"chef_id_chef\": 6\n        }\n    ]\n}",
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
        "url": "http://localhost:8001/api/foodItem/getAllItems"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/foodst/create",
    "title": "Create food service type",
    "version": "0.0.1",
    "group": "Food_Service_Type",
    "name": "Create_foodST",
    "description": "<p>Create Food Service Type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_type",
            "description": "<p>Food service type</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Food service type added successfully\"\n}",
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
    "filename": "src/app/api/controllers/foodSTController.js",
    "groupTitle": "Food_Service_Type",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodst/create"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodst/delete/:id",
    "title": "Delete Food Service Type",
    "version": "0.0.1",
    "group": "Food_Service_Type",
    "name": "Delete_Food_Service",
    "description": "<p>Delete Food Service Type</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n \"message\": \"Food Service Type deleted successfully\"\n}",
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
    "filename": "src/app/api/controllers/foodSTController.js",
    "groupTitle": "Food_Service_Type",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodst/delete/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodst/detail/:id",
    "title": "Food service type Detail",
    "version": "0.0.1",
    "group": "Food_Service_Type",
    "name": "Food_service_type_Detail",
    "description": "<p>Food service type Detail</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"data\": {\n    \"id_food_st\": 2,\n    \"service_type\": \"Fast food\",\n    \"description\": \"Fast food\",\n    \"created\": \"2020-11-28T20:49:12.000Z\",\n    \"updated\": \"2020-11-28T20:49:12.000Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": false,\n\"message\": \"Food service type don't exists\",\n\"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/foodSTController.js",
    "groupTitle": "Food_Service_Type",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodst/detail/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodst",
    "title": "Get all",
    "version": "0.0.1",
    "group": "Food_Service_Type",
    "name": "Get_All",
    "description": "<p>Get all Food Service Type</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": true,\n     \"message\": \"Successful operation\",\n     \"data\": [\n        {\n            \"id_food_st\": 3,\n            \"service_type\": \"Back yard camp\",\n            \"description\": \"sunday grill\",\n            \"created\": \"2020-11-29T06:29:40.000Z\",\n            \"updated\": \"2020-11-29T06:36:36.000Z\"\n        },\n        {\n            \"id_food_st\": 4,\n            \"service_type\": \"Home cook\",\n            \"description\": \"Cook at home\",\n            \"created\": \"2020-11-29T06:37:48.000Z\",\n            \"updated\": \"2020-11-29T06:37:48.000Z\"\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/foodSTController.js",
    "groupTitle": "Food_Service_Type",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodst"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodst/update/:id",
    "title": "Update Food Service",
    "version": "0.0.1",
    "group": "Food_Service_Type",
    "name": "Update_Food_Service",
    "description": "<p>Update Food Service</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"message\": \"Food Service type updated succefully\",\n\"data\": {\n    \"id_food_st\": 2,\n    \"service_type\": \"Fast food\",\n    \"description\": \"Fast food\",\n    \"created\": \"2020-11-28T20:49:12.000Z\",\n    \"updated\": \"2020-11-28T21:35:49.000Z\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad request\n{\n  \"message\": \"Validation error: \\\"service_type\\\" must be a string\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/foodSTController.js",
    "groupTitle": "Food_Service_Type",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodst/update/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/foodShipping/create/:id_food_item",
    "title": "Create Food Shipping",
    "version": "0.0.1",
    "group": "Food_Shipping",
    "name": "CreateFoodShipping",
    "description": "<p>Create Food Shipping</p>",
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
    "filename": "src/app/api/controllers/foodShippingController.js",
    "groupTitle": "Food_Shipping",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodShipping/create/:id_food_item"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/foodShipping/delete/:id_shipping",
    "title": "Delete Food Shipping",
    "version": "0.0.1",
    "group": "Food_Shipping",
    "name": "DeleteFoodShipping",
    "description": "<p>Delete Food Shipping</p>",
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
    "filename": "src/app/api/controllers/foodShippingController.js",
    "groupTitle": "Food_Shipping",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodShipping/delete/:id_shipping"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodShipping/detail/:id_shipping",
    "title": "Detail Food Shipping",
    "version": "0.0.1",
    "group": "Food_Shipping",
    "name": "DetailFoodShipping",
    "description": "<p>Get Food Shipping</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_shipping\": 1,\n            \"name\": \"example\",\n            \"description\": \"lorem ipsum dolor\",\n            \"price\": 22,\n            \"created\": \"2020-12-17T05:57:16.000Z\",\n            \"updated\": \"2020-12-17T05:57:18.000Z\",\n            \"food_item_id_foot_item\": 6\n        }\n    ]\n}",
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
    "filename": "src/app/api/controllers/foodShippingController.js",
    "groupTitle": "Food_Shipping",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodShipping/detail/:id_shipping"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/foodShipping/getShippingByItem/:id_food_item",
    "title": "Get Food Shipping by food item",
    "version": "0.0.1",
    "group": "Food_Shipping",
    "name": "GetFoodShipping",
    "description": "<p>Get Food Shipping by food item</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_shipping\": 1,\n            \"name\": \"example\",\n            \"description\": \"lorem ipsum dolor\",\n            \"price\": 22,\n            \"created\": \"2020-12-17T05:57:16.000Z\",\n            \"updated\": \"2020-12-17T05:57:18.000Z\",\n            \"food_item_id_foot_item\": 6\n        },\n        {\n            \"id_shipping\": 2,\n            \"name\": \"example2\",\n            \"description\": \"lorem ipsum dolor2\",\n            \"price\": 22,\n            \"created\": \"2020-12-17T05:57:16.000Z\",\n            \"updated\": \"2020-12-17T05:57:18.000Z\",\n            \"food_item_id_foot_item\": 6\n        }\n    ]\n}",
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
    "filename": "src/app/api/controllers/foodShippingController.js",
    "groupTitle": "Food_Shipping",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/foodShipping/getShippingByItem/:id_food_item"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/review/update/:id_shipping",
    "title": "Update Food Shipping",
    "version": "0.0.1",
    "group": "Food_Shipping",
    "name": "UpdateFoodShipping",
    "description": "<p>Update Food Shipping</p>",
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
    "filename": "src/app/api/controllers/foodShippingController.js",
    "groupTitle": "Food_Shipping",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/review/update/:id_shipping"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/like/getLikes/:id",
    "title": "Get Likes",
    "version": "0.0.1",
    "group": "Like",
    "name": "GetLikes",
    "description": "<p>Get likes</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Type (chef | master_class | food_item | food_service | post)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"likesQty\": 1\n        }\n    ]\n}",
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
        "url": "http://localhost:8001/api/like/getLikes/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/like/like_or_dislike_post/:id",
    "title": "Like or Dislike Action",
    "version": "0.0.1",
    "group": "Like",
    "name": "LikeOrDislike",
    "description": "<p>Action Like or Dislike</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Type (chef | master_class | food_item | food_service | post)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id according to type</p>"
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
        "url": "http://localhost:8001/api/like/like_or_dislike_post/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/location/getAllCityForCountry/country_iso",
    "title": "Get Cities",
    "version": "0.0.1",
    "group": "Location",
    "name": "GetCities",
    "description": "<p>Get all cities of a country</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"data\": \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"iso\": \"AD\",\n            \"name\": \"Andorra\"\n        },\n        {\n            \"iso\": \"AE\",\n            \"name\": \"United Arab Emirates\"\n        },\n        {\n            \"iso\": \"AF\",\n            \"name\": \"Afghanistan\"\n        },\n        {\n            \"iso\": \"AG\",\n            \"name\": \"Antigua and Barbuda\"\n        },...\n}",
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
    "filename": "src/app/api/controllers/locationController.js",
    "groupTitle": "Location",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/location/getAllCityForCountry/country_iso"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/location/getAllCountry/",
    "title": "Get countries",
    "version": "0.0.1",
    "group": "Location",
    "name": "GetContry",
    "description": "<p>Get all country</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"data\": \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"iso\": \"AD\",\n            \"name\": \"Andorra\"\n        },\n        {\n            \"iso\": \"AE\",\n            \"name\": \"United Arab Emirates\"\n        },\n        {\n            \"iso\": \"AF\",\n            \"name\": \"Afghanistan\"\n        },\n        {\n            \"iso\": \"AG\",\n            \"name\": \"Antigua and Barbuda\"\n        },...\n}",
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
    "filename": "src/app/api/controllers/locationController.js",
    "groupTitle": "Location",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/location/getAllCountry/"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/master_clase/create/:id_chef",
    "title": "Create  Master Class",
    "version": "0.0.1",
    "group": "Master_Class",
    "name": "CreateMasterClass",
    "description": "<p>Create Master Class</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cousine",
            "description": "<p>cousine</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dietary",
            "description": "<p>dietary</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "link",
            "description": "<p>link</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ingredient_list",
            "description": "<p>ingredient list</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "start_date",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "class_duration",
            "description": "<p>class duration</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "ticket_count",
            "description": "<p>ticket count</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "ticket_price",
            "description": "<p>ticket price</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "notified",
            "description": "<p>notified</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>picture (is optional)</p>"
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
    "filename": "src/app/api/controllers/masterClassController.js",
    "groupTitle": "Master_Class",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/master_clase/create/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/master_clase/delete/:id_masterClass",
    "title": "Delete",
    "version": "0.0.1",
    "group": "Master_Class",
    "name": "DeleteMasterClass",
    "description": "<p>Delete master class</p>",
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
    "filename": "src/app/api/controllers/masterClassController.js",
    "groupTitle": "Master_Class",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/master_clase/delete/:id_masterClass"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/master_clase/detail/:id_masterClass",
    "title": "Detail Master Class",
    "version": "0.0.1",
    "group": "Master_Class",
    "name": "DetailMasterClass",
    "description": "<p>Get Master Class</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_master_class\": 7,\n            \"title\": \"master-title07\",\n            \"cousine\": \"gourmet2\",\n            \"dietary\": \"verduras\",\n            \"description\": \"lorem ipsum dolor\",\n            \"ingredient_list\": \"ingredientes\",\n            \"start_date\": \"2020-11-27T05:00:00.000Z\",\n            \"class_duration\": \"00:00:15\",\n            \"ticket_count\": 25,\n            \"ticket_price\": 60,\n            \"notified\": \"1\",\n            \"master_class_photo\": \"https://pinchef.s3.amazonaws.com/master_class/7/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"link\": null,\n            \"id_chef\": 1,\n            \"created\": \"2020-12-09T06:56:42.000Z\",\n            \"updated\": \"2020-12-09T06:56:42.000Z\",\n            \"id_profile\": 32,\n            \"position\": \"senior\",\n            \"chef_photo\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"id_user\": 2,\n            \"name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"likesQty\": 1,\n            \"shareQty\": 0,\n            \"commentQty\": 0\n        }\n    ]\n}",
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
    "filename": "src/app/api/controllers/masterClassController.js",
    "groupTitle": "Master_Class",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/master_clase/detail/:id_masterClass"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/master_clase/getAllForChef/:id_chef",
    "title": "Get All for chef",
    "version": "0.0.1",
    "group": "Master_Class",
    "name": "GetAllForChef",
    "description": "<p>Get All for chef</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_master_class\": 7,\n            \"title\": \"master-title07\",\n            \"cousine\": \"gourmet2\",\n            \"dietary\": \"verduras\",\n            \"description\": \"lorem ipsum dolor\",\n            \"ingredient_list\": \"ingredientes\",\n            \"start_date\": \"2020-11-27T05:00:00.000Z\",\n            \"class_duration\": \"00:00:15\",\n            \"ticket_count\": 25,\n            \"ticket_price\": 60,\n            \"notified\": \"1\",\n            \"mc_photo\": \"https://pinchef.s3.amazonaws.com/master_class/7/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"link\": null,\n            \"id_chef\": 1,\n            \"created\": \"2020-12-09T06:56:42.000Z\",\n            \"updated\": \"2020-12-09T06:56:42.000Z\",\n            \"id_profile\": 32,\n            \"position\": \"senior\",\n            \"chef_photo\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"id_user\": 2,\n            \"name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"likesQty\": 1,\n            \"shareQty\": 0,\n            \"commentQty\": 0\n        },\n        {\n            \"id_master_class\": 6,\n            \"title\": \"master-title2\",\n            \"cousine\": \"gourmet2\",\n            \"dietary\": \"verduras\",\n            \"description\": \"lorem ipsum dolor\",\n            \"ingredient_list\": \"ingredientes\",\n            \"start_date\": \"2020-11-27T05:00:00.000Z\",\n            \"class_duration\": \"00:00:15\",\n            \"ticket_count\": 25,\n            \"ticket_price\": 60,\n            \"notified\": \"1\",\n            \"mc_photo\": null,\n            \"link\": null,\n            \"id_chef\": 1,\n            \"created\": \"2020-12-09T06:55:42.000Z\",\n            \"updated\": \"2020-12-09T06:55:42.000Z\",\n            \"id_profile\": 32,\n            \"position\": \"senior\",\n            \"chef_photo\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"id_user\": 2,\n            \"name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"likesQty\": 0,\n            \"shareQty\": 0,\n            \"commentQty\": 0\n        },\n        {\n            \"id_master_class\": 5,\n            \"title\": \"master-title2\",\n            \"cousine\": \"gourmet2\",\n            \"dietary\": \"verduras\",\n            \"description\": \"lorem ipsum dolor\",\n            \"ingredient_list\": \"ingredientes\",\n            \"start_date\": \"2020-11-27T05:00:00.000Z\",\n            \"class_duration\": \"00:00:15\",\n            \"ticket_count\": 25,\n            \"ticket_price\": 60,\n            \"notified\": \"1\",\n            \"mc_photo\": \"https://pinchef.s3.amazonaws.com/master_class/5/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"link\": null,\n            \"id_chef\": 1,\n            \"created\": \"2020-12-09T05:34:30.000Z\",\n            \"updated\": \"2020-12-09T05:34:30.000Z\",\n            \"id_profile\": 32,\n            \"position\": \"senior\",\n            \"chef_photo\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"id_user\": 2,\n            \"name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"likesQty\": 0,\n            \"shareQty\": 0,\n            \"commentQty\": 0\n        }\n    ]\n}",
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
    "filename": "src/app/api/controllers/masterClassController.js",
    "groupTitle": "Master_Class",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/master_clase/getAllForChef/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/master_clase/getAll/",
    "title": "Get All Master Class",
    "version": "0.0.1",
    "group": "Master_Class",
    "name": "GetAllMasterClass",
    "description": "<p>Get All Master Class</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_master_class\": 7,\n            \"title\": \"master-title07\",\n            \"cousine\": \"gourmet2\",\n            \"dietary\": \"verduras\",\n            \"description\": \"lorem ipsum dolor\",\n            \"ingredient_list\": \"ingredientes\",\n            \"start_date\": \"2020-11-27T05:00:00.000Z\",\n            \"class_duration\": \"00:00:15\",\n            \"ticket_count\": 25,\n            \"ticket_price\": 60,\n            \"notified\": \"1\",\n            \"mc_photo\": \"https://pinchef.s3.amazonaws.com/master_class/7/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"link\": null,\n            \"id_chef\": 1,\n            \"created\": \"2020-12-09T06:56:42.000Z\",\n            \"updated\": \"2020-12-09T06:56:42.000Z\",\n            \"id_profile\": 32,\n            \"position\": \"senior\",\n            \"chef_photo\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"id_user\": 2,\n            \"name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"likesQty\": 1,\n            \"shareQty\": 0,\n            \"commentQty\": 0\n        },\n        {\n            \"id_master_class\": 6,\n            \"title\": \"master-title2\",\n            \"cousine\": \"gourmet2\",\n            \"dietary\": \"verduras\",\n            \"description\": \"lorem ipsum dolor\",\n            \"ingredient_list\": \"ingredientes\",\n            \"start_date\": \"2020-11-27T05:00:00.000Z\",\n            \"class_duration\": \"00:00:15\",\n            \"ticket_count\": 25,\n            \"ticket_price\": 60,\n            \"notified\": \"1\",\n            \"mc_photo\": null,\n            \"link\": null,\n            \"id_chef\": 1,\n            \"created\": \"2020-12-09T06:55:42.000Z\",\n            \"updated\": \"2020-12-09T06:55:42.000Z\",\n            \"id_profile\": 32,\n            \"position\": \"senior\",\n            \"chef_photo\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"id_user\": 2,\n            \"name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"likesQty\": 0,\n            \"shareQty\": 0,\n            \"commentQty\": 0\n        },\n        {\n            \"id_master_class\": 5,\n            \"title\": \"master-title2\",\n            \"cousine\": \"gourmet2\",\n            \"dietary\": \"verduras\",\n            \"description\": \"lorem ipsum dolor\",\n            \"ingredient_list\": \"ingredientes\",\n            \"start_date\": \"2020-11-27T05:00:00.000Z\",\n            \"class_duration\": \"00:00:15\",\n            \"ticket_count\": 25,\n            \"ticket_price\": 60,\n            \"notified\": \"1\",\n            \"mc_photo\": \"https://pinchef.s3.amazonaws.com/master_class/5/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"link\": null,\n            \"id_chef\": 1,\n            \"created\": \"2020-12-09T05:34:30.000Z\",\n            \"updated\": \"2020-12-09T05:34:30.000Z\",\n            \"id_profile\": 32,\n            \"position\": \"senior\",\n            \"chef_photo\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\",\n            \"id_user\": 2,\n            \"name\": \"John\",\n            \"lastname\": \"Doe\",\n            \"likesQty\": 0,\n            \"shareQty\": 0,\n            \"commentQty\": 0\n        }\n    ]\n}",
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
    "filename": "src/app/api/controllers/masterClassController.js",
    "groupTitle": "Master_Class",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/master_clase/getAll/"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/master_clase/update/:id_masterClass",
    "title": "Update Master Class",
    "version": "0.0.1",
    "group": "Master_Class",
    "name": "UpdateMasterClass",
    "description": "<p>Update Master Class</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cousine",
            "description": "<p>cousine</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dietary",
            "description": "<p>dietary</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "link",
            "description": "<p>link</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ingredient_list",
            "description": "<p>ingredient list</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "start_date",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "class_duration",
            "description": "<p>class duration</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "ticket_count",
            "description": "<p>ticket count</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "ticket_price",
            "description": "<p>ticket price</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "notified",
            "description": "<p>notified</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>picture (is optional)</p>"
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
    "filename": "src/app/api/controllers/masterClassController.js",
    "groupTitle": "Master_Class",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/master_clase/update/:id_masterClass"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/profile/upload/picture_chef/:id_chef",
    "title": "Upload chef photo",
    "version": "0.0.1",
    "group": "Profile",
    "name": "uploadChefPhoto",
    "description": "<p>Upload chef photo</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>Photo file</p>"
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
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"ok\",\n    \"location\": \"https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\"\n}",
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
        "url": "http://localhost:8001/api/profile/upload/picture_chef/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/profile/upload/picture_profile/:id_profile",
    "title": "Upload profile photo",
    "version": "0.0.1",
    "group": "Profile",
    "name": "uploadProfilePhoto",
    "description": "<p>Upload profile photo</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>Photo file</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"ok\",\n    \"location\": \"https://pinchef.s3.amazonaws.com/profile/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg\"\n}",
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
        "url": "http://localhost:8001/api/profile/upload/picture_profile/:id_profile"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/review/create/:id_chef",
    "title": "Create review",
    "version": "0.0.1",
    "group": "Review",
    "name": "CreateReview",
    "description": "<p>Create review</p>",
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
            "field": "raiting",
            "description": "<p>Raiting</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "followers",
            "description": "<p>Followers</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "share",
            "description": "<p>Share</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "likes",
            "description": "<p>Likes</p>"
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
    "filename": "src/app/api/controllers/reviewController.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/review/create/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/review/delete/:id",
    "title": "Delete Review",
    "version": "0.0.1",
    "group": "Review",
    "name": "DeleteReview",
    "description": "<p>Delete review</p>",
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
    "filename": "src/app/api/controllers/reviewController.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/review/delete/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/review/detail/:id_chef",
    "title": "Detail Review",
    "version": "0.0.1",
    "group": "Review",
    "name": "DetailReview",
    "description": "<p>Get review</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"status\": true,\n    \"message\": \"Successful Operation\",\n    \"data\": [\n        {\n            \"id_chef_reviews\": 4,\n            \"name\": \"mmhh\",\n            \"description\": \"mmhh\",\n            \"raiting\": \"5\",\n            \"followers\": \"5\",\n            \"share\": \"5\",\n            \"likes\": 5,\n            \"created\": \"2020-11-27T19:44:28.000Z\",\n            \"updated\": \"2020-12-17T04:35:32.000Z\",\n            \"chef_id_chef\": 1\n        }\n    ]\n}",
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
    "filename": "src/app/api/controllers/reviewController.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/review/detail/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/review/update/:id_chef",
    "title": "Update Review",
    "version": "0.0.1",
    "group": "Review",
    "name": "UpdateReview",
    "description": "<p>Update review</p>",
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
            "field": "raiting",
            "description": "<p>Raiting</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "followers",
            "description": "<p>Followers</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "share",
            "description": "<p>Share</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "likes",
            "description": "<p>Likes</p>"
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
    "filename": "src/app/api/controllers/reviewController.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/review/update/:id_chef"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/statusOrder/create/:id_cart_order",
    "title": "Create Status Order",
    "version": "0.0.1",
    "group": "Status_Order",
    "name": "Create_statusOrder_Order",
    "description": "<p>Create Status Order</p>",
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
            "field": "type_payment",
            "description": "<p>Type payment</p>"
          },
          {
            "group": "Parameter",
            "type": "sting",
            "optional": false,
            "field": "status",
            "description": "<p>Status</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Status Order crated successfully\"\n}",
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
    "filename": "src/app/api/controllers/statusOrderController.js",
    "groupTitle": "Status_Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/statusOrder/create/:id_cart_order"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/statusOrder/delete/:id_status_order",
    "title": "Delete Status Order",
    "version": "0.0.1",
    "group": "Status_Order",
    "name": "Delete_Status_Order",
    "description": "<p>Delete Status Order</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n \"message\": \"Status Order deleted successfully\"\n}",
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
    "filename": "src/app/api/controllers/statusOrderController.js",
    "groupTitle": "Status_Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/statusOrder/delete/:id_status_order"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/statusOrder/detail/:id",
    "title": "Status Order Detail",
    "version": "0.0.1",
    "group": "Status_Order",
    "name": "Status_Order_Detail",
    "description": "<p>Status Order Detail</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"id_status_order\": 6,\n        \"name\": \"status_update\",\n        \"description\": \"ss\",\n        \"type_payment\": \"cash\",\n        \"comment\": \"Pending\",\n        \"created\": \"2020-12-08T04:49:51.000Z\",\n        \"updated\": \"2020-12-08T04:53:29.000Z\",\n        \"cart_order_id_cart_order\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": false,\n\"message\": \"status order don't exists\",\n\"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/api/controllers/statusOrderController.js",
    "groupTitle": "Status_Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/statusOrder/detail/:id"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/statusOrder/update/:id_status_order",
    "title": "Update Status Order",
    "version": "0.0.1",
    "group": "Status_Order",
    "name": "Update_Status_Order",
    "description": "<p>Update Status Order</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"status\": true,\n    \"message\": \"Status Order updated succefully\",\n    \"data\": {\n        \"data\": {\n            \"affectedRows\": 1,\n            \"insertId\": 0,\n            \"warningStatus\": 0\n        }\n    }\n}",
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
    "filename": "src/app/api/controllers/statusOrderController.js",
    "groupTitle": "Status_Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/statusOrder/update/:id_status_order"
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
          "content": "{ \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwODE3ODY3OCwiZXhwIjoxNjM5NzE0Njc4fQ.Qp7sSJJmoGIPPDbUZL5SG4jVQATJ_epclxNfe1sggRk\" }",
          "type": "String"
        }
      ]
    }
  }
] });
