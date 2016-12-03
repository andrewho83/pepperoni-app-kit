import {connect} from 'react-redux';
import {loadFeed} from '../feeds/FeedState'
import CounterView from './CounterView';

export default connect(
  state => ({
    feeds: state.get('feeds'),
    loading: state.getIn(['feeds','loading'], true)
  })
)(CounterView);
