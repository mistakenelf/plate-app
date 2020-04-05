import { get } from 'svelte/store';

import { firebaseUser } from '../store/firebase';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

import CreatePlate from './CreatePlate/CreatePlate';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import PlateDetails from './PlateDetails/PlateDetails';
import Register from './Register/Register';

const isLoggedIn = () => {
  if (get(firebaseUser)) {
    return true;
  } else {
    return false;
  }
}

const isNotLoggedIn = () => {
  if (!get(firebaseUser)) {
    return true;
  } else {
    return false;
  }
}

export const routes = [
  {
    name: '/',
    component: Dashboard,
    layout: DefaultLayout,
    onlyIf: { guard: isLoggedIn, redirect: '/login' },
  },
  {
    name: 'create-plate',
    component: CreatePlate,
    layout: DefaultLayout,
    onlyIf: { guard: isLoggedIn, redirect: '/login' },
  },
  {
    name: 'plate',
    component: PlateDetails,
    layout: DefaultLayout,
    onlyIf: { guard: isLoggedIn, redirect: '/login' },
  },
  {
    name: 'login',
    component: Login,
    layout: DefaultLayout,
    onlyIf: { guard: isNotLoggedIn, redirect: '/' },
  },
  {
    name: 'register',
    component: Register,
    layout: DefaultLayout,
    onlyIf: { guard: isNotLoggedIn, redirect: '/' },
  }
];
