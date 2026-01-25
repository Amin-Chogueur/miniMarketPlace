import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getMyProducts,
  getProductById,
  updateProduct,
} from "../controllers/productControllers.js";
import { requireAuth } from "@clerk/express";

const productRouter = Router();

productRouter.get("/", getAllProducts);

productRouter.get("/myProducts", requireAuth(), getMyProducts);

productRouter.get("/:id", getProductById);

productRouter.post("/", requireAuth(), createProduct);

productRouter.put("/:id", requireAuth(), updateProduct);

productRouter.delete("/:id", requireAuth(), deleteProduct);

export default productRouter;
