import * as actions from './rocketActions';
import { rocketBaseURL } from '../apis';

export const fetchRockets = () => async (dispatch) => {
  const fetchRockets = await fetch(`${rocketBaseURL}`);
  const returnList = await fetchRockets.json();
  const rockets = [];
  returnList.map((rocket) => rockets.push({
    id: rocket.rocket_id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
    wikipedia: rocket.wikipedia,
  }));

  dispatch({
    type: actions.FETCH_ROCKETS,
    payload: rockets,
  });
};

export const reserveRocket = (payload) => ({
  type: actions.RESERVE_ROCKET,
  payload,
});

export const cancelReservation = (payload) => ({
  type: actions.CANCEL_RESERVATION,
  payload,
});
