import service from './service'

const api = {
  getList: function (params) {
    return service.get('/product/list', params)
  }
}

export default api