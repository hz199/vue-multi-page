
const devApiUrl = 'https://www.fastmock.site/mock/d0f2daa2f0f6b981661fc60e0a1c02d8'
//正式环境变量,注意修改
const proApiUrl = 'https://www.fastmock.site/mock/d0f2daa2f0f6b981661fc60e0a1c02d8'

const isDev = process.env.NODE_ENV === 'development'

export default {
  apiUrl: isDev ? devApiUrl : proApiUrl,  // axios 请求地址
  timeout: 2000, // 请求超时事件
}
