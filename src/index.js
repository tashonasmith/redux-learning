import store from "./store"
import { bugAdded, bugRemoved, bugResolved } from "./actionCreators"

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
})

unsubscribe();

store.dispatch(bugAdded("Bug1"));
// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1));



console.log(store) 
console.log(store.getState()); //to view state of store



