<!-- # Instructions for developers

# this is real state application for Afghanistan

## we have 3 rules in the applicaiton
# ADMIN/ AGENT/ TENANT
## ADMIN -> have access to all the futures of the application
## AGENT -> create update delete properties message with users
## TENANT -> browse properties message with agents 

Users can search for property 
but for more functionality they have to register
register -> login -> becomeAgent -> postProperty and so on

## REGISTER ROUTE
/api/v1/users/register
Client
  |
  | POST /register
  v
Route -> router.post('/register', registerUser)
  |
Controller -> registerUser
  |-- Check request body
  |-- Validate with Joi
  |-- Call registerUserService
  |
Service -> registerUserService
  |-- Check if user exists
  |-- Hash password
  |-- Save to DB
  |
Controller -> send response
  |
Client <- 201 Created / Error

## LOGIT ROUTE
/api/v1/users/login
Client
  |
  | POST /login
  v
Route -> router.post('/login', loginUser)
  |
Controller -> loginUser
  |-- Check if request body exists
  |-- Validate request body with loginSchemaValidation
  |-- Call loginUserService
  |
Service -> loginUserService
  |-- Find user by phoneNumber1
  |-- Compare password with bcrypt
  |-- Generate JWT token
  |-- Remove password from user object
  |
Controller -> send response
  |-- res.status(200).json({ message, data: {user, token} })
  |
Client <- 200 OK / Error

## GET PROFILE OR /ME
/api/v1/users/me
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
Client <- 200 OK / Error


## UPDATE PROFILE OR /ME
api/v1/users/me

 -->

──────────────────────────────
1️⃣ User Registration
──────────────────────────────
Client
  |
  | POST /register
  | Body: { name, lastName, phoneNumber1, email?, password }
  v
Route -> router.post('/register', registerUser)
  |
Controller -> registerUser
  |-- Check request body exists
  |-- Validate body with Joi
  |-- Call registerUserService(userData)
  |
Service -> registerUserService
  |-- Check if user exists (phone/email/username)
  |-- Hash password
  |-- Save new user in DB
  |
Controller -> send response
  |-- res.status(201).json({ message, data: user })
  |
Client <- 201 Created / Error (400, 409, 500)

──────────────────────────────
2️⃣ User Login
──────────────────────────────
Client
  |
  | POST /login
  | Body: { phoneNumber1, password }
  v
Route -> router.post('/login', loginUser)
  |
Controller -> loginUser
  |-- Check request body exists
  |-- Validate body with Joi
  |-- Call loginUserService(loginData)
  |
Service -> loginUserService
  |-- Find user by phoneNumber1
  |-- Compare password with bcrypt
  |-- Generate JWT token
  |-- Return { user, token }
  |
Controller -> send response
  |-- res.status(200).json({ message, data: { user, token } })
  |
Client <- 200 OK / Error (400, 401, 500)

──────────────────────────────
3️⃣ Get Logged-in User Profile
──────────────────────────────
Client
  |
  | GET /me
  | Header: Authorization: Bearer <token>
  v
Route -> router.get('/me', isAuthenticateUser, getUserProfile)
  |
Middleware -> isAuthenticateUser
  |-- Verify token, attach req.user
  |
Controller -> getUserProfile
  |-- Get userId from req.user
  |-- Call getUserProfileService(userId)
  |
Service -> getUserProfileService
  |-- Find user by userId
  |-- Return user
  |
Controller -> send response
  |-- res.status(200).json({ message, data: user })
  |
Client <- 200 OK / Error (401, 400, 404, 500)

──────────────────────────────
4️⃣ Update Logged-in User Profile
──────────────────────────────
Client
  |
  | PUT /me
  | Header: Authorization: Bearer <token>
  | Body: { fields to update }
  v
Route -> router.put('/me', isAuthenticateUser, updateUserProfile)
  |
Controller -> updateUserProfile
  |-- Get userId from req.user
  |-- Call updateUserProfileService(userId, updateData)
  |
Service -> updateUserProfileService
  |-- Find user by userId and update fields
  |-- Return updated user
  |
Controller -> send response
  |-- res.status(200).json({ message, data: updatedUser })
  |
Client <- 200 OK / Error (401, 400, 500)

──────────────────────────────
5️⃣ Get All Users (Admin)
──────────────────────────────
Client
  |
  | GET /user
  | Header: Authorization: Bearer <token>
  v
