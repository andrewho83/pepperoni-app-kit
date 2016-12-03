import {connect} from 'react-redux';
import AppView from './AppView';
import { loadFeed } from './feeds/FeedState'

export default connect(
  state => ({
    isReady: state.getIn(['session', 'isReady'])
  }),
  dispatch => ({
    loadFeed(feedName) {
      dispatch(loadFeed(feedName))
    },
    dispatch
  })
)(AppView);
