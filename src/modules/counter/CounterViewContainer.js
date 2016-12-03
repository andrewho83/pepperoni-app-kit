import {connect} from 'react-redux';
import {loadFeed} from '../feeds/FeedState'
import CounterView from './CounterView';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading']),
    feeds: state.get('feeds'),
  })
)(CounterView);
