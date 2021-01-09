import {
  incrementNum,
  decrementNum,
  resetNum,
  openModal,
  resetModal,
  sliderNum,
} from "../actions/counterActions";

import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  RESET_MODAL,
  OPEN_MODAL,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

test("Increment counter action creator", () => {
  let res = incrementNum();
  expect(res).toEqual({
    type: INCREMENT_NUM,
  });
});

test("Decrement counter action creator", () => {
  let res = decrementNum();
  expect(res).toEqual({
    type: DECREMENT_NUM,
  });
});

test("Reset counter action creator", () => {
  let res = resetNum();
  expect(res).toEqual({
    type: RESET,
  });
});

test("Slider counter action creator", () => {
  let res = sliderNum(1);
  expect(res).toEqual({
    type: SET_SLIDER_COUNT,
    payload: 1,
  });
});

test("Open modal action creator", () => {
  let res = openModal();
  expect(res).toEqual({
    type: OPEN_MODAL,
  });
});

test("Reset modal action creator", () => {
  let res = resetModal();
  expect(res).toEqual({
    type: RESET_MODAL,
  });
});
