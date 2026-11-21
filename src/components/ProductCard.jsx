import { Link } from "react-router";
import { formatRupiah } from "../data/products";

function ProductCard({ produk, tampilan = "grid", onEdit, onHapus }) {
  const modeList = tampilan === "list";

  return (
    <article
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${
        modeList ? "flex flex-wrap items-center gap-4" : ""
      }`}
    >
      <div className={modeList ? "min-w-40 flex-1" : ""}>
        <p className="text-xs text-slate-400">ID: {produk.id}</p>

        <h2 className="mt-1 text-lg font-semibold text-slate-900">
          <Link to={`/products/${produk.id}`} className="hover:text-blue-600 hover:underline">
            {produk.nama}
          </Link>
        </h2>
        <p className="text-lg font-bold text-blue-600">{formatRupiah(produk.harga)}</p>
      </div>

      <div className={`flex gap-2 ${modeList ? "" : "mt-4"}`}>
        <Link
          to={`/products/${produk.id}`}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Detail
        </Link>
        <button
          type="button"
          onClick={() => onEdit(produk)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onHapus(produk)}
          className="rounded-lg border border-red-300 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          Hapus
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
