
const devApiUrl = 'http://192.168.1.43:8085'
//正式环境变量,注意修改
const proApiUrl = ''

const isDev = process.env.NODE_ENV === 'development'

export default {
  apiUrl: isDev ? devApiUrl : proApiUrl,  // axios 请求地址
  timeout: 2000, // 请求超时事件
}
