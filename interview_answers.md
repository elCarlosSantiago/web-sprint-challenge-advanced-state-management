# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Context API helps solve problems with prop drilling and thus scalability within applications. Although Context API is great as a communication tool it does not promote reusability within components, so It must be used thoughtfully.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? Actions are JS objects which are fired usually when the user interacts with the UI or some initial or asynchronous code has fired the actions is the 'what' in the redux pattern. Reducers are the 'how', simply put they are pure functions that take receive a previous state from the action and return a new state. The store is the container which holds the state of the application. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Redux thunk allows us to preform async operations in our redux pattern. It changes out action-creators by using dispatch as an internal (or thunk) function. Since the pattern works synchronously and async operations usually return promises this would break the sync flow. Thunk allows us to deal with the promise in the action creator.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
I have enjoyed my time with Redux, the system is quite strong and easy to debug once the boilerplating is done. I enjoy the store as the source of all truth and grasp its use in large scale applications.