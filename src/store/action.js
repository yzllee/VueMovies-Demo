import axios from 'axios';

const API = '/api/';

export default function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(API + url, { params })
      .then((res) => {
        resolve(res.data);
      }).catch(err => reject(err));
  });
}
