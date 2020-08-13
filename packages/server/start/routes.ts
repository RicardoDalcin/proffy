import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'UsersController.register')
Route.post('/login', 'UsersController.login')

Route.get('/users/:id', 'UsersController.find').middleware('auth')

Route.get('/classes', 'ClassesController.index').middleware('auth')
Route.get('/classes/:userId', 'ClassesController.find').middleware('auth')
Route.post('/classes/:userId', 'ClassesController.store').middleware('auth')
