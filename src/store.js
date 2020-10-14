import { createStore } from 'redux';
import reducer from "./reducer.js";
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true })
    );
//createStore is an example of a higher order function

export default store;