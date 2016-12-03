import {Map} from 'immutable';

// Initial state
const initialState = Map({
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'CounterState/INCREMENT';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    default:
      return state;
  }
}
