import { MoreHorizontal, Plus, Search, SlidersHorizontal } from 'lucide-react';

const products = [
  { id: 'PRD-0248', name: 'Kablosuz Kulaklık Pro', category: 'Elektronik', price: '₺2.899', stock: 42, status: 'Aktif', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'PRD-0247', name: 'Minimal Sırt Çantası', category: 'Aksesuar', price: '₺1.249', stock: 18, status: 'Aktif', color: 'bg-amber-100 text-amber-700' },
  { id: 'PRD-0246', name: 'Seramik Kahve Seti', category: 'Ev & Yaşam', price: '₺749', stock: 7, status: 'Kritik', color: 'bg-rose-100 text-rose-700' },
  { id: 'PRD-0245', name: 'Oversize Pamuklu Tişört', category: 'Giyim', price: '₺599', stock: 64, status: 'Aktif', color: 'bg-sky-100 text-sky-700' },
  { id: 'PRD-0244', name: 'Metal Masa Lambası', category: 'Ev & Yaşam', price: '₺1.120', stock: 0, status: 'Tükendi', color: 'bg-slate-200 text-slate-700' },
];

const statusClasses = { Aktif: 'bg-emerald-50 text-emerald-700', Kritik: 'bg-amber-50 text-amber-700', Tükendi: 'bg-rose-50 text-rose-700' };

const AdminProductsPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="text-sm font-medium text-indigo-600">Katalog yönetimi</p><h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Ürünler</h2><p className="mt-2 text-sm text-slate-500">Ürünlerini, fiyatları ve stok durumunu yönet.</p></div>
        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700"><Plus size={18} />Yeni ürün ekle</button>
      </div>

      <section className="mt-7 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <label className="relative w-full sm:max-w-sm"><span className="sr-only">Ürün ara</span><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><input type="search" placeholder="Ürün adı veya kodu ara..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" /></label>
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"><SlidersHorizontal size={17} />Filtrele</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-slate-50/80 text-xs uppercase tracking-wide text-slate-400"><tr><th className="px-6 py-3 font-medium">Ürün</th><th className="px-6 py-3 font-medium">Kategori</th><th className="px-6 py-3 font-medium">Fiyat</th><th className="px-6 py-3 font-medium">Stok</th><th className="px-6 py-3 font-medium">Durum</th><th className="px-6 py-3" /></tr></thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/70">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><span className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${product.color}`}>{product.name.charAt(0)}</span><span><span className="block font-semibold text-slate-800">{product.name}</span><span className="mt-0.5 block text-xs text-slate-400">{product.id}</span></span></div></td>
                  <td className="px-6 py-4 text-slate-500">{product.category}</td><td className="px-6 py-4 font-semibold text-slate-800">{product.price}</td><td className="px-6 py-4 text-slate-600">{product.stock} adet</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses[product.status]}`}>{product.status}</span></td><td className="px-6 py-4 text-right"><button type="button" aria-label={`${product.name} seçenekleri`} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><MoreHorizontal size={18} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 text-xs text-slate-500"><span>248 üründen 1-5 arası</span><div className="flex gap-2"><button type="button" className="rounded-lg border border-slate-200 px-3 py-2 text-slate-400">Önceki</button><button type="button" className="rounded-lg border border-slate-200 px-3 py-2 font-medium text-slate-700 hover:bg-slate-50">Sonraki</button></div></div>
      </section>
    </div>
  );
};

export default AdminProductsPage;
