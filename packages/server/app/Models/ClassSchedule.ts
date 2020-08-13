import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ClassSchedule extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public week_day: number

  @column()
  public from: number

  @column()
  public to: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public classId: number
}
