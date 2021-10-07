// import {
//   ADD_RESERVATION,
//   REMOVE_RESERVATION,
//   RECEIVE_RESERVATIONS,
// } from '../actions/actions';

// const initialState = {
//   reservations: { rockets: [] },
// };

// const reservationsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_RESERVATION: {
//       const { id, target } = action.reservation;
//       const { rockets } = state.reservations;
//       if (target === 'rockets') {
//         let present = null;
//         rockets.forEach((name) => {
//           if (name === id) {
//             present = true;
//           }
//         });
//         if (!present) {
//           rockets.push(id);
//         }
//       }

//       const reservations = { rockets };
//       return {
//         reservations,
//       };
//     }

//     case REMOVE_RESERVATION: {
//       const { id, target } = action.reservation;
//       const { rockets } = state.reservations;
//       let newRockets = [];

//       if (target === 'rockets') {
//         rockets.forEach((name) => {
//           if (name !== id) {
//             newRockets.push(name);
//           }
//         });
//       } else {
//         newRockets = rockets;
//       }

//       const reservations = { rockets: newRockets };
//       return {
//         reservations,
//       };
//     }
//     case RECEIVE_RESERVATIONS: {
//       return {
//         reservations: action.reservations,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default reservationsReducer;
