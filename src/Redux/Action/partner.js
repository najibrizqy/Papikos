import axios from 'axios';

export const getPartners = () => {
  return {
    type: 'GET_PARTNERS',
    payload: axios
      .get('https://salty-plains-50836.herokuapp.com/partner')
      .then()
      .catch(err => console.log(err)),
  };
};

export const getAPartner = id => {
  return {
    type: 'GET_A_PARTNER',
    payload: axios
      .get(`https://salty-plains-50836.herokuapp.com/partner/${id}`)
      .then()
      .catch(err => console.log(err)),
  };
};

export const updatePartner = (data, id) => {
  return {
    type: 'UPDATE_PARTNER',
    payload: axios
      .patch(`https://salty-plains-50836.herokuapp.com/partner/${id}`, data)
      .then()
      .catch(err => console.log(err)),
  };
};

export const deletePartner = id => {
  return {
    type: 'DELETE_PARTNER',
    payload: axios
      .delete(`https://salty-plains-50836.herokuapp.com/partner/${id}`)
      .then()
      .catch(err => console.log(err)),
  };
};
