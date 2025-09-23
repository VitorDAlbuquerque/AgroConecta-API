import { Router } from 'express';
import { Login } from './controllers/users/Longinho';
import { CreateUser } from './controllers/users/CreateUser'
import { CreateProduct } from './controllers/products/createProduct'

const router: Router = Router()

const login = new Login()
const createUser = new CreateUser()
const createProduct = new CreateProduct()

router.post('/login', login.handle)
router.post('/createUser', createUser.handle)
router.put('/createProduct', createProduct.handle)

export {router}