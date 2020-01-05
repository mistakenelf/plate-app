import { writable } from 'svelte/store';

import authApi from '../api/auth';

export const currentUser = writable({});

export const login = async data => {
  const res = await authApi.login(data);

  currentUser.set(res);

  localStorage.setItem('token', JSON.stringify(res));
};

export const register = async data => {
  const res = await authApi.register(data);

  localStorage.setItem('token', JSON.stringify(res.token));
};

export const logout = async () => {
  localStorage.removeItem('token');
};

export const me = async () => {
  const jwt = JSON.parse(localStorage.getItem('token'));

  if (jwt) {
    const user = await authApi.me(jwt);
    currentUser.set(user);
  } else {
    currentUser.set({});
  }
};
