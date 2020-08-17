import api from '@proffy/axios-config'

interface Response {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

export function signIn(email, password): Promise<Response> {
  return new Promise(async resolve => {
    try {
      const response = await api.post('login', { email, password })
      resolve({
        token: response.data.token,
        user: {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email
        }
      })
    } catch (err) {
      console.log(err)
    }
  })
}

export function signUp(name, email, password) {
  return new Promise(async resolve => {
    try {
      const response = await api.post('register', { name, email, password })
      resolve({})
    } catch (err) {
      console.log(err)
    }
  })
}
