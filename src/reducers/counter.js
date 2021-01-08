import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

export default function reducer(
  state = {
    counter: 0,
    slider_value: 1,
    reverseCounter: 0,
    numberOfRequests: 0,
    tempReveseCounter: 0,
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
        };
      } else {
        return {
          ...state,
          counter: state.counter + state.slider_value,
          numberOfRequests: state.numberOfRequests + 1,
          tempReveseCounter: state.tempReveseCounter - state.slider_value,
        };
      }
    case DECREMENT_NUM:
      if (state.numberOfRequests == 10) {
        return {
          ...state,
          reverseCounter: state.tempReveseCounter,
          counter: state.counter - state.slider_value,
          numberOfRequests: 1,
          tempReveseCounter: state.tempReveseCounter + state.slider_value,
        };
      } else {
        return {
          ...state,
          counter: state.counter - state.slider_value,
          numberOfRequests: state.numberOfRequests + 1,
          tempReveseCounter: state.tempReveseCounter + state.slider_value,
        };
      }
    case RESET:
      return (state = {
        ...state,
        counter: 0,
        tempReveseCounter: 0,
        reverseCounter: 0,
      });
    case SET_SLIDER_COUNT:
      return (state = {
        ...state,
        slider_value: action.payload,
      });
  }

  return state;
}
