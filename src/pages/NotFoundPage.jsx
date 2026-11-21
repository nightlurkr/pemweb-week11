import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center">
      <p className="text-4xl font-bold text-slate-300">404</p>

      <h1 className="mt-2 text-xl font-bold text-slate-900">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-sm text-slate-500">
        Alamat yang kamu buka tidak tersedia. Mungkin salah ketik, atau halamannya
        memang tidak ada.
      </p>

      <Link
        to="/products"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Kembali ke daftar produk
      </Link>
    </div>
  );
}

export default NotFoundPage;
