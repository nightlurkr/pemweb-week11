import Modal from "./Modal";
import { formatRupiah } from "../data/products";

function DeleteConfirmModal({ produk, onKonfirmasi, onTutup }) {
  return (
    <Modal judul="Hapus Produk" onTutup={onTutup}>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onTutup}
          aria-label="Tutup"
          className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-2xl">
          🗑️
        </div>

        <h2 className="mt-3 text-base font-semibold text-slate-900">Hapus Produk?</h2>
        <p className="mt-1 text-xs text-slate-500">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>
      </div>

      <div className="mt-4 rounded-lg border border-slate-200 p-3">
        <p className="text-xs text-slate-400">ID: {produk.id}</p>
        <p className="font-semibold text-slate-900">{produk.nama}</p>
        <p className="font-bold text-blue-600">{formatRupiah(produk.harga)}</p>
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={onTutup}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Batal
        </button>
        <button
          type="button"
          onClick={onKonfirmasi}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Hapus Produk
        </button>
      </div>
    </Modal>
  );
}

export default DeleteConfirmModal;
