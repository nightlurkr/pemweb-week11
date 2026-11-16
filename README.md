# Manajemen Produk

Tugas 3 Pemrograman Web (ET234305). Halaman manajemen produk dibuat dengan React
dan Tailwind CSS.

Data produk disimpan di state React, belum terhubung ke API atau database.

Ryan Adya Purwanto - 5027231046

## Stack

- React 19
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

## Fitur

| Fitur | Keterangan |
| ----- | ---------- |
| Daftar produk | Produk ditampilkan sebagai kartu berisi ID, nama, dan harga |
| Pencarian | Menyaring produk berdasarkan nama, tidak membedakan huruf besar kecil |
| Tambah produk | Modal berisi form nama dan harga, ID dibuat otomatis |
| Edit produk | Modal dengan nilai awal terisi dari produk yang dipilih |
| Hapus produk | Modal konfirmasi yang menampilkan produk yang akan dihapus |
| Validasi | Nama wajib diisi, harga wajib angka lebih dari 0 |

## Struktur proyek

```
src/main.jsx                           titik masuk aplikasi
src/App.jsx                            state produk, pencarian, dan pengatur modal
src/data/products.js                   data produk awal dan fungsi format rupiah
src/components/ProductCard.jsx         kartu satu produk
src/components/Modal.jsx               kerangka modal yang dipakai bersama
src/components/ProductFormModal.jsx    form tambah dan edit produk
src/components/DeleteConfirmModal.jsx  konfirmasi hapus produk
```

Seluruh state berada di `App.jsx`. Komponen di bawahnya menerima data lewat props
dan mengirim kejadian kembali lewat fungsi callback, sehingga komponen tersebut
tidak menyimpan data produk sendiri.

## Catatan

Data hanya hidup selama halaman terbuka. Menyegarkan browser mengembalikan daftar
produk ke lima produk awal.
