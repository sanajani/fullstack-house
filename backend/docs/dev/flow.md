──────────────────────────────
1️⃣ User Registration
──────────────────────────────
Client
  |
  | POST /register
  | Body: { name, lastName, phoneNumber1, email?, password }
  v
Route -> router.post('/register', registerUserController)
  |
Controller -> registerUserController
  |-- Check request body exists
  |-- Validate body with Joi
  |-- Call registerUser(userData)
  |
Service -> registerUser
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
Route -> router.post('/login', loginUserController)
  |
Controller -> loginUserController
  |-- Check request body exists
  |-- Validate body with Joi
  |-- Call loginUser(loginData)
  |
Service -> loginUser
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
Route -> router.get('/me', isAuthenticateUser, getMyProfileController)
  |
Middleware -> isAuthenticateUser
  |-- Verify token, attach req.user
  |
Controller -> getMyProfileController
  |-- Get userId from req.user
  |-- Call getMyProfile(userId)
  |
Service -> getMyProfile
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
Route -> router.put('/me', isAuthenticateUser, updateMyProfileController)
  |
Controller -> updateMyProfileController
  |-- Get userId from req.user
  |-- Call updateMyProfile(userId, updateData)
  |
Service -> updateMyProfile
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
Route -> router.get('/user', isAuthenticateUser, listUsersController)
  |
Controller -> listUsersController
  |-- Call fetchAllUsers()
  |-- Return array of users → 404 if none
  |
Service -> fetchAllUsers
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
Controller -> getUserController
  |-- Extract userId
  |-- Call fetchUserById(userId)
  |
Service -> fetchUserById
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
Route -> router.delete('/user/:userId', isAuthenticateUser, deleteUserController)
  |
Controller -> deleteUserController
  |-- Extract userId
  |-- Call deleteUserById(userId)
  |
Service -> deleteUserById
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
Route -> router.put('/become-agent', isAuthenticateUser, requestAgentController)
  |
Controller -> requestAgentController
  |-- Call requestAgentRole(userId, agentData)
  |
Service -> requestAgentRole
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
Route -> router.get('/want-to-become-agent', isAuthenticateUser, listPendingAgentsController)
  |
Controller -> listPendingAgentsController
  |-- Call fetchPendingAgentRequests()
  |
Service -> fetchPendingAgentRequests
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
Route -> router.get('/tenant-to-agent/:userId', isAuthenticateUser, approveAgentRequestController)
  |
Controller -> approveAgentRequestController
  |-- Call approveAgentRole(userId)
  |
Service -> approveAgentRole
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
