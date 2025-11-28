// app.js
import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = 3000;

// Middleware agar bisa baca JSON dari body request
app.use(express.json());

// Menggunakan Routes
app.use('/products', productRoutes);

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server Inventaris Toko berjalan di http://localhost:${PORT}`);
});