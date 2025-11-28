// controllers/productController.js
import products from '../data/products.js';

// 1. READ ALL & FILTER (Dynamic Routing: Query Parameter)
// Contoh URL: GET /products atau GET /products?kategori=Sembako
export const getProducts = (req, res) => {
    try {
        const { kategori } = req.query; // Ambil query param ?kategori=...

        let data = products;

        // Logika Dynamic Routing (Query Param)
        if (kategori) {
            // Menggunakan Array Method .filter()
            data = data.filter(p => p.kategori.toLowerCase() === kategori.toLowerCase());
        }

        res.status(200).json({
            message: "Berhasil mengambil data",
            data: data
        });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan server" });
    }
};

// 2. READ ONE (Dynamic Routing: Path Parameter)
// Contoh URL: GET /products/1
export const getProductById = (req, res) => {
    try {
        const { id } = req.params; // Ambil path param /:id
        
        // Menggunakan Array Method .find()
        const product = products.find(p => p.id === parseInt(id));

        if (!product) {
            return res.status(404).json({ message: "Produk tidak ditemukan" });
        }

        res.status(200).json({
            message: "Detail produk ditemukan",
            data: product
        });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan server" });
    }
};

// 3. CREATE (Menambah Data)
export const createProduct = (req, res) => {
    try {
        const { nama, kategori, harga, stok } = req.body;

        // Validasi sederhana
        if (!nama || !harga) {
            return res.status(400).json({ message: "Nama dan Harga wajib diisi" });
        }

        const newProduct = {
            id: products.length + 1, // Auto ID sederhana
            nama,
            kategori,
            harga,
            stok
        };

        // Menggunakan Array Method .push()
        products.push(newProduct);

        res.status(201).json({
            message: "Produk berhasil ditambahkan",
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({ message: "Gagal menambah data" });
    }
};

// 4. UPDATE (Mengedit Data)
export const updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const { nama, kategori, harga, stok } = req.body;

        // Menggunakan Array Method .findIndex()
        const index = products.findIndex(p => p.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ message: "Produk tidak ditemukan untuk diedit" });
        }

        // Update data
        products[index] = {
            ...products[index],
            nama: nama || products[index].nama,
            kategori: kategori || products[index].kategori,
            harga: harga || products[index].harga,
            stok: stok || products[index].stok
        };

        res.status(200).json({
            message: "Produk berhasil diperbarui",
            data: products[index]
        });
    } catch (error) {
        res.status(500).json({ message: "Gagal update data" });
    }
};

// 5. DELETE (Menghapus Data)
export const deleteProduct = (req, res) => {
    try {
        const { id } = req.params;

        const index = products.findIndex(p => p.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ message: "Produk tidak ditemukan" });
        }

        // Menggunakan Array Method .splice() untuk menghapus
        products.splice(index, 1);

        res.status(200).json({ message: "Produk berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: "Gagal menghapus data" });
    }
};