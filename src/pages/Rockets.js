import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Displayer from '../components/Displayer';
import { getRockets } from '../redux/api/api';

function Rockets() {
  const [rocketsDisplay, setRocketsDisplay] = useState(null);
  const [calledRocket, setCalledRocket] = useState(null);
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!calledRocket && rockets.length === 0) {
      setCalledRocket(true);
      dispatch(getRockets());
    }
    if (rockets !== undefined && rockets !== rocketsDisplay) {
      setRocketsDisplay(rockets);
    }
  });

  const layout = (
    <div className="rockets">
      <Displayer target="rockets" rockets={rocketsDisplay} />
    </div>
  );
  return layout;
}

export default Rockets;
