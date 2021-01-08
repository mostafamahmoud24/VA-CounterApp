import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  RESET_MODAL,
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

export function resetModal() {
  return {
    type: RESET_MODAL,
  };
}

export function sliderNum(payload) {
  return {
    type: SET_SLIDER_COUNT,
    payload: payload,
  };
}
