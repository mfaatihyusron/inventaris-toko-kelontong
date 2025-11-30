// routes/productRoutes.js
import express from 'express';
import { 
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} from '../controllers/productController.js';

const router = express.Router();

// Definisi Endpoint (Minimal 5 sesuai syarat)

// 1. GET Semua Produk (Bisa pakai ?kategori=... untuk Query Param)
router.get('/', getProducts);

// 2. GET Satu Produk (Pakai :id untuk Path Param)
router.get('/:id', getProductById);

// 3. POST Tambah Produk
router.post('/', createProduct);

// 4. PUT Update Produk
router.put('/:id', updateProduct);

// 5. DELETE Hapus Produk
router.delete('/:id', deleteProduct);

// WAJIB menggunakan "export default" agar bisa di-import oleh app.js
export default router;