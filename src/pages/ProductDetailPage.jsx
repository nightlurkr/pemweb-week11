import { Link, useParams } from "react-router";
import { formatRupiah } from "../data/products";

function ProductDetailPage({ produk }) {
  const { id } = useParams();
  const idAngka = Number(id);
  const item = produk.find((p) => p.id === idAngka);

  if (!item) {
    return (
      <div className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="text-xl font-bold text-slate-900">Produk tidak ditemukan</h1>
        <p className="mt-2 text-sm text-slate-500">
          Tidak ada produk dengan ID {id} di daftar.
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

  return (
    <div className="max-w-xl">
      <Link to="/products" className="text-sm text-blue-600 hover:underline">
        Kembali ke daftar produk
      </Link>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <p className="text-xs text-slate-400">ID: {item.id}</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">{item.nama}</h1>
        <p className="mt-1 text-xl font-bold text-blue-600">{formatRupiah(item.harga)}</p>

        <dl className="mt-6 border-t border-slate-200 pt-4 text-sm">
          <div className="flex justify-between py-1">
            <dt className="text-slate-500">ID produk</dt>
            <dd className="font-medium text-slate-900">{item.id}</dd>
          </div>
          <div className="flex justify-between py-1">
            <dt className="text-slate-500">Nama produk</dt>
            <dd className="font-medium text-slate-900">{item.nama}</dd>
          </div>
          <div className="flex justify-between py-1">
            <dt className="text-slate-500">Harga</dt>
            <dd className="font-medium text-slate-900">{formatRupiah(item.harga)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default ProductDetailPage;
