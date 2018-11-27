import React, { Component } from 'react';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
//import api, {setToken} from '../services/api';
import { store } from '../store';
import {setCurrentUser, addError, setToken} from '../store/actions';


if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken))); 
  } catch(err){
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => (
<Provider store={store}>
  <div>MY REACT APP WILL ROCK FOR SURE</div>
</Provider>
  
); 



export default App;