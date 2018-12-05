import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

import { getPolls, getUserPolls, deletePollAPI } from '../store/actions';

class Polls extends Component {
  constructor(props) { 
    super(props); 
    this.handleSelect = this.handleSelect.bind(this);
    // this.deletePoll= this.deletePoll.bind(this);
    }
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
    }

    handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
    }

    // deletePoll(id){
    // const { polls } = this.props;
    // polls.splice(`/poll/${id}`);
    // }

    // handleDelete(id) {
    //   const { polls}= this.props.match.params
    //   const { history } = this.props
    //   this.props.deletePollAPI(polls, history);
    // } 

    // deletePollAPI(data) {
    //   axios.get('http://localhost:4000/api/'+this.props.data)
    //   // axios.get('mongodb://localhost/vote'+this.props.data)
    //       .then(console.log('Deleted'))
    //       .catch(err => console.log(err))
    // }

    handleDeletePoll(pollId) {
      this.props.deletePollAPI(pollId);
    }

    render() {
      const { auth, getPolls, getUserPolls } = this.props;
      const polls = this.props.polls.map(poll => (
        <li key={poll._id}>
          {poll.question}
         <button className='button' onClick={() => this.handleSelect(poll._id)} key={poll._id}>View</button>
         <button className='button' onClick={() => this.handleDeletePoll(poll._id)} key={poll._id + 1}>Delete</button>
         {/* <button className='button' onClick={() => this.handle.deletePoll(poll._id)} key={poll._id + 1}>Delete</button> */}
         
        </li>
      ));
      return(
      <Fragment>
        {auth.isAuthenticated && (
          <div className='button_center'>
            <button className='button' onClick={getPolls}>All polls</button>
            <button className='button' onClick={getUserPolls}>My polls</button>
          </div>
        )}
        <ul className='polls' >{polls}</ul>
      </Fragment>
        );
      }
   }
   
  //  const mapDispatchToProps = (dispatch) => ({
  //   deletePollAPI: (...params) => dispatch(deletePollAPI)(...params)
  //   })
  
  //  const mapStateToProps = (state, ownProps) => {
  //    return {
  //      polls: state.polls
  //    }
  //  };
  //  const mapDispatchToProps = (dispatch) => {
  //    return {
  //      deletePoll: poll => dispatch(deletePoll(poll._id))
  //    }
  //  };


export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls,
    }),
    { getPolls, getUserPolls, deletePollAPI },
  )(Polls);


  