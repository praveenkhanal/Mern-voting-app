import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPoll } from '../store/actions';

class CreatePoll extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: '',
      options: ['', '']
    };
    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  addAnswer(){
    this.setState({options: [...this.state.options, '']});
  }
  render () {
    return <form>
      <input />
      <button type='button' onClick={this.addAnswer}>Add options</button>
      <button type='submit'>Submit</button>
    </form>;
  }

} 

export default connect(
  () => ({}),
  { createPoll }
)(CreatePoll);
