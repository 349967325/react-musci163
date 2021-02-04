import { post } from '../utils/ajax'

// 登录- 账户登录
const saveUserLogin = (params) => post('/user/login', params)

// 用户注册
const saveUserRegister = (params) => post('/user/register', params)

export default {
  saveUserLogin,
  saveUserRegister
}
