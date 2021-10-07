import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { missions } from '../redux/missions/mission';
import { toggleMission } from '../redux/missions/missionActionCreator';

const Mission = () => {
  const dispatch = useDispatch();
  const allMissions = useSelector(missions);
  const joinOrLeaveMission = (e) => {
    dispatch(toggleMission({ mission_id: e.target.id }));
  };
  return allMissions.map((mission) => (
    <tr key={mission.mission_id}>
      <td>
        <b>{mission.mission_name}</b>
      </td>
      <td>{mission.description}</td>
      <td className="px-4 align-middle">
        {mission.reserved ? (
          <Badge className="bg-info">Active Member</Badge>
        ) : (
          <Badge className="bg-secondary">NOT A MEMBER</Badge>
        )}
      </td>
      <td className="px-4 align-middle">
        {mission.reserved ? (
          <Button
            variant="outline-danger"
            id={mission.mission_id}
            onClick={joinOrLeaveMission}
          >
            Leave&nbsp;Mission
          </Button>
        ) : (
          <Button
            variant="outline-secondary"
            id={mission.mission_id}
            onClick={joinOrLeaveMission}
          >
            Join&nbsp;Mission
          </Button>
        )}
      </td>
    </tr>
  ));
};

export default Mission;
