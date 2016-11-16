import {combineReducers} from "redux";
import redux, {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

// get all reducers
import feedDocument from "./FeedDocumentReducer";
import feedItem from "./FeedItemReducer";



const reducers = combineReducers({
  feedDocument,
  feedItem
});


export const configureStore = (initialState = {}) => {

  // thunk adds the dispatcher to the actions calls.
  return applyMiddleware(thunk)  //<--- add "metricsMiddleware" after thunk
  (createStore)
  (reducers, initialState,
    // allows us to use Chrome dev tools to debug
    window.devToolsExtension && window.devToolsExtension()
  );
};
