import { Package } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#overview"
          className="flex items-center gap-3"
          aria-label="Katalog ana sayfa"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
            <Package size={21} strokeWidth={2.2} />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-slate-950">
            katalog<span className="text-indigo-600">.</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Ana menü"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium  transition ${isActive ? 'text-indigo-700 bg-indigo-50' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'} `
            }
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium  transition ${isActive ? 'text-indigo-700 bg-indigo-50' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'} `
            }
          >
            Ürünler
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium  transition ${isActive ? 'text-indigo-700 bg-indigo-50' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'} `
            }
          >
            Sepet {0}
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-right sm:block">
            <span className="block text-sm font-semibold text-slate-800">
              Mağaza yöneticisi
            </span>
            <span className="block text-xs text-slate-400">Yönetim paneli</span>
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 ring-4 ring-amber-50">
            MY
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
