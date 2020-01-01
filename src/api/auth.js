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

const logout = async () => {
  return await fetch('/api/logout');
};

export default {
  register,
  login,
  logout,
};
