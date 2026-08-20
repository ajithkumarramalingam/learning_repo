1. What is switchMap?
Answer:-
When a new request comes in, it cancels the previous one and starts fresh. Use this when only the latest result matters.
Example:- 
Search box — if user types "La", then "Lap", then "Lapt" — you only care about the result for "Lapt", not the earlier ones.

2. What is mergeMap?
Answer:-
When a new request comes in, it does NOT cancel the previous one — all requests run in parallel and return as they finish.
Example:- 
Multiple file uploads — you want all uploads to complete, not cancel each other.

3. What is HTTP and HTTPS?
Answer:-
HTTP stands for HyperText Transfer Protocol. It is the foundation of data communication on the web —
it defines how data is transferred between a browser and a server.

HTTPS is the secure version of HTTP. The 'S' stands for Secure, meaning all data transferred is
encrypted using SSL or TLS, so no one can intercept or read it in between.

4. Virtual DOM vs Real DOM ?
Virtual DOM:- 
* What it is - Actual browser DOM
* Updates - Re-renders entire DOM
* Speed - Slow
* Memory - Heavy
* Used by - Browser

Real DOM:-
* What it is - JavaScript object copy
* Updates - Updates only changed parts
* Speed - Fast
* Memory - Lightweight
* Used by - React 

5. What is Angular Signal?
Answer:-
Angular Signal is a reactive state management feature. If any update comes, it does not re-render or go
back and again to that page — it automatically updates the UI. That is the major advantage of Angular
Signals.

6. What is JWT?
Answer:-
JWT is a secure way to send user info between client and server after login. It has 3 parts: header,
payload, and signature.

7. What is Event Loop?
Answer:-
JavaScript is single-threaded. The Event Loop handles async operations like:
• setTimeout 
• API calls 
• Promises

8. What is Angular?
Answer:-
Angular is a TypeScript-based front-end framework developed by Google. It is used to build Single Page Applications (SPA). It provides features like components, dependency injection, routing, forms, and state management.

9. What is a Component?
Answer:-
A component is the basic building block of Angular. It controls a part of the UI and contains HTML, TypeScript, CSS, and business logic.

10. What is Data Binding?
Answer:-
Data binding is the communication between the component and the template.

Types:-
• Interpolation
• Property Binding
• Event Binding
• Two-Way Binding

11. Difference Between One-Way and Two-Way Binding?
Answer:-
One-way binding sends data in one direction (Component → View or View → Component).
Two-way binding allows data to flow in both directions using ngModel.

12. What is Dependency Injection?
Answer:-
Dependency Injection is a design pattern used by Angular to provide services to components without creating instances manually.

13. What is a Service?
Answer:-
Services are used to share business logic, API calls, and reusable functionality across multiple components.

14. What is a Module?
Answer:-
A module groups related components, directives, pipes, and services together.

15. What are Lifecycle Hooks?
Answer:-
Lifecycle hooks are methods that Angular calls during the creation, update, and destruction of a component.

Common hooks:
• ngOnInit
• ngOnChanges
• ngAfterViewInit
• ngOnDestroy

16. Difference Between Constructor and ngOnInit?
Answer:-
Constructor is used for dependency injection and object initialization. ngOnInit is used for component initialization and API calls after Angular creates the component.

17. Why Use ngOnDestroy?
Answer:-
To clean up subscriptions, timers, and resources to avoid memory leaks.

18. What is Lazy Loading?
Answer:-
Lazy loading loads modules only when they are needed, improving application performance and reducing initial bundle size.

19. What is Route Guard?
Answer:-
Route guards are used to protect routes and control navigation.

Common guards:-
• CanActivate
• CanDeactivate
• CanLoad

20. What is an Interceptor?
Answer:-
Interceptors allow us to modify HTTP requests and responses globally.

Uses:-
• Add JWT token
• Error handling
• Logging

21. What is RxJS?
Answer:-
RxJS is a library for handling asynchronous operations and data streams using Observables.

22. What is an Observable?
Answer:-
Observable is an object that emits data over time and allows us to subscribe to receive updates.

23. Observable vs Promise?
Answer:-

| Observable      | Promise        |
| --------------- | -------------- |
| Multiple values | Single value   |
| Cancelable      | Not cancelable |
| RxJS operators  | No operators   |

24. Subject vs BehaviorSubject?
Subject: New subscribers receive only future values.
BehaviorSubject: New subscribers receive the latest value immediately.

25. Here's a breakdown of each step:
1. index.html — The browser loads this first. It contains <app-root> tag where Angular injects the app.
2. main.ts — Angular's real starting point. It calls platformBrowserDynamic().bootstrapModule(AppModule).
3. AppModule — All imports, declarations, and providers are registered here.
4. APP_INITIALIZER — This is a special token where you can run code before the app starts. Common uses:

Load config from API
Set language/locale
Fetch user info

typescript// app.module.ts
{
  provide: APP_INITIALIZER,
  useFactory: (configService: ConfigService) => () => configService.loadConfig(),
  deps: [ConfigService],
  multi: true
}
5. AppComponent — The root component bootstraps. constructor() runs first, then ngOnInit().
6. Router — Angular Router reads the current URL and loads the matching component/module.
7. UI rendered — The view is painted and change detection begins watching for data changes.