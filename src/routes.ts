import { Router } from 'express';
import { Login } from './controllers/users/Longinho';

const router: Router = Router()

const login = new Login()

router.post('/login', login.handle)

export {router}