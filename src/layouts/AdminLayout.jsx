import { useState } from 'react';
import {
  Bell,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  ReceiptText,
  Search,
  Settings,
  Store,
  X,
} from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'Genel Bakış', to: '/admin', icon: LayoutDashboard, end: true },
  { label: 'Ürünler', to: '/admin/products', icon: Package },
  { label: 'Siparişler', to: '/admin/orders', icon: ReceiptText },
];

const pageTitles = {
  '/admin': 'Genel Bakış',
  '/admin/products': 'Ürünler',
  '/admin/orders': 'Siparişler',
};

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Menüyü kapat"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-slate-950 text-white transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <NavLink to="/admin" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
              <Store size={21} />
            </span>
            <span>
              <span className="block text-base font-bold tracking-tight">
                katalog<span className="text-indigo-400">.</span>
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Yönetim Paneli
              </span>
            </span>
          </NavLink>
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6" aria-label="Yönetim menüsü">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
            Menü
          </p>
          {navigation.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-950/30' : 'text-slate-400 hover:bg-white/[0.06] hover:text-white'}`
              }
            >
              <span className="flex items-center gap-3">
                <Icon size={19} />
                {label}
              </span>
              <ChevronRight size={15} className="opacity-50" />
            </NavLink>
          ))}

          <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
            Sistem
          </p>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            <Settings size={19} />
            Ayarlar
          </button>
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-200 text-sm font-bold text-amber-900">
              EK
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">Emin Kaya</span>
              <span className="block truncate text-xs text-slate-500">Yönetici</span>
            </span>
            <button type="button" aria-label="Çıkış yap" className="p-1.5 text-slate-500 hover:text-white">
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <button
            type="button"
            aria-label="Menüyü aç"
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-slate-400">Yönetim Paneli</p>
            <h1 className="truncate text-lg font-semibold tracking-tight text-slate-950">
              {pageTitles[pathname] ?? 'Yönetim Paneli'}
            </h1>
          </div>

          <label className="relative hidden w-full max-w-xs md:block">
            <span className="sr-only">Panelde ara</span>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              type="search"
              placeholder="Panelde ara..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </label>
          <button
            type="button"
            aria-label="Bildirimler"
            className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"
          >
            <Bell size={19} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
