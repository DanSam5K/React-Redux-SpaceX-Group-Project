import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import { toggleMission } from '../redux/missions/missionActionCreator';
import { missions } from '../redux/missions/mission';
import { cancelReservation } from '../redux/rockets/rocketActionCreator';

const Profile = () => {
  const allMissions = useSelector(missions);
  const dispatch = useDispatch();

  const leaveMission = (e) => {
    dispatch(toggleMission({ mission_id: e.target.id }));
  };

  const reservedMissions = allMissions
    .filter((mission) => mission.reserved)
    .map((mission) => (
      <ListGroupItem
        key={mission.mission_id}
        className="d-flex align-items-center justify-content-between"
      >
        <span>
          {mission.mission_name}
          <br />
          <a href={mission.wikipedia} target="blank">
            Read more
          </a>
        </span>
        <Button
          variant="outline-danger"
          id={mission.mission_id}
          onClick={leaveMission}
        >
          Leave&nbsp;Mission
        </Button>
      </ListGroupItem>
    ));
  const rocketState = useSelector((state) => state.rocketsReducer);
  const reserveRockets = rocketState.filter((rocket) => rocket.reserved).length === 0 ? (
    <ListGroupItem> No rockets reserved </ListGroupItem>
  ) : (
    rocketState
      .filter((rocket) => rocket.reserved)
      .map((rocket) => (
        <ListGroupItem
          key={rocket.id}
          className="d-flex align-items-center justify-content-between"
        >
          <span>
            {rocket.rocket_name}
            <br />
            <a href={rocket.wikipedia} target="blank">
              Read more
            </a>
          </span>
          <Button
            variant="outline-danger"
            id={rocket.rocket}
            onClick={() => dispatch(cancelReservation(rocket.id))}
          >
            Cancel Reservation
          </Button>
        </ListGroupItem>
      ))
  );
  return (
    <Container fluid className="border-top w-100 pt-2">
      <Row>
        <Col xs={12} md={6}>
          <h2>My Missions</h2>
          <Card>
            <ListGroup>
              {reservedMissions.length > 0 ? (
                reservedMissions
              ) : (
                <ListGroupItem>No Missions Joined</ListGroupItem>
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <h2>My Rockets</h2>
          <Card>
            <ListGroup>{reserveRockets}</ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
