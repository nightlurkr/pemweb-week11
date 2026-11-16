import { useState } from "react";
import Modal from "./Modal";

function ProductFormModal({ produk, onSimpan, onTutup }) {
  const sedangEdit = Boolean(produk);

  const [nama, setNama] = useState(produk ? produk.nama : "");
  const [harga, setHarga] = useState(produk ? String(produk.harga) : "");
  const [error, setError] = useState("");

  function tanganiSubmit(event) {
    event.preventDefault();

    const namaBersih = nama.trim();
    const hargaAngka = Number(harga);

    if (namaBersih === "") {
      setError("Nama produk wajib diisi.");
      return;
    }

    if (!Number.isFinite(hargaAngka) || hargaAngka <= 0) {
      setError("Harga harus berupa angka lebih dari 0.");
      return;
    }

    setError("");
    onSimpan({ nama: namaBersih, harga: hargaAngka });
  }

  return (
    <Modal judul={sedangEdit ? "Edit Produk" : "Tambah Produk"} onTutup={onTutup}>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            {sedangEdit ? "Edit Produk" : "Tambah Produk"}
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">
            {sedangEdit
              ? "Perbarui informasi produk yang dipilih."
              : "Masukkan informasi produk baru."}
          </p>
        </div>
        <button
          type="button"
          onClick={onTutup}
          aria-label="Tutup"
          className="-mt-1 rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          &times;
        </button>
      </div>

      {sedangEdit && <p className="mt-3 text-xs text-slate-400">ID: {produk.id}</p>}

      <form onSubmit={tanganiSubmit} className="mt-3" noValidate>
        <label htmlFor="nama" className="block text-sm font-medium text-slate-700">
          Nama Produk
        </label>
        <input
          id="nama"
          type="text"
          value={nama}
          autoFocus
          onChange={(event) => setNama(event.target.value)}
          placeholder="Contoh: Pulpen"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />

        <label htmlFor="harga" className="mt-4 block text-sm font-medium text-slate-700">
          Harga (Rp)
        </label>
        <input
          id="harga"
          type="number"
          value={harga}
          onChange={(event) => setHarga(event.target.value)}
          placeholder="Contoh: 5000"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <p className="mt-1 text-xs text-slate-400">Harga harus lebih dari 0.</p>

        {error && (
          <p role="alert" className="mt-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onTutup}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Batal
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {sedangEdit ? "Simpan Perubahan" : "Simpan Produk"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ProductFormModal;
