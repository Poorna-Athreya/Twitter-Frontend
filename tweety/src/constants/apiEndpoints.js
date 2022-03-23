export const BACKEND_URL = 'http://localhost:3000';
export const getUserEndpoint = {
  method: 'get',
  url: '/users',
};

export const getUserTweetsEndpoint = (userId) => ({
  method: 'get',
  url: `/users/${userId}/tweets`,

});
