import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Connection from '../../Models/Connection'

export default class ConnectionsController {
  public async index() {
    const totalConnections = await Connection.query().count('*')

    return {
      total: totalConnections[0].count
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { userId } = request.post()

    await Connection.create({
      userId
    })

    return response.status(201).send({})
  }
}
