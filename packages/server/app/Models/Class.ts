import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import ClassSchedule from './ClassSchedule'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public subject: string

  @column()
  public cost: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => ClassSchedule)
  public schedule: HasMany<typeof ClassSchedule>
}
