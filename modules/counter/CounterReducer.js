import * as actions from './constants';

const initialState = {count: 0};

const CounterReducer = (state =  initialState, action) => {
  switch(action.type) {
      case actions.COUNTER_INCREMENT: {
          return {
              ...state,
              count: state.count + 1
          }
      }
      case actions.COUNTER_DECREMENT: {
          return {
              ...state,
              count: state.count - 1
          }
      }
      default: {
          return state;
      }
  }
};

export default CounterReducer;