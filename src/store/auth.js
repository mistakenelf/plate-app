import { writable } from 'svelte/store';

import { getId } from '../helpers/getId';
import authApi from '../api/auth';

export const currentUser = writable({});

export const login = async data => {
  const res = await authApi.login(data);

  const user = {
    id: getId(res),
    secret: res.secret,
  };

  currentUser.set(user);


  localStorage.setItem('user', JSON.stringify(user));
};
