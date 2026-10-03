1. What is NestJS?
Answer:-
NestJS is a Node.js backend framework used to build scalable and maintainable server-side applications using TypeScript.


2. What is a Module?
Answer:-
NestJS-la Module is a way to organize related functionality together.

Tanglish-la:-
Oru feature-ku related-a irukkura Controller + Service + Providers + related dependencies-ah oru place-la group pannuradhu Module.

3. What is Controller ?
Answer:-
A Controller is responsible for receiving client requests, handling incoming HTTP requests, and routing them to the appropriate endpoint or business logic.

Controller = Client request-ah receive panni, correct endpoint-ku route pannura layer.

Tanglish-la:
Frontend / Mobile / Postman request send pannumbodhu, first application-la handle pannura main layer Controller.

Controller knows HTTP. Service knows business logic.

Angular / Mobile / Postman
          ↓
       HTTP Request
          ↓
       Controller
          ↓
         DTO
          ↓
        Service
          ↓
      Repository
          ↓
       Database
          ↓
      Repository
          ↓
        Service
          ↓
      Controller
          ↓
       Response

4. What is a Service in NestJS?
Answer:-
A Service is responsible for handling the business logic of the application. Controllers typically use services 
to perform the required operations.


5. What is a Provider?
Answer:-
A Provider is a dependency that NestJS can create and manage through its dependency injection system. 
A Service is one common type of Provider.

6. What is Dependency Injection?
Answer:-
Dependency Injection is a mechanism where NestJS provides the required dependencies to a class instead of the class 
creating them manually.

7. What is a Pipe?
Answer:-
Pipe is used to transform or validate incoming data before it reaches the Controller method.

Tanglish-la:-
Client request-la irundhu data Controller method-ku pogura middle processing layer madhiri Pipe work pannum.

8. What is a Pipe in NestJS?

"A Pipe is used to validate or transform incoming request data before it reaches the controller handler."

9. What are the main uses of Pipes?

"Pipes are mainly used for validation and transformation of incoming data."

Give an example.

"For example, ParseIntPipe converts a route parameter from a string to a number, while ValidationPipe validates request 
data against DTO validation rules."

10. What is a Guard?

“A Guard determines whether a request is allowed to proceed to the controller based on authentication or authorization conditions.”

11. What is CanActivate()?

“CanActivate() is the method in a NestJS Guard that determines whether the request can proceed. It returns true to allow the request and false to deny it.”

12. Where are Guards commonly used?

“Guards are commonly used for authentication, authorization, JWT validation, and role-based access control.”

13. Why do we use Interceptors?

Common real-time use cases:

Logging
Response transformation
Execution time calculation
Add common response structure
Caching
Modify request/response
Track API performance

14. What is an Interceptor?

“An Interceptor is used to intercept the request and response lifecycle, allowing us to execute additional logic before or after the controller method.”

15. Common use cases?

“Interceptors are commonly used for logging, response transformation, performance tracking, caching, and other cross-cutting concerns.”

16. What is next.handle()?

“next.handle() continues the request execution to the next stage and eventually invokes the controller handler.”