import axios from 'axios';

export const loginUser = (username, password, device_id) => {
  return {
    type: 'LOGIN_USER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/login/user', {
        username,
        password,
        device_id,
      })
      .then()
      .catch(err => {
        console.log('Error :' + err);
      }),
  };
};

export const loginPartner = (email, password, device_id) => {
  return {
    type: 'LOGIN_PARTNER',
    payload: axios.post(
      'https://salty-plains-50836.herokuapp.com/login/partner',
      {
        email,
        password,
        device_id,
      },
    ),
  };
};

export const registerUser = (data, device_id) => {
  return {
    type: 'REGISTER_USER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/register/user', {
        ...data,
        device_id,
      })
      .then()
      .catch(err => {
        console.log('Error :' + err);
      }),
  };
};

export const registerPartner = (data, device_id) => {
  return {
    type: 'REGISTER_PARTNER',
    payload: axios.post(
      'https://salty-plains-50836.herokuapp.com/register/partner',
      {...data, device_id},
    ),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
