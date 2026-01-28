1️⃣ User Registration
---------------------
Client
  |
  | POST /register
  | Body: { name, lastName, phoneNumber1, email?, password }
  v
Route -> router.post('/register', registerUser)
  |
Controller -> registerUser
  |-- Check request body exists
  |-- Validate request body with registerationSchemaValidation
  |-- Call registerUserService(userData)
  |
Service -> registerUserService
  |-- Check if user already exists (phone/email/username)
  |-- Hash password with bcrypt
  |-- Create and save new user in DB
  |
Controller -> send response
  |-- res.status(201).json({ message, data: user })
  |
Client <- 201 Created / Error (400, 409, 500)

-------------------------------------------------

2️⃣ User Login
--------------
Client
  |
  | POST /login
  | Body: { phoneNumber1, password }
  v
Route -> router.post('/login', loginUser)
  |
Controller -> loginUser
  |-- Check request body exists
  |-- Validate request body with loginSchemaValidation
  |-- Call loginUserService(loginData)
  |
Service -> loginUserService
  |-- Find user by phoneNumber1
  |-- Compare password with bcrypt
  |-- Generate JWT token
  |-- Remove password from user object
  |
Controller -> send response
  |-- res.status(200).json({ message, data: { user, token } })
  |
Client <- 200 OK / Error (400, 401, 500)

-------------------------------------------------

3️⃣ Get User Profile
--------------------
Client
  |
  | GET /me
  | Header: Authorization: Bearer <token>
  v
Route -> router.get('/me', isAuthenticateUser, getUserProfile)
  |
Middleware -> isAuthenticateUser
  |-- Check Authorization header exists and starts with 'Bearer '
  |-- Extract token
  |-- Verify token using verifyToken()
  |-- Attach decoded user info to req.user
  |-- Call next()
  |
Controller -> getUserProfile
  |-- Get userId from req.user
  |-- Call getUserProfileService(userId)
  |
Service -> getUserProfileService
  |-- Find user in DB by userId
  |-- Return user object
  |
Controller -> send response
  |-- res.status(200).json({ message, data: user })
  |
Client <- 200 OK / Error (401, 400, 404, 500)

-------------------------------------------------

4️⃣ Update User Profile
-----------------------
Client
  |
  | PUT /me
  | Header: Authorization: Bearer <token>
  | Body: { fields to update }
  v
Route -> router.put('/me', isAuthenticateUser, updateUserProfile)
  |
Middleware -> isAuthenticateUser
  |-- Check Authorization header exists and starts with 'Bearer '
  |-- Extract token
  |-- Verify token using verifyToken()
  |-- Attach decoded user info to req.user
  |-- Call next()
  |
Controller -> updateUserProfile
  |-- Get userId from req.user
  |-- Get updateData from req.body
  |-- Call updateUserProfileService(userId, updateData)
  |
Service -> updateUserProfileService
  |-- Find user by userId and update fields with updateData
  |-- Return updated user object
  |
Controller -> send response
  |-- res.status(200).json({ message, data: updatedUser })
  |
Client <- 200 OK / Error (401, 400, 500)

User Routes - Possible Errors
Route	Possible Errors
POST /register	400 (validation/body missing), 409 (user exists), 500 (server error)
POST /login	400 (validation/body missing), 401 (invalid login), 500 (server error)
GET /me	401 (token missing/invalid), 400 (userId missing), 404 (user not found), 500 (server error)
PUT /me	401 (token missing/invalid), 400 (token missing), 500 (update failed)
