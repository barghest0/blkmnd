import { TOKEN_KEY } from './constants';

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => localStorage.getItem(TOKEN_KEY);

const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { setToken, getToken, deleteToken };
