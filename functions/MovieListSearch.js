require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { value, page, method, body } = options;
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=${API_KEY}&s=${value}&page=${page}`,
    method,
    data: body,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
