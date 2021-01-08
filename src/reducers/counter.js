import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  RESET_MODAL,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

export default function reducer(
  state = {
    counter: 0,
    slider_value: 1,
    reverseCounter: 0,
    numberOfRequests: 0,
    tempReveseCounter: 0,
    consecutiveIncrementPresses: 0,
    consecutiveDecrementPresses: 0,
  },
  action
) {
  switch (action.type) {
    case INCREMENT_NUM:
      if (state.numberOfRequests == 10) {
        return {
          ...state,
          reverseCounter: state.tempReveseCounter,
          counter: state.counter + state.slider_value,
          numberOfRequests: 1,
          tempReveseCounter: state.tempReveseCounter - state.slider_value,
          consecutiveIncrementPresses: state.consecutiveIncrementPresses + 1,
          consecutiveDecrementPresses: 0,
        };
      } else {
        return {
          ...state,
          counter: state.counter + state.slider_value,
          numberOfRequests: state.numberOfRequests + 1,
          tempReveseCounter: state.tempReveseCounter - state.slider_value,
          consecutiveIncrementPresses: state.consecutiveIncrementPresses + 1,
          consecutiveDecrementPresses: 0,
        };
      }
    case DECREMENT_NUM:
      if (state.numberOfRequests == 10) {
        if (
          state.consecutiveIncrementPresses >= 3 &&
          state.consecutiveIncrementPresses % 2 != 0
        ) {
          return {
            ...state,
            reverseCounter: state.tempReveseCounter,
            counter: state.counter - state.slider_value,
            numberOfRequests: 1,
            tempReveseCounter: state.tempReveseCounter + state.slider_value,
            consecutiveDecrementPresses: state.consecutiveDecrementPresses + 1,
          };
        } else {
          return {
            ...state,
            reverseCounter: state.tempReveseCounter,
            counter: state.counter - state.slider_value,
            numberOfRequests: 1,
            tempReveseCounter: state.tempReveseCounter + state.slider_value,
            consecutiveIncrementPresses: 0,
          };
        }
      } else {
        if (
          state.consecutiveIncrementPresses >= 3 &&
          state.consecutiveIncrementPresses % 2 != 0
        ) {
          return {
            ...state,
            counter: state.counter - state.slider_value,
            numberOfRequests: state.numberOfRequests + 1,
            tempReveseCounter: state.tempReveseCounter + state.slider_value,
            consecutiveDecrementPresses: state.consecutiveDecrementPresses + 1,
          };
        } else {
          return {
            ...state,
            counter: state.counter - state.slider_value,
            numberOfRequests: state.numberOfRequests + 1,
            tempReveseCounter: state.tempReveseCounter + state.slider_value,
            consecutiveDecrementPresses: state.consecutiveDecrementPresses + 1,
            consecutiveIncrementPresses: 0,
          };
        }
      }
    case RESET:
      return (state = {
        ...state,
        counter: 0,
        tempReveseCounter: 0,
        reverseCounter: 0,
        consecutiveIncrementPresses: 0,
        consecutiveDecrementPresses: 0,
      });
    case RESET_MODAL:
      return (state = {
        ...state,
        consecutiveIncrementPresses: 0,
        consecutiveDecrementPresses: 0,
      });
    case SET_SLIDER_COUNT:
      return (state = {
        ...state,
        slider_value: action.payload,
      });
  }

  return state;
}
