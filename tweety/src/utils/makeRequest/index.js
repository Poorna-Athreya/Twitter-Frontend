import axios from 'axios';
// import AUTH_TOKEN from '../../constants/authorisationToken';
import { BACKEND_URL } from '../../constants/apiEndpoints';

const makeRequest = async (apiEndpoint, dynamicConfig = {}, navigateTo = () => {}) => {
  try {
    const response = await axios({
      ...apiEndpoint,
      url: `${BACKEND_URL}${apiEndpoint.url}`,
      ...dynamicConfig,
    });
    return response.data;
  } catch (err) {
    switch (err.response?.status) {
      case 400: navigateTo('/Bad-Request');
        break;
      case 500: navigateTo('/Server-Error');
        break;
      default: navigateTo('/Something-Wrong');
    }
  }
  return [];
};
export default makeRequest;
