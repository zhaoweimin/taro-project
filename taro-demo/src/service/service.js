import Taro from '@tarojs/taro'
import config from './config'

const baseUrl = config.host
const header = config.header

function baseOptions (params, method = 'GET') {
  let { url, data } = params
  const option = {
    url: baseUrl + url, // 接口地址
    data: data, // 请求参数
    method: method, // 请求方式
    header: header, // 请求头
    // success(res) {

    // },
    // error(e) {
    //   console.log('api', '请求接口出现问题', e)
    // }
  }
  return Taro.request(option)
}

function get (url, data) {
  let params = {
    url: url,
    data: data
  }
  return baseOptions(params, 'GET')
}

const service = {
  get: get
}
export default service