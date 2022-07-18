import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URL
    : 'http://localhost:3000';

export const api = axios.create({ baseURL });

export const fetcher = async (url: string) => {
  const { data } = await api.get(url, {
    data: { email: localStorage.getItem('session') },
  });
  return data;
};
