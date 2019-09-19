  
import axios from 'axios';

export const login = (credintial) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'post',
      url: `http://192.168.100.16:9000/login`,
      data: data,
    })
      .then()
      .catch(err => {
        console.log('gagal nk\n' + err);
      }),
  };
};

export const register = (credintial) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'post',
      url: `http://192.168.100.16:9000/register`,
      data: data,
    })
      .then()
      .catch(err => {
        console.log('gagal nk\n' + err);
      }),
  };
};