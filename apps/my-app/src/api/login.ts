import axios from './axios';

export function login() {
  return axios.get('/login');
}

export function getVerificationCode() {
  return axios.get('/verification');
}
