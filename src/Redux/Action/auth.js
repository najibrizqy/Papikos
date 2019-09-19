import axios from 'axios';

export const loginUser = (username, password) => {
  return {
    type: 'LOGIN_USER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/login/user', {
        username,
        password,
      })
      .then()
      .catch(err => {
        console.log('Error :' + err);
      }),
  };
};

export const loginPartner = (email, password) => {
  return {
    type: 'LOGIN_PARTNER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/login/partner', {
        email,
        password,
      })
      .then()
      .catch(err => console.log('Error :' + err)),
  };
};

export const registerUser = (fullname, username, phone, email, password) => {
  return {
    type: 'REGISTER_USER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/register/user', {
        fullname,
        username,
        phone,
        email,
        password,
      })
      .then()
      .catch(err => {
        console.log('Error :' + err);
      }),
  };
};

export const registerPartner = data => {
  return {
    type: 'REGISTER_PARTNER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/register/partner', {data})
      .then()
      .catch(err => console.log('Error :' + err)),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
