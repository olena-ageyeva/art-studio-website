import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import reducer from './state/reducer';

import { BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; 
import { fetchImages } from './state/actions/fetchArtworks'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch({ type: '@@init' });
store.dispatch(fetchImages());

    ReactDOM.render(      
       <Provider store={store}>
        <Router>
            <App/>          
        </Router>
        </Provider>
        ,
      document.getElementById('root')
    );
  

  
  
  serviceWorker.unregister();
