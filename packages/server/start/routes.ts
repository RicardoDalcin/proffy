import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'UsersController.register')
Route.post('/login', 'UsersController.login')
Route.post('/logout', 'UsersController.logout').middleware('auth')

Route.get('/users/:id', 'UsersController.find').middleware('auth')
Route.post('/users/validate', 'UsersController.validateEmail')

Route.get('/classes', 'ClassesController.index').middleware('auth')
Route.get('/classes/:userId', 'ClassesController.find').middleware('auth')
Route.post('/classes/:userId', 'ClassesController.store').middleware('auth')

Route.get('/connections', 'ConnectionsController.index')
Route.post('/connections', 'ConnectionsController.store').middleware('auth')
