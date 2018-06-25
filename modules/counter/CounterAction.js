import { connect } from 'react-redux';

import * as actions from './constants';
import CounterComponent from '../../components/redux-example/CounterComponent';

const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: actions.COUNTER_INCREMENT}),
        decrement: () => dispatch({type: actions.COUNTER_DECREMENT})
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)