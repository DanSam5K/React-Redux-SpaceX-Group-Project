/* eslint-disable linebreak-style */
// import React, { useState, useEffect } from 'react';
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
import { missions, toggleMission } from '../redux/missions/mission';
import { rockets } from '../redux/rockets/rocket';
import { removeReservation } from '../redux/api/api';

// const Group = (data) => {
//   const items = data.data;
//   return items.map((g) => (
//     <div key={g.title} className="reservation">
//       <h5 className="reservation-item-name">{g}</h5>
//     </div>
//   ));
// };

const Profile = () => {
  // const [rocketsDisplay, setRocketsDisplay] = useState(null);
  // const reservations = useSelector((state) => state.reservationsReducer.reservations);

  // useEffect(() => {
  //   const { rockets } = reservations;
  //   if (rockets.length > 0) {
  //     setRocketsDisplay(rockets);
  //   }
  // });

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
  const reserveRockets = rockets.filter((rocket) => rocket.reserved).length === 0
    ? <ListGroupItem> No rockets reserved </ListGroupItem>
    : rockets = rockets.filter((rocket) => rocket.reserved).map((rocket) => (
      <ListGroupItem
        key={rocket.rocket_id}
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
          onClick={() => dispatch(removeReservation(rocket.rocket_id))}
        >
          Cancel Reservation
        </Button>
      </ListGroupItem>
    ));
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
            <ListGroup>
              { reserveRockets }
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