Route -> router.get('/user', isAuthenticateUser, getAllUsers)
  |
Controller -> getAllUsers
  |-- Call getAllUsersServices()
  |-- Return array of users → 404 if none
  |
Service -> getAllUsersServices
  |-- UserModel.find()
  |
Controller -> send response
  |-- res.status(200).json({ message, data: allUsers })
  |
Client <- 200 OK / Error (401, 404, 500)

──────────────────────────────
6️⃣ Get User by ID (Admin)
──────────────────────────────
Client
  |
  | GET /user/:userId
  | Header: Authorization: Bearer <token>
  v
Route -> router.get('/user/:userId', isAuthenticateUser, getUserById)
  |
Controller -> getUserById
  |-- Extract userId
  |-- Call getUserByIdService(userId)
  |
Service -> getUserByIdService
  |-- UserModel.findById(userId)
  |
Controller -> send response
  |-- res.status(200).json({ message, data: user })
  |
Client <- 200 OK / Error (401, 404, 500)

──────────────────────────────
7️⃣ Delete User by ID (Admin)
──────────────────────────────
Client
  |
  | DELETE /user/:userId
  | Header: Authorization: Bearer <token>
  v
Route -> router.delete('/user/:userId', isAuthenticateUser, getUserByIdAndDelete)
  |
Controller -> getUserByIdAndDelete
  |-- Extract userId
  |-- Call getUserByIdAndDeleteService(userId)
  |
Service -> getUserByIdAndDeleteService
  |-- UserModel.findByIdAndDelete(userId)
  |
Controller -> send response
  |-- res.status(200).json({ message, data: true })
  |
Client <- 200 OK / Error (401, 404, 500)

──────────────────────────────
8️⃣ Become Agent (Tenant Request)
──────────────────────────────
Client
  |
  | PUT /become-agent
  | Header: Authorization: Bearer <token>
  | Body: { user info + agentInfo }
  v
Route -> router.put('/become-agent', isAuthenticateUser, becomeAgent)
  |
Controller -> becomeAgent
  |-- Call updateUserToAgentProfileService(userId, agentData)
  |
Service -> updateUserToAgentProfileService
  |-- Validate required fields
  |-- Check user already requested → 400
  |-- Update user: hasRequestedAgent=true, agentRequestStatus='pending', agentInfo
  |-- Save record in WantToBecomeAgent collection
  |-- Return updated user
  |
Controller -> send response
  |-- res.status(200).json({ message, data: updatedAgentStatus })
  |
Client <- 200 OK / Error (400, 404, 500)

──────────────────────────────
9️⃣ Get Pending Agent Requests (Admin)
──────────────────────────────
Client
  |
  | GET /want-to-become-agent
  | Header: Authorization: Bearer <token>
  v
Route -> router.get('/want-to-become-agent', isAuthenticateUser, pendingAgentRequest)
  |
Controller -> pendingAgentRequest
  |-- Call pendingAgentRequestServices()
  |
Service -> pendingAgentRequestServices
  |-- WantToBecomeAgentModel.find().populate('userId', 'name phoneNumber1 agentInfo agentRequestStatus')
  |
Controller -> send response
  |-- res.status(200).json({ message, data: pendingAgents })
  |
Client <- 200 OK / Error (401, 404, 500)

──────────────────────────────
🔟 Accept Tenant → Agent Request (Admin)
──────────────────────────────
Client
  |
  | GET /tenant-to-agent/:userId
  | Header: Authorization: Bearer <token>
  v
Route -> router.get('/tenant-to-agent/:userId', isAuthenticateUser, tenantToAgentAcceptController)
  |
Controller -> tenantToAgentAcceptController
  |-- Call tenantToAgentAcceptService(userId)
  |
Service -> tenantToAgentAcceptService
  |-- Find user by userId
  |-- Update role='agent', agentRequestStatus='approved'
  |-- Save updated user
  |
Controller -> send response
  |-- res.status(200).json({ message, data: acceptedAgent })
  |
Client <- 200 OK / Error (401, 404, 500)


Unified Possible Errors
Step	Error	HTTP Code
Middleware	Missing/malformed token	401
Controller	Missing required fields / params	400 / 404
Service	User not found / already exists / already requested agent	400 / 404 / 409
Service	DB error / server failure	500
