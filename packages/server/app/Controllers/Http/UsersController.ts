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

    const user = await User.findByOrFail('email', email)

    return {
      ...token.toJSON(),
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').logout()

    return {}
  }

  public async find({ params }: HttpContextContract) {
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

  public async validateEmail({ request }: HttpContextContract) {
    const { email } = request.post()

    const user = await User.findBy('email', email)

    if (user) {
      return { validation: false }
    } else {
      return { validation: true }
    }
  }
}
