import React, { Component } from 'react';
import api from '../services/api';

class App extends Component {
 async componentDidMount() {
  const result = await api.call('post', 'auth/login', {
    username: 'username',
    password: 'password'

  });
  console.log(result);
}

  render () {
    return <div>111MY REACT APP WILL ROCK FOR SURE</div>; 
  }
}


export default App;