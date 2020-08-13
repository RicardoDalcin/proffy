import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.store')
Route.post('/login', 'UsersController.login')

Route.get('/users/test', 'UsersController.test')
