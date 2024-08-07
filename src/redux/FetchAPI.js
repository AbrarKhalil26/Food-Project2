import axios from 'axios';
export const BASE_URL = 'https://tasty.p.rapidapi.com';

const options = {
  url: BASE_URL,
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '008a03d37bmsh2c4463e69a09f9bp1fb442jsnb64c2c581efa',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};