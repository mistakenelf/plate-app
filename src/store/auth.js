import { writable } from 'svelte/store';

import authApi from '../api/auth';

export const currentUser = writable(null);
export const fetchingUser = writable(true);
export const errorMessage = writable(null);

const login = async data => {
  const res = await authApi.login(data);

  if (res.error) {
    errorMessage.set(res.error);
  } else {
    currentUser.set(res.user);
    localStorage.setItem('token', res.token);
  }
};

const register = async data => {
  const res = await authApi.register(data);

  if (res.error) {
    errorMessage.set(res.error);
  } else {
    currentUser.set(res.user);
    localStorage.setItem('token', res.token);
  }
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

    if (user.error) {
      localStorage.removeItem('token');
      currentUser.set(null);
      fetchingUser.set(false);

      return;
    } else {
      currentUser.set(user);
      fetchingUser.set(false);
    }
  } else {
    currentUser.set(null);
    fetchingUser.set(false);
  }
};

const userSearch = async username => {
  const res = await authApi.userSearch(username);

  return res;
};

export default {
  login,
  register,
  logout,
  me,
  userSearch,
};
