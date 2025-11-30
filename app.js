// app.js
import express from 'express';
// Import tanpa kurung kurawal, karena di routes/productRoutes.js kita pakai export default
import productRoutes from './routes/productRoutes.js'; 

const app = express();
// PORT diubah dari 3000 ke 5000 untuk menghindari bentrok dengan Grafana
const PORT = 5000;

// Middleware agar bisa baca JSON dari body request
app.use(express.json());

// Menggunakan Routes
app.use('/products', productRoutes);

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server Inventaris Toko berjalan di http://localhost:${PORT}`);
});