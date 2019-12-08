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

export default {
  register,
  login,
};
