const register = async data => {
  const res = await fetch('/api/register', {
    body: JSON.stringify(data),
    method: 'POST',
  });

  return await res.json();
};

const login = async data => {
  const res = await fetch('/api/login', {
    body: JSON.stringify(data),
    method: 'POST',
  });

  return await res.json();
};

const me = async token => {
  const res = await fetch('/api/me', {
    body: JSON.stringify(token),
    method: 'POST',
  });

  return await res.json();
};

const userSearch = async username => {
  const res = await fetch('/api/user-search', {
    body: JSON.stringify(username),
    method: 'POST',
  });

  return await res.json();
};

export default {
  register,
  login,
  me,
  userSearch,
};
