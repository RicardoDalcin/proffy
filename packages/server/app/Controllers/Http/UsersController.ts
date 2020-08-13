import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from '../../Models/User'

export default class UsersController {
  public async store({ request, response }) {
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

    const token = await auth.use('api').attempt(email, password)
    return token.toJSON()
  }

  public async test({ auth }) {
    await auth.authenticate()

    return {
      hello: 'world'
    }
  }
}
