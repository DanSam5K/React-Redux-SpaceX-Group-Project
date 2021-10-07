import * as actions from './rocketActions';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ROCKETS:
      return [...action.payload];
    case actions.RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    case actions.CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export const rockets = (state) => state.rockets;
export default reducer;
