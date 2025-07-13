import {Router} from 'express';
import { createProductController, getAllProductsController, getProductByIdController, updateProductController } from '../controllers/products.js';

const router = Router();

router.get('/', getAllProductsController);
router.get('/:productId', getProductByIdController);
router.post('/', createProductController);
router.patch('/:productId', updateProductController);

export default router;