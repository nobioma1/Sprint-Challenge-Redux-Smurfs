1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  >- Array Methods:
    - `Array.map()`, `Array.filter()`, `Array.concat()`
  >- We use `Object.assign()` to create a new object while extending the properties of another object.


2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  >- `ACTIONS`: Actions are object that contain TYPE and could contain a payload that we send (i.e. dispatch) to our central Redux store to update state.
  >- `REDUCERS`: Reducers are pure functions that takes the previous state and an action as parameters and returns an updated state.
  >- `STORE`: The store is a combination of all reducers holding the app state.

  >- `The store is a single source of truth`, because the components(UI) is updated depending on the changes in the store, and update to the store are dine by dispatching redux action which will change state within redux reducer. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  
  >- `Application state` is global, and `Component state` is local, it lives within that specific component.
  >- `Application state` is used when more than one component that is not inter-related is dependent on that state and `Component State` is used when a state is needed just by one component and its child components which receievs the state via props.

4. What is middleware?

  >- `A Middleware` function is a function that returns a function that returns a function. in Redux, it provides a way to interact with actions that have been dispatched to the store before they reach the reducer.


5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  
  >- Because on the synchronous nature of Redux, `Redux-Thunk` is a middleware library used to make asynchronous action in Redux.
  >- It changes our action-creators by making our action-creator wait for an process to be resolved before dispatching an action to the reducer.

6. Which `react-redux` method links up our `components` with our `redux store`?
  
  >- `connect()`
