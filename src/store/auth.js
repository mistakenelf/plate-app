import { writable } from 'svelte/store';

import authApi from '../api/auth';

export const currentUser = writable(null);
export const fetchingUser = writable(false);

export const login = async data => {
  const res = await authApi.login(data);

  currentUser.set(res.user);

  localStorage.setItem('token', res.token);
};

export const register = async data => {
  const res = await authApi.register(data);

  currentUser.set(res.user);

  localStorage.setItem('token', JSON.stringify(res.token));
};

export const logout = async () => {
  localStorage.removeItem('token');
  currentUser.set(null);
};

export const me = async () => {
  fetchingUser.set(true);

  const jwt = localStorage.getItem('token');

  if (jwt) {
    const user = await authApi.me(jwt);
    currentUser.set(user);
    fetchingUser.set(false);
  } else {
    currentUser.set(null);
    fetchingUser.set(false);
  }
};
