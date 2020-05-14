import axios from '../utils/axios'
// import Qs from 'qs'

export const login = function (id, payload) {
  return axios.get(`/api/home/${id}`, {
    params: payload
  })
}


export const getTableList = function (payload = {}) {
  return axios.get(`/api/table1`, {
    params: payload
  })
}

// post 请求 axios 默认传的是json类型 
// export const login = function (payload) {
//   return axios.post('/api/login', payload)
// }


/** 后台若要传 from data类型的数值 **/
// export const login = function (params) {
//   return axios({
//       url: '/api/login',
//       method: 'post',
//       // data: params,
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       transformRequest: [(data) => {
//           data = Qs.stringify(params)
//           return data
//       }]
//   })
// }