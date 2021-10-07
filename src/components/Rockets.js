import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketActionCreator';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length > 0) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div>
      <ul>
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
