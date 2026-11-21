import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { daftarProdukAwal } from "./data/products";
import AppLayout from "./layouts/AppLayout";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [produk, setProduk] = useState(daftarProdukAwal);
  const [tampilan, setTampilan] = useState("grid");

  function tambahProduk(data) {
    const idBaru =
      produk.length === 0 ? 1 : Math.max(...produk.map((item) => item.id)) + 1;
    setProduk([...produk, { id: idBaru, ...data }]);
  }

  function ubahProduk(id, data) {
    setProduk(produk.map((item) => (item.id === id ? { ...item, ...data } : item)));
  }

  function hapusProduk(id) {
    setProduk(produk.filter((item) => item.id !== id));
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/products" replace />} />

        <Route
          path="products"
          element={
            <ProductsPage
              produk={produk}
              tampilan={tampilan}
              onTambah={tambahProduk}
              onUbah={ubahProduk}
              onHapus={hapusProduk}
            />
          }
        />

        <Route path="products/:id" element={<ProductDetailPage produk={produk} />} />

        <Route
          path="settings"
          element={<SettingsPage tampilan={tampilan} onUbahTampilan={setTampilan} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
