import api from '../../api/API';

import {
  RECEIVE_ROCKETS,
  ADD_RESERVATION,
  REMOVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_ROCKET_RESERVE,
  RECEIVE_ROCKET_RESERVE_CANCELLATION,
} from '../actions/actions';

export const receiveRockets = (rockets) => ({
  type: RECEIVE_ROCKETS,
  rockets,
});

export const getRockets = () => (dispatch) => {
  api.getRockets().then((rockets) => {
    dispatch(receiveRockets(rockets));
    return rockets;
  });
};

export const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations,
});

export const getReservations = (reservation) => (dispatch) => {
  dispatch(receiveReservations(reservation));
};

export const removeReserve = (reservation) => ({
  type: REMOVE_RESERVATION,
  reservation,
});

export const addReserve = (reservation) => ({
  type: ADD_RESERVATION,
  reservation,
});

export const receiveRocketReserve = (reservation) => ({
  type: RECEIVE_ROCKET_RESERVE,
  reservation,
});

export const receiveRocketReserveCancellation = (reservation) => ({
  type: RECEIVE_ROCKET_RESERVE_CANCELLATION,
  reservation,
});

export const addReservation = (reservation) => (dispatch) => {
  dispatch(addReserve(reservation));
  const { target } = reservation;
  if (target === 'rockets') {
    dispatch(receiveRocketReserve(reservation));
  }
};

export const removeReservation = (reservation) => (dispatch) => {
  dispatch(removeReserve(reservation));
  dispatch(receiveRocketReserveCancellation(reservation));

  const { target } = reservation;
  if (target === 'rockets') {
    dispatch(receiveRocketReserveCancellation(reservation));
  }
};
