import axios from 'axios'

const REDIRECT_URI = 'http://localhost:3000';
const API_ROOT = 'https://ya-praktikum.tech/api/v2';

export async function getAppId() {
  const response = await axios.get(`${API_ROOT}/oauth/yandex/service-id?redirect_uri=${REDIRECT_URI}`)
  const { data: { service_id } } = response;
  return service_id;
}

export function getRedirectUri() {
  return REDIRECT_URI;
}

export async function doLoginWithCode(code: string) {
  return axios.post(`${API_ROOT}/oauth/yandex`, JSON.stringify({
    code,
    redirect_uri: `${REDIRECT_URI}`
  }), {
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
  })
}

export async function getMe() {
  const { data } = await axios.get(`${API_ROOT}/auth/user`, {
    withCredentials: true
  });
  return data;
}