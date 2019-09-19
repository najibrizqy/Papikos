import axios from 'axios';

export const getUsers = () => {
  return {
    type: 'GET_USERS',
    payload: axios
      .get('https://salty-plains-50836.herokuapp.com/user')
      .then()
      .catch(err => console.log(err)),
  };
};

export const getAUser = id => {
  return {
    type: 'GET_A_USER',
    payload: axios
      .get(`https://salty-plains-50836.herokuapp.com/login/user/${id}`)
      .then()
      .catch(err => console.log(err)),
  };
};

export const updateUser = (data, id) => {
  return {
    type: 'UPDATE_USER',
    payload: axios
      .patch(`https://salty-plains-50836.herokuapp.com/user/${id}`, data)
      .then()
      .catch(err => console.log(err)),
  };
};

export const deleteUser = id => {
  return {
    type: 'DELETE_USER',
    payload: axios
      .delete(`https://salty-plains-50836.herokuapp.com/user/${id}`)
      .then()
      .catch(err => console.log(err)),
  };
};
