import FeedDocument from "./components/FeedDocument";
import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import { configureStore} from './reducers/ReducerFactory';


const store =  configureStore();


ReactDom.render(
  <Provider store={store}>
    <FeedDocument/>
  </Provider>,
  document.getElementById('feed-document')
);
