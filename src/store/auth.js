import { writable } from 'svelte/store';

import authApi from '../api/auth';

export const currentUser = writable(null);
export const fetchingUser = writable(false);

const login = async data => {
  const res = await authApi.login(data);

  currentUser.set(res.user);

  localStorage.setItem('token', res.token);
};

const register = async data => {
  const res = await authApi.register(data);

  currentUser.set(res.user);

  localStorage.setItem('token', JSON.stringify(res.token));
};

const logout = async () => {
  localStorage.removeItem('token');
  currentUser.set(null);
};

const me = async () => {
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

export default {
  login,
  register,
  logout,
  me,
};
