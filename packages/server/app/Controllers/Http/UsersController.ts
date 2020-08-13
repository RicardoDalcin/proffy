import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from '../../Models/User'
import Profile from '../../Models/Profile'

export default class UsersController {
  public async register({ request }) {
    const { name, email, password } = request.post()

    const createdUser = await User.create({
      name,
      email,
      password
    })

    const createdProfile = await Profile.create({
      avatar: '',
      whatsapp: '',
      bio: '',
      userId: createdUser.id
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

  public async index({ params }: HttpContextContract) {
    const { id } = params

    const userFetched = await User.query()
      .where('id', id)
      .preload('profile')
      .firstOrFail()
    console.log(userFetched)
    return {
      id: userFetched.id,
      name: userFetched.name,
      email: userFetched.email,
      avatar: userFetched.profile.avatar,
      whatsapp: userFetched.profile.whatsapp,
      bio: userFetched.profile.bio
    }
  }
}
