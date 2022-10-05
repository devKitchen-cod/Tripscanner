import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { rootReducer } from './redux/root-reducer';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)



const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>

);

