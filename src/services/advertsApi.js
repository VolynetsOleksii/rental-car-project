import axios from 'axios';

axios.defaults.baseURL = "https://648c17088620b8bae7ec358d.mockapi.io";
export const limit = 8;

export const fetchAdverts = async (page) => {
  const { data } = await axios.get(`/adverts`, {
    params: {
      page,
      limit,
    },
  });
 
  return data;
};