import api from '@proffy/axios-config'

api.interceptors.request.use(config => {
  const token = 'Bearer ' + localStorage.getItem('@Proffy:token')
  config.headers.Authorization = token
  return config
})

export default api
