import axiosMock from 'axios';
import makeRequest from './index';

jest.mock('axios');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('makeRequest', () => {
  const mockUsersData = {
    users: [
      {
        id: 1,
        name: 'Twitter Dev',
        handle: 'TwitterDev',
        location: 'Internet',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        handle: 'LoremIpsum',
        location: 'Internet',
      }],
  };
  const mockResponse = (errorMessage, status) => {
    const res = {};
    res.status = status;
    res.json = { error: errorMessage };
    return { response: res };
  };
  it('should return the data returned by axios when it is called with correct apiEndpoint', async () => {
    axiosMock.mockResolvedValueOnce({ data: mockUsersData });
    const result = await makeRequest({ url: '/users', method: 'get' });
    expect(axiosMock).toHaveBeenCalledTimes(1);
    expect(axiosMock).toHaveBeenCalledWith({ url: 'http://localhost:8000/users', method: 'get' });
    expect(result).toBe(mockUsersData);
  });
  it('should call navigate with Bad-Request route whenever 400 error is thrown', async () => {
    axiosMock.mockRejectedValueOnce(mockResponse('Bad Request', 400));
    await makeRequest({ url: '/users', method: 'get' }, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/Bad-Request');
  });
  it('should call navigate with Server-Error route whenever 500 error is thrown', async () => {
    axiosMock.mockRejectedValueOnce(mockResponse('Internal Server Error', 500));
    await makeRequest({ url: '/users', method: 'get' }, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/Server-Error');
  });
  it('should call navigate with Something-Wrong route whenever unknown error is thrown', async () => {
    axiosMock.mockRejectedValueOnce(mockResponse('Unknown error', 0));
    await makeRequest({ url: '/users', method: 'get' }, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/Something-Wrong');
  });
});
