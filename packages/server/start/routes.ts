import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'UsersController.register')
Route.post('/login', 'UsersController.login')

Route.get('/users/:id', 'UsersController.index')
