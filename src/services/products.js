import { ProductModel } from "../db/models/product.js";

export const getAllProductsService = () => {
    return ProductModel.find();
};

export const getProductByIdService = (productId) => {
    return ProductModel.findById(productId);
};

export const createProductService = (payload) => {
    return ProductModel.create(payload);
};

export const updateProductService = (productId, payload) => {
    return ProductModel.findByIdAndUpdate(productId, payload, {new: true});
};