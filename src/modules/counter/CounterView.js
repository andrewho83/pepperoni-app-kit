import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  PanResponder,
} from 'react-native';

import Video from 'react-native-video'

class CounterView extends React.Component {
  constructor() {
    super()

    this.player = null
    this.panResponder = {}
  }

  increment = () => {
    this.props.dispatch(CounterState.increment());
  }

  componentDidMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    })
  }

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true
  }

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = (e, gestureState) => {
    // this.setState({dragging: true})
  }

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {
    // const {initialTop, initialLeft} = this.state

    console.log(gestureState.dx, gestureState.dy);
    console.log(gestureState.vx, gestureState.vy);

    if (gestureState.vx > 0.3 && gestureState.dx > 0) {
      console.log('swipe right')
    }

    // Keep track of how far we've moved in total (dx and dy)
    // this.setState({
    //   offsetTop: gestureState.dy,
    //   offsetLeft: gestureState.dx,
    // })
  }

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    // const {initialTop, initialLeft} = this.state


    // The drag is finished. Set the initialTop and initialLeft so that
    // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
    // this.setState({
    //   dragging: false,
    //   initialTop: initialTop + gestureState.dy,
    //   initialLeft: initialLeft + gestureState.dx,
    //   offsetTop: 0,
    //   offsetLeft: 0,
    // })
  }

  render() {
    return (
      <View
        {...this.panResponder.panHandlers}
        style={styles.container}>

        <Video
          repeat
          muted
          ref={(ref) => {
            this.player = ref
          }}
          resizeMode='contain'
          source={{uri: 'https://media.kamcord.com/content/ZaTeEZsFFh9/ZaTeEZsFFh9.mp4'}}
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        />

      </View>
    )
  }
}

CounterView.propTypes = {
  counter: PropTypes.number.isRequired,
  userName: PropTypes.string,
  userProfilePhoto: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default CounterView;
