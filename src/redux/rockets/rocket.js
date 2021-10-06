import {
  RECEIVE_ROCKETS,
  RECEIVE_ROCKET_RESERVE,
  RECEIVE_ROCKET_RESERVE_CANCELLATION,
} from '../actions/actions';

const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ROCKETS: {
      return [...action.payload];
    }
    case RECEIVE_ROCKET_RESERVE: {
      const { id } = action.reservation;
      const newRockets = [];
      const { rockets } = state;
      if (rockets) {
        if (rockets.length > 0) {
          rockets.forEach((r) => {
            if (r.rocket_id === id) {
              const rocket = { ...r, reserved: true };
              newRockets.push(rocket);
            } else {
              newRockets.push(r);
            }
          });
        }
      }
      return {
        rockets: newRockets,
      };
    }
    case RECEIVE_ROCKET_RESERVE_CANCELLATION: {
      const { id } = action.reservation;
      const newRockets = [];
      const { rockets } = state;
      if (rockets) {
        if (rockets.length > 0) {
          rockets.forEach((r) => {
            if (r.rocket_id === id) {
              const {
                // eslint-disable-next-line camelcase
                rocket_id, flickr_images, rocket_name, description,
              } = r;
              const rocket = {
                rocket_id,
                flickr_images,
                rocket_name,
                description,
              };
              newRockets.push(rocket);
            } else {
              newRockets.push(r);
            }
          });
        }
      }
      return {
        rockets: newRockets,
      };
    }
    default:
      return state;
  }
};

export const rockets = (state) => state.rocketsReducer;
export default rocketsReducer;
