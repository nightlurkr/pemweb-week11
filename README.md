# Manajemen Produk

Tugas Pemrograman Web (ET234305). Aplikasi manajemen produk dibuat dengan React,
React Router, dan Tailwind CSS.

Data produk disimpan di state React, belum terhubung ke API atau database.

Ryan Adya Purwanto - 5027231046

Repository: https://github.com/nightlurkr/pemweb-week11

## Stack

- React 19
- React Router 8
- Vite 8
- Tailwind CSS 4

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal, biasanya `http://localhost:5173`.

Untuk membuat versi produksi:

```bash
npm run build
npm run preview
```

## Daftar halaman

| Rute | Halaman | Keterangan |
| ---- | ------- | ---------- |
| `/` | - | Dialihkan otomatis ke `/products` |
| `/products` | Produk | Daftar produk beserta tambah, edit, hapus, dan pencarian |
| `/products/:id` | Detail Produk | Menampilkan satu produk sesuai ID pada alamat |
| `/settings` | Pengaturan | Memilih tampilan daftar produk: grid atau list |
| selain itu | 404 | Pesan bahwa halaman tidak ada, beserta tautan kembali |

## Fitur

| Fitur | Keterangan |
| ----- | ---------- |
| Daftar produk | Kartu berisi ID, nama, dan harga |
| Pencarian | Menyaring produk berdasarkan nama, tidak membedakan huruf besar kecil |
| Tambah produk | Modal berisi form nama dan harga, ID dibuat otomatis |
| Edit produk | Modal dengan nilai awal terisi dari produk yang dipilih |
| Hapus produk | Modal konfirmasi yang menampilkan produk yang akan dihapus |
| Validasi | Nama wajib diisi, harga wajib angka lebih dari 0 |
| Detail produk | Halaman tersendiri, dibuka dari nama produk atau tombol Detail |
| Tampilan grid dan list | Diatur dari halaman Pengaturan, langsung berlaku di halaman Produk |
| Halaman 404 | Muncul untuk alamat yang tidak dikenal |

## Struktur proyek

```
src/main.jsx                           titik masuk, membungkus aplikasi dengan BrowserRouter
src/App.jsx                            daftar rute serta state produk dan tampilan
src/layouts/AppLayout.jsx              navigasi antar halaman dan Outlet
src/pages/ProductsPage.jsx             halaman daftar produk beserta CRUD
src/pages/ProductDetailPage.jsx        halaman detail satu produk
src/pages/SettingsPage.jsx             halaman pengaturan tampilan
src/pages/NotFoundPage.jsx             halaman 404
src/data/products.js                   data produk awal dan fungsi format rupiah
src/components/ProductCard.jsx         kartu satu produk, mendukung mode grid dan list
src/components/Modal.jsx               kerangka modal yang dipakai bersama
src/components/ProductFormModal.jsx    form tambah dan edit produk
src/components/DeleteConfirmModal.jsx  konfirmasi hapus produk
```

State produk dan pilihan tampilan berada di `App.jsx`, satu tingkat di atas semua
halaman yang memakainya. Halaman menerima data lewat props dan mengirim kejadian
kembali lewat callback, sehingga data tetap sama ketika berpindah rute.

## Catatan

Data hanya hidup selama halaman terbuka. Menyegarkan browser mengembalikan daftar
produk ke lima produk awal dan tampilan ke mode grid.

Membuka `/products/:id` dengan ID yang tidak ada akan menampilkan pesan bahwa
produk tidak ditemukan, bukan halaman 404, karena alamatnya sendiri dikenali oleh
router.
