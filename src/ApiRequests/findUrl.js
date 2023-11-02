const findUrl = (data, urlToFind) => {
  const request = data.find((request) => request.name === urlToFind);
  return request ? request.fetch_url : null;
};

export default findUrl;
