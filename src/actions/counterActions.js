import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

export function incrementNum() {
  return {
    type: INCREMENT_NUM,
  };
}

export function decrementNum() {
  return {
    type: DECREMENT_NUM,
  };
}

export function resetNum() {
  return {
    type: RESET,
  };
}

export function sliderNum(payload) {
  return {
    type: SET_SLIDER_COUNT,
    payload: payload,
  };
}
