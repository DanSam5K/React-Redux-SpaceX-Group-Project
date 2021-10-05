import React from 'react';
import Displayer from '../components/Displayer';

function Rockets(props) {
  console.log(props);
  const { rockets } = props;

  const layout = (
    <div className="rockets">
      <Displayer target="rockets" rockets={rockets} />
    </div>
  );

  return layout;
}

export default Rockets;
