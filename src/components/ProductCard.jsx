import { formatRupiah } from "../data/products";

function ProductCard({ produk, onEdit, onHapus }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs text-slate-400">ID: {produk.id}</p>

      <h2 className="mt-1 text-lg font-semibold text-slate-900">{produk.nama}</h2>
      <p className="text-lg font-bold text-blue-600">{formatRupiah(produk.harga)}</p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => onEdit(produk)}
          className="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onHapus(produk)}
          className="flex-1 rounded-lg border border-red-300 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          Hapus
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
