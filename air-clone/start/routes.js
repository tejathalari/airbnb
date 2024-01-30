'use strict';

const Env = require("@adonisjs/framework/src/Env");

const Route = use('Route');
const AuthController = use('App/Controllers/Http/AuthController');
const User = use('App/Models/User');

Route.on('/').render('welcome');
Route.post('/signup', 'AuthController.signup').middleware('cors');
Route.post('/login', 'AuthController.login').middleware('cors');

Route.get('/user', function () {
    const user = User.find(2);
    return user
}).middleware('auth');