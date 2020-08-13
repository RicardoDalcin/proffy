import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Class from '../../Models/Class'
import ClassSchedule from '../../Models/ClassSchedule'
import convertHourToMinutes from '../../../utils/convertHourToMinutes'

export default class ClassesController {
  public async index() {
    const classes = await Class.query().preload('user').preload('schedule')
    return classes
  }

  public async find({ params }: HttpContextContract) {
    const { userId } = params

    const classFetched = await Class.query()
      .where('user_id', userId)
      .preload('user', query => {
        query.preload('profile')
      })
      .preload('schedule')
      .firstOrFail()

    const scheduleFormatted = classFetched.schedule.map(schedule => {
      return {
        week_day: schedule.week_day,
        from: schedule.from,
        to: schedule.to
      }
    })

    return {
      id: classFetched.id,
      name: classFetched.user.name,
      avatar: classFetched.user.profile.avatar,
      whatsapp: classFetched.user.profile.whatsapp,
      bio: classFetched.user.profile.bio,
      subject: classFetched.subject,
      cost: classFetched.cost,
      schedule: scheduleFormatted
    }
  }

  public async store({ request, params, auth, response }: HttpContextContract) {
    const { userId } = params
    const { subject, cost, schedule } = request.post()

    if (auth.user && auth.user.id == userId) {
      const classCreated = await Class.create({
        subject,
        cost,
        userId
      })

      schedule.map(async (schedule: ClassSchedule) => {
        await ClassSchedule.create({
          classId: classCreated.id,
          week_day: schedule.week_day,
          from: convertHourToMinutes(String(schedule.from)),
          to: convertHourToMinutes(String(schedule.to))
        })
      })
      return classCreated
    } else {
      return response.status(401)
    }
  }
}
