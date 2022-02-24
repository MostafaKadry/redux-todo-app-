import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import poemsReducer from "./fetchingpoems/poems.reducer";
import faveReducer from "./favepoems/fave.reducer";
import SearchReducer from "./sortpoems/sort.reducer";
const rootReducer = combineReducers({
  poemsReducer,
  faveReducer,
  SearchReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
