import Env from '@ioc:Adonis/Core/Env'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'
import Application from '@ioc:Adonis/Core/Application'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {
  connection: Env.get('DB_CONNECTION', 'sqlite') as string,

  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('DB_HOST', '127.0.0.1') as string,
        port: Number(Env.get('DB_PORT', 5432)),
        user: Env.get('DB_USER', 'postgres') as string,
        password: Env.get('DB_PASSWORD', '110702') as string,
        database: Env.get('DB_NAME', 'proffy') as string
      },
      healthCheck: false
    }
  },
  orm: {}
}

export default databaseConfig
