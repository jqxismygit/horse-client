// TODO: AUTHORIZATION
import axios from 'axios'
import { message } from 'antd';
import _ from 'lodash';

// const APIBASEURI = 'http://yangben.priv/api';
const APIBASEURI = 'http://api.yangbentong.priv';

const api = axios.create({
  baseURL: APIBASEURI,
  responseType: 'json'
});

api.interceptors.request.use(config => {
  let token
  // if (eCatalog.app && eCatalog.app.tenant && eCatalog.app.tenant._id) {
  // 	config.headers['X-Tenant-Id'] = eCatalog.app.tenant._id
  // }
  try {
    token = localStorage.getItem('orbit:token')
    config.headers['Authorization'] = 'Bearer ' + token
  } catch (e) { }

  return config
})

api.interceptors.response.use(response => {
  return response;
}, error => {
  // Do something with response error
  console.log(error);
  let errorcode = _.get(error, 'response.status', 400);
  if (errorcode === 401) {
    window.localStorage.removeItem('orbit:token');
  }
  message.error(_.get(error, 'response.data.message', '请检查网络'), 1);
  return Promise.reject(error);
})

export default api

export const loginByPassword = (username, password) => {
  return api.post('/user/login', { username, password })
}

export const requestLoginMobileVerify = (countryCode, mobile) => {
  return api.post('/user/requestLoginMobileVerify', { countryCode, mobile })
}

export const loginByCode = (countryCode, mobile, verifyCode) => {
  return api.post('/user/loginByCode', { verifyCode, countryCode, mobile })
}

export const requestForgotMobileVerify = (countryCode, mobile) => {
  return api.post('/user/forgot/requestCode', { countryCode, mobile })
}

export const userForgotVerifyCode = (countryCode, mobile, verifyCode) => {
  return api.post('/user/forgot/verifyCode', { countryCode, mobile, verifyCode })
}

export const userForgotSetPassword = (newPassword) => {
  return api.post('/user/forgot/setPassword', { newPassword })
}

//这个API比较特殊，需要一个临时的token
export const setPassword = (password, token) => {
  let instance = axios.create({
    baseURL: APIBASEURI,
    responseType: 'json',
    headers: { 'Authorization': 'Bearer ' + token }
  });
  return instance.post('/user/setPassword', { password })
}


//以下是邀请注册需要用到的API

//获取被邀请人的一些信息
export const getInviterInfo = (token) => {
  return api.get(`/user/verifyEmail?token=${token}`)
}

export const requestMobileVerify = (countryCode, mobile) => {
  return api.post('/user/requestMobileVerify', { countryCode, mobile })
}

export const register = (countryCode, mobile, verifyCode, email) => {
  return api.post('/user/register', { countryCode, mobile, verifyCode, email })
}
