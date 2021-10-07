import * as actions from './missionActions';
import { missionBaseURL } from '../apis';

export const toggleMission = (mission) => ({
  type: actions.JOIN_MISSION,
  payload: mission,
});

export const fetchMissions = async (dispatch) => {
  const fetchMissions = await fetch(`${missionBaseURL}`);
  const returnList = await fetchMissions.json();
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
    type: actions.ADD_MISSION,
    payload: missions,
  });
};
