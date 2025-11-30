### Apk Inventaris Toko Kelontong

Aplikasi backend sederhana yang dibuat untuk mengelola data inventaris produk di toko kelontong. Proyek ini memenuhi persyaratan Final Project yang meliputi implementasi Arsitektur Modular, operasi CRUD, Dynamic Routing (Path & Query Parameter), serta Error Handling menggunakan Node.js dan Express.js.

### Teknologi yang Digunakan

Runtime = Node.js

Framework = Express.js

Database = Array of Object (In-Memory)

Testing = Postman

### Instalasi dan Menjalankan Server

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini secara lokal:

Clone Repository:
(https://github.com/mfaatihyusron/inventaris-toko-kelontong.git)

Instalasi Dependencies:
Buka terminal di dalam folder proyek (inventaris-toko-kelontong), lalu jalankan:

npm install


Jalankan Aplikasi:
Gunakan perintah ini untuk menjalankan file utama (app.js):

node app.js


Akses:
Server akan berjalan di http://localhost:5000.

### Daftar Endpoint API (CRUD & Dynamic Routing)

Semua endpoint menggunakan base URL http://localhost:3000/products. Gunakan Postman atau alat testing API lainnya untuk berinteraksi.

Method

Path (URL)

Deskripsi

Status Code

Keterangan Routing

GET

/products

Mengambil semua data produk.

200 OK

Filter dengan Query Param.

GET

/products?kategori=...

Mengambil produk yang difilter berdasarkan kategori.

200 OK

Query Parameter (Contoh: ?kategori=Sembako)

GET

/products/:id

Mengambil detail satu produk berdasarkan ID.

200 OK / 404 Not Found

Path Parameter (Contoh: /products/3)

POST

/products

Menambah produk baru ke inventaris.

201 Created / 400 Bad Request

CREATE

PUT

/products/:id

Memperbarui data produk berdasarkan ID.

200 OK / 404 Not Found

UPDATE & Path Parameter

DELETE

/products/:id

Menghapus produk dari inventaris berdasarkan ID.

200 OK / 404 Not Found

DELETE & Path Parameter

### Contoh Body untuk Request POST/PUT

Saat menggunakan POST (untuk membuat) atau PUT (untuk memperbarui) di Postman, atur header Content-Type: application/json dan kirimkan data dengan format:

{
  "nama": "Gula Pasir 1kg",
  "kategori": "Sembako",
  "harga": 15000,
  "stok": 50
}
