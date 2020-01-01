import { writable } from 'svelte/store';

import { getId } from '../helpers/getId';
import authApi from '../api/auth';

export const currentUser = writable({});

export const login = async data => {
  const res = await authApi.login(data);

  currentUser.set(res);

  const user = {
    id: getId(res),
    secret: res.secret,
  };

  localStorage.setItem('user', JSON.stringify(user));
};
