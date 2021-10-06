import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation, addReservation } from '../redux/api/api';

function rocketcard(props) {
  const dispatch = useDispatch();
  const [registered, setRegistered] = useState();

  const { data } = props;
  let target = 'rockets';
  let img;
  let title;
  let id;
  let text = null;
  if (data.reserved && registered === undefined) {
    setRegistered(true);
  }
  if (data.rocket_id) {
    // eslint-disable-next-line prefer-destructuring
    img = data.flickr_images[0];
    title = data.rocket_name;
    text = data.description;
    id = data.rocket_id;
  }

  if (data.type) {
    target = 'dragons';
  }
  const removeReserve = () => {
    const data = { target, id };
    dispatch(removeReservation(data));
    setRegistered(null);
  };

  const reserve = () => {
    const data = { target, id };
    dispatch(addReservation(data));
    setRegistered(true);
  };

  return (
    <div className="c-rocketcard" id={id}>
      <div className="c-rocketcard-left">
        <img src={img} alt="" className="rocket-img" />
      </div>
      <div className="c-rocketcard-right">
        <h3 className="title">{title}</h3>
        <div className="text-block">
          {registered ? (
            <p className="rocket-description-badge">{text}</p>
          ) : (
            <p className="rocket-description">{text}</p>
          )}
        </div>

        <div className="actions">
          {registered ? (
            <button
              type="button"
              id="btn-reserve-cancel"
              className="btn-reserve-cancel"
              onClick={removeReserve}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              id="btn-reserve"
              className="btn-reserve"
              onClick={reserve}
            >
              Reserve
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default rocketcard;
