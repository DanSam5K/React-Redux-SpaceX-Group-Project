import * as actions from './missionActions';

const initialState = [];

const reducer = (state = initialState, action) => {
  let newState;
  let currentMission;
  switch (action.type) {
    case actions.ADD_MISSION:
      return [...action.payload];
    case actions.JOIN_MISSION:
      currentMission = state.find(
        (mission) => mission.mission_id === action.payload.mission_id
      );
      if (currentMission && currentMission.reserved) {
        newState = state.map((mission) => {
          if (mission.mission_id !== action.payload.mission_id) return mission;
          return { ...mission, reserved: false };
        });
        return newState;
      }
      newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.mission_id) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    default:
      return state;
  }
};

export const missions = (state) => state.missionsReducer;
export default reducer;
