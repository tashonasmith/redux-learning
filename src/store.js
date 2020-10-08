import { createStore } from 'redux';
import reducer from "./reducer.js";

const store = createStore(reducer);
//createStore is an example of a higher order function

export default store;