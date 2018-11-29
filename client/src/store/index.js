import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const DEFAULT_STATE = {


  //......... verify the below code......
//   auth: { isAuthenticated: false },
//   error: { message: null },
//   polls: [],
//   currentPoll: {
//     _id: '5bf4eb7aa9a4d056316fa30',
//     options: [],
//     question: 'test_poll',

//   },
// };

//................. i need to check above code..........
  error: { message: null }
};

export const store = createStore (
  rootReducer,
  DEFAULT_STATE,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
);