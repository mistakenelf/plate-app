const create = data => {
  return fetch('/api/create-plate', {
    body: JSON.stringify(data),
    method: 'POST',
  }).then(response => {
    return response.json();
  });
};

const readAll = () => {
  return fetch('/api/get-plates').then(response => {
    return response.json();
  });
};

const get = id => {
  return fetch('/api/get-plate', {
    body: JSON.stringify(id),
    method: 'POST',
  }).then(response => {
    return response.json();
  });
};

export default {
  create,
  readAll,
  get,
};
