import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { cartItems } from "./Reducers/cartItems";

const reducer = combineReducers({
  cartItems: cartItems,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(reducer, middleware);
