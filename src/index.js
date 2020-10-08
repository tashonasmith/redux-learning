import store from "./store"
import * as actions from "./actionTypes"

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
})

unsubscribe();

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
});

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// });


console.log(store) 
console.log(store.getState()); //to view state of store



