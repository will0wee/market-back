import {Router} from 'express';
import UserController from '../controller/userController';
import ProductController from '../controller/productController';
import OrderController from '../controller/orderController';
import CategoryController from '../controller/categoryController';
import CityController from '../controller/cityController';

const router = Router();

// Routes pour les utilisateurs
router.get('/users', UserController.list);
router.get('/user/get/:id', UserController.getUser);
router.put('/user/update/:id', UserController.updateUser);
router.post('/user/create', UserController.createUser);
router.delete('/user/delete/:id', UserController.deleteUser);
router.post('/user/connection', UserController.connection);
router.get('/user/getProducers', UserController.getProducers);

// Routes pour les produits
router.get('/products', ProductController.list);
router.get('/product/get/:id', ProductController.getProduct);
router.put('/product/update/:id', ProductController.updateProduct);
router.post('/product/create', ProductController.createProduct);
router.delete('/product/delete/:id', ProductController.deleteProduct);

// Routes pour les commandes
router.get('/orders/:id', OrderController.listFromBuyer);
router.get('/orders', OrderController.list);
router.get('/order/get/:id', OrderController.getOrder);
router.put('/order/update/:id', OrderController.updateOrder);
router.post('/order/create', OrderController.createOrder);
router.delete('/order/delete/:id', OrderController.deleteOrder);

// Routes pour les categories
router.get('/categories', CategoryController.list);
router.get('/category/get/:id', CategoryController.getCategory);
router.put('/category/update/:id', CategoryController.updateCategory);
router.post('/category/create', CategoryController.createCategory);
router.delete('/category/delete/:id', CategoryController.deleteCategory);

// Routes pour les villes
router.get('/cities', CityController.list);
router.get('/city/get/:id', CityController.getCity);
router.put('/city/update/:id', CityController.updateCity);
router.post('/city/create', CityController.createCity);
router.delete('/city/delete/:id', CityController.deleteCity);

export default router;