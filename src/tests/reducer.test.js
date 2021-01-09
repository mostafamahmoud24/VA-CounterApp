import reducer from "../reducers/counter";

import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  OPEN_MODAL,
  RESET_MODAL,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

describe("Counter reducer", () => {
  let initState;

  beforeEach(() => {
    initState = {
      counter: 0,
      slider_value: 1,
      reverseCounter: 0,
      numberOfRequests: 0,
      tempReveseCounter: 0,
      consecutiveIncrementPresses: 0,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    };
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchObject({
      counter: 0,
      slider_value: 1,
      reverseCounter: 0,
      numberOfRequests: 0,
      tempReveseCounter: 0,
      consecutiveIncrementPresses: 0,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    });
  });

  it("should increment the counter", () => {
    expect(
      reducer(initState, {
        type: INCREMENT_NUM,
      })
    ).toMatchObject({
      counter: 1,
      slider_value: 1,
      reverseCounter: 0,
      numberOfRequests: 1,
      tempReveseCounter: -1,
      consecutiveIncrementPresses: 1,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    });
  });

  it("should increment the counter if state is not initial", () => {
    let state = {
      counter: 11,
      slider_value: 1,
      reverseCounter: -10,
      numberOfRequests: 1,
      tempReveseCounter: -1,
      consecutiveIncrementPresses: 1,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    };
    expect(
      reducer(state, {
        type: INCREMENT_NUM,
      })
    ).toMatchObject({
      counter: 12,
      numberOfRequests: 2,
      reverseCounter: -10,
      slider_value: 1,
      tempReveseCounter: -2,
      consecutiveIncrementPresses: 2,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    });
  });

  it("should decrement the counter", () => {
    expect(
      reducer(initState, {
        type: DECREMENT_NUM,
      })
    ).toMatchObject({
      counter: -1,
      slider_value: 1,
      reverseCounter: 0,
      numberOfRequests: 1,
      tempReveseCounter: 1,
      consecutiveIncrementPresses: 0,
      consecutiveDecrementPresses: 1,
      modalIsOpen: false,
    });
  });

  it("should decrement the counter if state is not initial", () => {
    expect(
      reducer(
        {
          counter: -1,
          slider_value: 5,
          reverseCounter: 0,
          numberOfRequests: 1,
          tempReveseCounter: 1,
          consecutiveIncrementPresses: 0,
          consecutiveDecrementPresses: 1,
          modalIsOpen: false,
        },
        {
          type: DECREMENT_NUM,
        }
      )
    ).toMatchObject({
      counter: -6,
      slider_value: 5,
      reverseCounter: 0,
      numberOfRequests: 2,
      tempReveseCounter: 6,
      consecutiveIncrementPresses: 0,
      consecutiveDecrementPresses: 2,
      modalIsOpen: false,
    });
  });

  it("should reset the counter", () => {
    expect(
      reducer(
        {
          counter: -1,
          slider_value: 5,
          reverseCounter: 0,
          numberOfRequests: 1,
          tempReveseCounter: 1,
          consecutiveIncrementPresses: 0,
          consecutiveDecrementPresses: 1,
          modalIsOpen: false,
        },
        {
          type: RESET,
        }
      )
    ).toMatchObject({
      counter: 0,
      slider_value: 5,
      reverseCounter: 0,
      numberOfRequests: 1,
      tempReveseCounter: 0,
      consecutiveIncrementPresses: 0,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    });
  });

  it("should adjust the step size when you adjust the slider", () => {
    expect(
      reducer(initState, {
        type: SET_SLIDER_COUNT,
        payload: 50,
      })
    ).toMatchObject({
      ...initState,
      slider_value: 50,
    });
  });

  it("should change the reverse counter value when it exceeds 10 requests", () => {
    expect(
      reducer(
        {
          counter: -1,
          slider_value: 5,
          reverseCounter: 0,
          numberOfRequests: 10,
          tempReveseCounter: 1,
          consecutiveIncrementPresses: 0,
          consecutiveDecrementPresses: 1,
          modalIsOpen: false,
        },
        {
          type: INCREMENT_NUM,
        }
      )
    ).toMatchObject({
      counter: 4,
      slider_value: 5,
      reverseCounter: 1,
      numberOfRequests: 1,
      tempReveseCounter: -4,
      consecutiveIncrementPresses: 1,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    });
  });

  it("should set modalIsOpen to true when increment is presses an odd number of times followed by decrement the same number of times plus one", () => {
    expect(
      reducer(
        {
          counter: 3,
          slider_value: 1,
          reverseCounter: 0,
          numberOfRequests: 7,
          tempReveseCounter: -4,
          consecutiveIncrementPresses: 3,
          consecutiveDecrementPresses: 4,
          modalIsOpen: false,
        },
        {
          type: OPEN_MODAL,
        }
      )
    ).toMatchObject({
      counter: 3,
      slider_value: 1,
      reverseCounter: 0,
      numberOfRequests: 7,
      tempReveseCounter: -4,
      consecutiveIncrementPresses: 3,
      consecutiveDecrementPresses: 4,
      modalIsOpen: true,
    });
  });

  it("should reset modalIsOpen to false when closing the modal", () => {
    expect(
      reducer(
        {
          counter: 3,
          slider_value: 1,
          reverseCounter: 0,
          numberOfRequests: 7,
          tempReveseCounter: -4,
          consecutiveIncrementPresses: 3,
          consecutiveDecrementPresses: 4,
          modalIsOpen: true,
        },
        {
          type: RESET_MODAL,
        }
      )
    ).toMatchObject({
      counter: 3,
      slider_value: 1,
      reverseCounter: 0,
      numberOfRequests: 7,
      tempReveseCounter: -4,
      consecutiveIncrementPresses: 0,
      consecutiveDecrementPresses: 0,
      modalIsOpen: false,
    });
  });
});
