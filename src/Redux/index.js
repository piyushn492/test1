
import { createStore } from "redux";

const reducer = (state = [], action) => {
    console.log(action.payload)
    switch(action.type) {
        case "initial" : return action.payload
        default: return state
    }
}

const store = createStore(
    reducer
);
export default store;