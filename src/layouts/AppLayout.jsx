import { NavLink, Outlet } from "react-router";

function kelasTautan({ isActive }) {
  const dasar = "rounded-lg px-3 py-1.5 text-sm font-medium";
  return isActive
    ? `${dasar} bg-blue-600 text-white`
    : `${dasar} text-slate-600 hover:bg-slate-100`;
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3">
          <span className="mr-2 font-bold text-slate-900">Manajemen Produk</span>
          <NavLink to="/products" className={kelasTautan}>
            Produk
          </NavLink>
          <NavLink to="/settings" className={kelasTautan}>
            Pengaturan
          </NavLink>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
