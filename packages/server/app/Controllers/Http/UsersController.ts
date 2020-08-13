import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from '../../Models/User'

export default class UsersController {
  public async store({ request }) {
    const { name, email, password } = request.post()

    const createdUser = await User.create({
      name,
      email,
      password
    })

    return createdUser
  }

  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '15 days'
    })
    return token.toJSON()
  }

  public async test() {
    return {
      hello: 'world'
    }
  }
}
