import axios from 'axios';
import store from '@/store';

function getHeadersFromStore() {
  return {
    'session-id': store.getters['account/sessionId'],
  };
}

const http = axios.create({});

/**
 * Set custom headers before all request
 */
http.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const newHeaders = getHeadersFromStore();
    newConfig.headers = {
      ...config.headers,
      ...newHeaders,
    };
    return newConfig;
  },
  error => Promise.reject(error),
);

export default http;
