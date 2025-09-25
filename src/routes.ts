import { Router } from 'express';
import { Login } from './controllers/users/Longinho';
import { CreateUser } from './controllers/users/CreateUser'

import { CreateProduct } from './controllers/products/CreateProduct'
import { ListProducts } from './controllers/products/ListProducts'
import { UpdateProduct } from './controllers/products/UpdateProduct'
import { GetProductById } from './controllers/products/GetProductById'

import midAthorization from './middleware/Authorization';

const router: Router = Router()

const login = new Login()
const createUser = new CreateUser()

const createProduct = new CreateProduct()
const listProducts = new ListProducts()
const updateProduct = new UpdateProduct()
const getProductById = new GetProductById()

router.post('/login', login.handle)
router.post('/createUser', createUser.handle)

router.put('/createProduct', midAthorization, createProduct.handle)
router.get('/listProduct', listProducts.handle)
router.put('/updateProduct', updateProduct.handle)
router.get('/getProductById/:productId', getProductById.handle)

export {router}