export const BACKEND_URL = 'http://localhost:8000';
// export const TWEETS = '/users';
export const getUsers = {
  method: 'get',
  url: '/users',
};
export const getTweetsForUser = (userId) => ({
  method: 'get',
  url: `/tweets/${userId}`,
});
