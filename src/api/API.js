import axios from 'axios';

const urlRockets = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => axios.get(`${urlRockets}`).then((result) => {
  const rockets = [];
  if (result.status === 200) {
    const { data } = result;
    // eslint-disable-next-line no-restricted-syntax
    data.forEach((item) => {
      const rocket = {
        rocket_id: item.rocket_id,
        rocket_name: item.rocket_name,
        flickr_images: item.flickr_images,
        description: item.description,
        active: item.active,
      };
      rockets.push(rocket);
    });
  }
  return rockets;
});

const getReservations = () => {
  const reservations = {
    rockets: [],
  };
  return reservations;
};

export default {
  getRockets, getReservations,
};
