const baseURL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const ADD_MISSION = 'missions/ADD_MISSION';
const JOIN_OR_LEAVE_MISSION = 'missions/JOIN_OR_LEAVE_MISSION';

export const toggleMission = (mission) => ({
  type: JOIN_OR_LEAVE_MISSION,
  payload: mission,
});

export const fetchMissions = async (dispatch) => {
  const fetched = await fetch(`${baseURL}`);
  const returnList = await fetched.json();
  const missions = [];
  returnList.map((mission) =>
    missions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      wikipedia: mission.wikipedia,
    })
  );
  dispatch({
    type: ADD_MISSION,
    payload: missions,
  });
};
