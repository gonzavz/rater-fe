const AUTH_TOKEN_KEY = process.env.AUTH_TOKEN_KEY || 'token'

export default {
  get: () => localStorage.getItem(AUTH_TOKEN_KEY),
  set: (token) => localStorage.setItem(AUTH_TOKEN_KEY, token),
};
