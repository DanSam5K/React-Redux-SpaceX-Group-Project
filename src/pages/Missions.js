import React, { useEffect } from 'react';

function Missions(props) {
  console.log(props);
  const { missions, call } = props;

  useEffect(() => {
    call();
  });

  const layout = (
    <div className="content">
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.map((m) => (
          <tr key={m.mission_name}>
            <td className="mission-name">{m.mission_name}</td>
            <td className="mission-description">{m.description}</td>
            <td className="mission-status">registered</td>
            <td className="mission-action"><button type="button">Join Mission</button></td>
          </tr>
        ))}

      </table>
    </div>
  );

  return layout;
}

export default Missions;
