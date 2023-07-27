import Axios from 'axios';
import {METHODS, SERVICE_ROUTES} from '../constant';

export class AuthService {
  authService = () => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.SIGN_IN,
        method: METHODS.POST,
      };

      Axios.request(config)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
}
