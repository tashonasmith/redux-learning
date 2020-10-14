// import store from "./store"
// import { bugAdded, bugRemoved, bugResolved } from "./actionCreators"

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Changed!", store.getState());
// })

// unsubscribe();

// store.dispatch(bugAdded("Bug1"));
// // store.dispatch(bugRemoved(1));
// store.dispatch(bugResolved(1));



// console.log(store) 
// console.log(store.getState()); //to view state of store


import store from './store'
import * as actions from "./actionCreators"

store.subscribe(() => {
    console.log("Store changed!")
})

store.dispatch(actions.bugAdded("Bug 1"))
store.dispatch(actions.bugAdded("Bug 2"))
store.dispatch(actions.bugAdded("Bug 3"))
store.dispatch(actions.bugResolved(1))

console.log(store.getState())
