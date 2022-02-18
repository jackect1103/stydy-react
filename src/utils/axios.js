/*
 * @Author: your name
 * @Date: 2022-01-14 14:35:56
 * @LastEditTime: 2022-01-15 09:06:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\utils\axios.js
 */
import axios from 'axios'

/**
 * 配置axios请求
 */
export default function API(options) {
  let defaultOptions = {
    baseURL: 'http://jsonplaceholder.typicode.com/',
    headers: {},
    timeout: 50000
  }
  const install = axios.create(defaultOptions)

  install.interceptors.request.use(config => {
    console.log(`config`, config)
    return config
  },
    // 失败
    (err) => Promise.reject(err)
  )

  install.interceptors.response.use(response => {
    console.log(`response`, response)
    // if (response.status) {
      
    // }
    return response
  },
    // 失败
    (err) => Promise.reject(err)
  )

  return install(options).then(res => {
    console.log(`res`, res)
    return new Promise(resolve => {
      // TODO
      // 业务处理
      resolve(res.data)
    })
  }).catch(error => {
    console.log(`error`, error)
    return Promise.reject(error)
  })

   
}