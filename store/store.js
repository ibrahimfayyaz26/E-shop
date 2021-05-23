import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const reducer = combineReducers({
  cartItems: cartItems,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(reducer, middleware);
