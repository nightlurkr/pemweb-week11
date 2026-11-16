import { useState } from "react";
import { daftarProdukAwal } from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductFormModal from "./components/ProductFormModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";

function App() {
  const [produk, setProduk] = useState(daftarProdukAwal);
  const [pencarian, setPencarian] = useState("");
  const [modalForm, setModalForm] = useState(null);
  const [produkDihapus, setProdukDihapus] = useState(null);

  const produkTampil = produk.filter((item) =>
    item.nama.toLowerCase().includes(pencarian.trim().toLowerCase())
  );

  function bukaTambah() {
    setModalForm({ mode: "tambah", produk: null });
  }

  function bukaEdit(item) {
    setModalForm({ mode: "edit", produk: item });
  }

  function simpanProduk(data) {
    if (modalForm.mode === "tambah") {
      const idBaru =
        produk.length === 0 ? 1 : Math.max(...produk.map((item) => item.id)) + 1;
      setProduk([...produk, { id: idBaru, ...data }]);
    } else {
      setProduk(
        produk.map((item) =>
          item.id === modalForm.produk.id ? { ...item, ...data } : item
        )
      );
    }

    setModalForm(null);
  }

  function hapusProduk() {
    setProduk(produk.filter((item) => item.id !== produkDihapus.id));
    setProdukDihapus(null);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-5xl px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manajemen Produk</h1>
            <p className="mt-1 text-sm text-slate-500">
              Kelola daftar produk dan harga dalam satu tempat.
            </p>
          </div>

          <button
            type="button"
            onClick={bukaTambah}
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
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {produkTampil.map((item) => (
              <ProductCard
                key={item.id}
                produk={item}
                onEdit={bukaEdit}
                onHapus={setProdukDihapus}
              />
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-slate-400">
          Menampilkan {produkTampil.length} dari {produk.length} produk
        </p>
      </main>

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
          onKonfirmasi={hapusProduk}
          onTutup={() => setProdukDihapus(null)}
        />
      )}
    </div>
  );
}

export default App;
