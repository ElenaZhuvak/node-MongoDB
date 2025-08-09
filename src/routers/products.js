import {Router} from 'express';
import { createProductController, deleteProductController, getAllProductsController, getProductByIdController, updateProductController } from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createProductSchema, updateProductSchema } from '../validation/products.js';
import { validateId } from '../middlewares/validateId.js';

const router = Router();

router.get('/', getAllProductsController);
router.get('/:productId', validateId, getProductByIdController);
router.post('/', validateBody(createProductSchema), createProductController);
router.patch('/:productId', validateId, validateBody(updateProductSchema), updateProductController);
router.delete('/:productId', validateId, deleteProductController);

export default router;