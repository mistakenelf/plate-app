import { writable } from 'svelte/store';
import netlifyIdentity from 'netlify-identity-widget';

export const currentUser = writable(null);

export const handleLogin = () => {
  netlifyIdentity.open('login');

  netlifyIdentity.on('login', user => {
    currentUser.set(user);
    netlifyIdentity.close();
  });
};

export const handleLogout = () => {
  netlifyIdentity.logout();

  currentUser.set(null);
};
