const pilihan = [
  { nilai: "grid", judul: "Grid", keterangan: "Produk ditampilkan sebagai kartu bersusun." },
  { nilai: "list", judul: "List", keterangan: "Produk ditampilkan sebagai baris memanjang." },
];

function SettingsPage({ tampilan, onUbahTampilan }) {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold text-slate-900">Pengaturan</h1>
      <p className="mt-1 text-sm text-slate-500">
        Pilih cara daftar produk ditampilkan di halaman Produk.
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-slate-700">Tampilan daftar</legend>

        <div className="mt-3 grid gap-3">
          {pilihan.map((item) => (
            <label
              key={item.nilai}
              className={`flex cursor-pointer gap-3 rounded-xl border p-4 ${
                tampilan === item.nilai
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="tampilan"
                value={item.nilai}
                checked={tampilan === item.nilai}
                onChange={(event) => onUbahTampilan(event.target.value)}
                className="mt-1"
              />
              <span>
                <span className="block font-medium text-slate-900">{item.judul}</span>
                <span className="block text-sm text-slate-500">{item.keterangan}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="mt-6 text-sm text-slate-500">
        Tampilan aktif saat ini: <strong className="text-slate-900">{tampilan}</strong>
      </p>
    </div>
  );
}

export default SettingsPage;
