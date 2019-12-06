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

export default {
  create,
  readAll,
};
