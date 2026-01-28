──────────────────────────────
1️⃣ Get All Users
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
  |-- Return all users → 404 if none
  |
Service -> getAllUsersServices
  |-- UserModel.find()
  |
Controller -> send response
  |-- res.status(200).json({ message, data: allUsers })
  |
Client <- 200 OK / Error (401, 404, 500)

──────────────────────────────
2️⃣ Get User by ID
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
3️⃣ Delete User by ID
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
4️⃣ Get Pending Agent Requests
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
  |-- WantToBecomeAgentModel.find()
  |-- Populate userId fields: name, phoneNumber1, agentInfo, agentRequestStatus
  |
Controller -> send response
  |-- res.status(200).json({ message, data: pendingAgents })
  |
Client <- 200 OK / Error (401, 404, 500)

──────────────────────────────
5️⃣ Accept Tenant → Agent Request
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
