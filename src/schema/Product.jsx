import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Product name is required.",
    "string.min": "Product name must be at least 3 characters.",
    "string.max": "Product name must not exceed 100 characters.",
  }),
  price: Joi.number().positive().precision(2).required().messages({
    "number.base": "Price must be a number.",
    "number.positive": "Price must be greater than zero.",
    "number.precision": "Price can have at most 2 decimal places.",
  }),
  category: Joi.string().required().messages({
    "string.empty": "Category is required.",
  }),
  description: Joi.string().max(1000).optional().messages({
    "string.max": "Description must not exceed 1000 characters.",
  }),
  image: Joi.string().uri().optional().messages({
    "string.uri": "Image must be a valid URL.",
  }),
  stock: Joi.number().integer().min(0).required().messages({
    "number.base": "Stock must be a number.",
    "number.min": "Stock cannot be negative.",
  }),
  isFeatured: Joi.boolean().optional().default(false),
});
