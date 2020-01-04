const create = async data => {
  const res = await fetch('/api/create-plate', {
    body: JSON.stringify(data),
    method: 'POST',
  });

  return await res.json();
};

const readAll = async () => {
  const res = await fetch('/api/get-plates');

  return await res.json();
};

const get = async id => {
  const res = await fetch('/api/get-plate', {
    body: JSON.stringify(id),
    method: 'POST',
  });

  return await res.json();
};

const deletePlate = async id => {
  const res = await fetch('/api/delete-plate', {
    body: JSON.stringify(id),
    method: 'DELETE',
  });

  return await res.json();
};

export default {
  create,
  readAll,
  get,
  deletePlate,
};
