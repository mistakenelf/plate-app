const create = data => {
  return fetch('/.netlify/functions/create-plate', {
    body: JSON.stringify(data),
    method: 'POST',
  }).then(response => {
    return response.json();
  });
};

const readAll = () => {
  return fetch('/.netlify/functions/get-plates').then(response => {
    return response.json();
  });
};

const get = id => {
  return fetch('/.netlify/functions/get-plate', {
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
