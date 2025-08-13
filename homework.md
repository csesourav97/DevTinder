- Create a repo
- Initialize the repo
- node_modules, package-lock.json, package.json
- Install express
- Create a server
- Listen to port 5555
- Write request handler for /test , /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Differences between caret and tilde (^ & ~)

- Initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
-Play with routes and route extensions ex. /hello, /,/hello/2,/xyz
-Order of the routes matter a lot
-Install postman app and make a workspace/collection > Test Api call
-Write logic to GET,POST,PATCH,DELETE Api and test them on postman
-Explore routing and use of ?, +, (), * in the routes.
-Use of regex in routes /a/, /.*fly$/
-Reading the query params in the routes
-reading the dynamic routes

-Multiple route handlers - play with the code
-next()
-next function and errors along with res.send()
-app.use("/route", rH, [rH2, rH3] , rH4 , rh5)
-What is a middleware? why do we need this?
-How express JS handles requests behind the scenes.
-Difference app.use and app.all
-Write a dummy auth middleware for admin
-Write a dummy auth middleware for all user routes , except /user/login
-Error handling using app.use("/"(err,req,res,next) = {});

-Create a free cluster on MongoDB official website (Mongo Atlas)
-Install Mongoose Library
-Connect your application to the database "Connection-url"/devTinder
-call the connectDB function and connect to the dataBase before starting application on port 7777.
-Create a userSchema and user Model
-Create POST /signup API to add data to the database
-Push some documents using API calls from postman
-Error handling using try , catch

-JS Object vs JSON (difference)
-Add the express.json middleware to your app
-Make your /signup API dynamic to receive data from the end user
-User.findOne with duplicate email ids, which object returned
API- GET user by email
-API -Feed API - GET/feed - get all the users from the database
-API - Get user by ID 
-Create a delete user API
-Difference between PATCH and PUT
API- upadate a user
-Explore the mongoose documentation for Model methods
-What are options in a Model.findOneAndUpdate method, explore more about it.
-API -update the user with email ID

-Explore schematype options from the documentation
-Add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - PUT all appropiate validations on each field in Schema
- add timestams to  the userSchema
- Add API level validation on patch request and Signup post API
- Data Sanitizing - Add Validation for each field
- Install validator
- Explore validator library function and use validator funcs for password, email, photoUrl
- NEVER TRUST req.body

- validate data in signup APi
- Install bcrypt package
- Create passwordHash using bcrypt.hash and save the user with encreapted password
- create login API
- compare passwords and throw errors if email and password are invalid

- install cookie-parser
- just send a dummy cookie to user
- create GET /profile Api to check if you get the cookie back
- install jsonwebtoken
- In login API, after email and password validation create a JWT token and send it to user in cookie
- read the cookie inside your profile APi and find the logged in user
- userAuth middleware
- Add the userAuth middleware in profile API and a new sendConnectionRequest Api
- set the expiry of JWT token and  cookies to 7 days. 
- create userSchema method to getJWT().
- create userSchema method to comparePassword(passwordInputByUser)

- Explore tinder APIs
- create a list of all API you can think of in devTinder
- Group multiple routes under respective routers
- read documentation for express.Router
- craete routes folder for managing auth,profile,request routers.
- create authRouter, profileRouter, requestRouter
- Import these router in app.js
- create POST /logout APi
- create PATCH /profile/edit API
- create PATCH /profile/password API => forgot password API
- Make sure you validate all data in every POST, PATCH APIs.

- create ConnectionRequest Schema
- send connection request api
- proper validation of data
- Think about all corner case
- $or query and $and query in mongoose -
- schema.pre("save") function.
- Read more about indexes in MongoDB
- Why do we need index in DB?
- What is the advantages and disadvantages of creating index?
- Read this article about compound indexes- 
- ALWAYS THINK ABOUT CORNER CASES


- Write code with proper validation for POST /request/review/:status/:requestId
- Thought process - POST vs GET
- Read about ref and populate -
- create GET /user/requests/received with all the checks
- create GET / user/connections

- Logic for GET /feed API
- Explore the $nin, $and ,$ne and other query operator  
- pagination

NOTEs:

/feed?page=1&limit=10 ==> 1-10 ==> .skip(0) & .limit(10)

/feed?page=2&limit=10 ==> 11-20 ==> .skip(10) & .limit(10)

/feed?page=3&limit=10 ==> 21-30 ==> .skip(20) & .limit(10)

/feed?page=4&limit=10 ==> 31-40 ==> .skip(30) & .limit(10)

skip  = (page-1) * limit


