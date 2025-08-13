# DevTinder APIs

## authRouter
POST - /signup
POST - /login
POST - /logout
## profileRouter
GET - /profile/view
GET - /profile/edit
PATCH - /profile/password


## connectionRequestRouter
<!-- 
POST - /request/send/interested/:userId
POST - /request/send/ignored/:userId 
-->

POST - /request/send/:status/:userId
POST - /request/review/:status/:requestId

<!-- 
POST - /request/review/accepted/:requestId
POST - /request/review/rejected/:requestId 
-->

## userRouter

GET - /user/requests/received
GET - /user/connections
GET - /user/feed


status: ignored, interested, accepted, rejected