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
  };
};

export const registerUser = data => {
  return {
    type: 'REGISTER_USER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/register/user', {data})
      .then()
      .catch(err => {
        console.log('gagal nk\n' + err);
      }),
  };
};

export const registerPartner=(data)=>{
  return {
    type: 'REGISTER_PARTNER',
    payload: axios
      .post('https://salty-plains-50836.herokuapp.com/register/partner', data)
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
