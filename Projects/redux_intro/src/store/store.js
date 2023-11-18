import { combineReducers, createStore } from "redux";

import accountReducer from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";

// create store
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;