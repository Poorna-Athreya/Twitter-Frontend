export const BACKEND_URL = 'http://localhost:3000';
// export const TWEETS = '/users';
export const getUsers = {
  method: 'get',
  url: '/users',
};
export const getTweetsForUser = (userId) => ({
  method: 'get',
  url: `/users/${userId}/tweets`,
});
