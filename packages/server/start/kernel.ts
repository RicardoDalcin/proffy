import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register(['Adonis/Core/BodyParserMiddleware'])
Server.middleware.registerNamed({
  silentAuth: 'App/Middleware/SilentAuth',
  auth: 'App/Middleware/Auth'
})
