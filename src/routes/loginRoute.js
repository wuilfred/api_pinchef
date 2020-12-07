module.exports = (api) => {
  const loginController = require("../app/api/controllers/loginController");
  const authorize = require("../middleware/authorize");

  // Authenticate
   /**
   * @api {post} /login Login
   * @apiVersion 0.0.1
   * @apiGroup Auth
   * @apiName Login
   *
   * @apiDescription Authenticate
   *
   * @apiParam {string} email  Email
   * @apiParam {string} password  Password
   *
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *
   * {
   *     "email": "test2@gmail.com",
   *     "role": "User",
   *     "isVerified": 1,
   *     "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjMsImlhdCI6MTYwNjUzNjEyMiwiZXhwIjoxNjA2NjIyNTIyfQ.ik-uzjIrp6VDHDVsMBXI7V1fuektXDiohCahCD4ZVQw"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   *    "message": "Email or password is incorrect"
   * }
   */

  api.post("/login", loginController.authenticateSchema, loginController.authenticate);

   // Register
   /**
   * @api {post} /register Register
   * @apiVersion 0.0.1
   * @apiGroup Auth
   * @apiName Register
   *
   * @apiDescription Register
   * 
   * @apiParam {string} email  Email
   * @apiParam {string} password  Password
   * @apiParam {string} confirmPassword  Confirm Password
   * @apiParam {string} role User role
   * @apiParam {boolean} acceptTerms Accept terms
   *
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *
   * {
   *   "message": "Registration successful, please check your email for verification instructions"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   *  "message": "Validation error: \"confirmPassword\" must be [ref:password]"
   * }
   */
  api.post("/register", loginController.registerSchema, loginController.register);

  // Verify email
  /**
   * @api {post} /verify-email Verify email
   * @apiVersion 0.0.1
   * @apiGroup Auth
   * @apiName Verify email
   *
   * @apiDescription Verify email
   * 
   * @apiParam {string} token Verification token
   *
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *
   * {
   *   "message": "Verification successful, you can now login"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   *   "message": "Verification failed"
   * }
   */
  api.post("/verify-email", loginController.verifyEmailSchema, loginController.verifyEmail);

  // Forgot password
  /**
   * @api {post} /forgot-password Forgot Password
   * @apiVersion 0.0.1
   * @apiGroup Auth
   * @apiName Forgot Password
   *
   * @apiDescription Forgot Password
   *
   * @apiParam {string} email  Email
   *
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *
   * {
   *   "message": "Please check your email for password reset instructions"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   *  "message": "Validation error: \"email\" must be a valid email"
   * }
   */
  api.post( "/forgot-password", loginController.forgotPasswordSchema, loginController.forgotPassword);

  // Reset password
  /**
   * @api {post} /reset-password Reset Password
   * @apiVersion 0.0.1
   * @apiGroup Auth
   * @apiName Reset Password
   *
   * @apiDescription Reset Password
   *
   * @apiParam {string} token Reset Token
   * @apiParam {string} password  New Password
   * @apiParam {string} confirmPassword  Confirm New Password
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *
   * {
   *   "message": "Password reset successful, you can now login"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   *   "message": "Invalid token"
   * }
   */
  api.post("/reset-password", loginController.resetPasswordSchema, loginController.resetPassword);

  api.get("/verify-email/:token", loginController.verifyEmail);
};
