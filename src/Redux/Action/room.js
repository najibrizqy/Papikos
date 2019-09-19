import axios from 'axios';

export const getRooms = () => {
  return {
    type: 'GET_ROOMS',
    payload: axios
      .get('https://salty-plains-50836.herokuapp.com/rooms')
      .then()
      .catch(err => console.log(err)),
  };
};

export const getARoom = id => {
  return {
    type: 'GET_A_ROOM',
    payload: axios
      .get(`https://salty-plains-50836.herokuapp.com/rooms/${id}`)
      .then()
      .catch(err => console.log(err)),
  };
};

export const updateRoom = (data, id) => {
  return {
    type: 'UPDATE_ROOM',
    payload: axios
      .patch(`https://salty-plains-50836.herokuapp.com/rooms/${id}`, data)
      .then()
      .catch(err => console.log(err)),
  };
};

export const deleteRoom = id => {
  return {
    type: 'DELETE_ROOM',
    payload: axios
      .delete(`https://salty-plains-50836.herokuapp.com/rooms/${id}`)
      .then()
      .catch(err => console.log(err)),
  };
};
