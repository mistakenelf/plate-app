const register = data => {
  return fetch('/.netlify/functions/register', {
    body: JSON.stringify(data),
    method: 'POST',
  }).then(response => {
    return response.json();
  });
};

const login = data => {
  return fetch('/.netlify/functions/login', {
    body: JSON.stringify(data),
    method: 'POST',
  }).then(response => {
    return response.json();
  });
};

const logout = () => {
  return fetch('/.netlify/functions/logout').then(res => res.json());
}

const currentUser = () => {
  return fetch('/.netlify/functions/user').then(res => res);
}

export default {
  register,
  login,
  logout,
  currentUser
};
