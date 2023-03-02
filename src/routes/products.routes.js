import { Router } from "express";
import { showProducts, createProduct, getOne, updateProduct, delateProduct,  } from "../controllers/products.controller";

// creamos la instancia del router
const router = Router();

//crear mis rutas

router
.route('/')
.get(showProducts)
.post(createProduct)


router
.route('/:id')
.get(getOne)
.put(updateProduct)
.delete(delateProduct)

export default router;