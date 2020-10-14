//* API endpoints for searching index
`use sctrict`;

const request = require('request');
module.exports = (app, es) => {
  const url = `http://${es.host}:${es.port}/${es.books_index}/book/_search`;
};
