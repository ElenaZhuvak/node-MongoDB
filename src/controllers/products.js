import createHttpError from 'http-errors';
import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();
  res.json({
    status: 200,
    message: 'Successfully find products',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductByIdService(productId);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const payload = req.body;
  const product = await createProductService(payload);

  res.json({
    status: 201,
    message: 'Product created successfully',
    data: product,
  });
};
