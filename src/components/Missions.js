import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Table, Container } from 'react-bootstrap';
import { fetchMissions } from '../redux/missions/missionActionCreator';
import Mission from './Mission';

let initialize = true;
const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialize) {
      dispatch(fetchMissions());
      initialize = false;
    }
  }, []);

  return (
    <Container fluid className="table-responsive-sm">
      <Table className="my-3 table-bordered table-striped">
        <thead>
          <tr>
            <td>
              <b>Mission</b>
            </td>
            <td>
              <b>Description</b>
            </td>
            <td>
              <b>Status</b>
            </td>
            <td />
          </tr>
        </thead>
        <tbody>
          <Mission />
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
