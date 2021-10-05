/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import RocketCard from './RocketCard';

function Displayer(props) {
  const { rockets } = props;
  const [rocketsDisplay, setRocketsDisplay] = useState(null);

  useEffect(() => {
    if (rockets) {
      if (rockets !== rocketsDisplay) {
        setRocketsDisplay(rockets);
      }
    }
  });
  if (rocketsDisplay) {
    return (
      <div className="rockets-displayer">
        {rocketsDisplay.map((r) => (
          <RocketCard key={r.title} data={r} />
        ))}
      </div>
    );
  }
  return <h3>Empty collection</h3>;
}
export default Displayer;
