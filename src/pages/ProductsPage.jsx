import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFormModal from "../components/ProductFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

function ProductsPage({ produk, tampilan, onTambah, onUbah, onHapus }) {
  const [pencarian, setPencarian] = useState("");
  const [modalForm, setModalForm] = useState(null);
  const [produkDihapus, setProdukDihapus] = useState(null);

  const produkTampil = produk.filter((item) =>
    item.nama.toLowerCase().includes(pencarian.trim().toLowerCase())
  );

  function simpanProduk(data) {
    if (modalForm.mode === "tambah") {
      onTambah(data);
    } else {
      onUbah(modalForm.produk.id, data);
    }

    setModalForm(null);
  }

  function konfirmasiHapus() {
    onHapus(produkDihapus.id);
    setProdukDihapus(null);
  }

  return (
    <>
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manajemen Produk</h1>
          <p className="mt-1 text-sm text-slate-500">
            Kelola daftar produk dan harga dalam satu tempat.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalForm({ mode: "tambah", produk: null })}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Tambah Produk
        </button>
      </header>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <input
          type="search"
          value={pencarian}
          onChange={(event) => setPencarian(event.target.value)}
          placeholder="Cari nama produk..."
          aria-label="Cari nama produk"
          className="w-full max-w-sm rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <span className="text-sm text-slate-500">{produk.length} produk</span>
      </div>

      {produkTampil.length === 0 ? (
        <p className="mt-10 text-center text-sm text-slate-400">
          Tidak ada produk yang cocok dengan pencarian.
        </p>
      ) : (
        <div
          className={
            tampilan === "list"
              ? "mt-4 flex flex-col gap-3"
              : "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {produkTampil.map((item) => (
            <ProductCard
              key={item.id}
              produk={item}
              tampilan={tampilan}
              onEdit={(p) => setModalForm({ mode: "edit", produk: p })}
              onHapus={setProdukDihapus}
            />
          ))}
        </div>
      )}

      <p className="mt-6 text-xs text-slate-400">
        Menampilkan {produkTampil.length} dari {produk.length} produk
      </p>

      {modalForm && (
        <ProductFormModal
          produk={modalForm.produk}
          onSimpan={simpanProduk}
          onTutup={() => setModalForm(null)}
        />
      )}

      {produkDihapus && (
        <DeleteConfirmModal
          produk={produkDihapus}
          onKonfirmasi={konfirmasiHapus}
          onTutup={() => setProdukDihapus(null)}
        />
      )}
    </>
  );
}

export default ProductsPage;
