import { CalendarDays, Download, MoreHorizontal, Search } from 'lucide-react';

const orders = [
  { id: '#1048', customer: 'Selin Arslan', email: 'selin@example.com', date: '31 Eki 2026', items: 2, total: '₺1.249', status: 'Hazırlanıyor' },
  { id: '#1047', customer: 'Mert Aydın', email: 'mert@example.com', date: '31 Eki 2026', items: 1, total: '₺2.899', status: 'Kargoda' },
  { id: '#1046', customer: 'Derya Şen', email: 'derya@example.com', date: '30 Eki 2026', items: 3, total: '₺1.687', status: 'Tamamlandı' },
  { id: '#1045', customer: 'Can Demir', email: 'can@example.com', date: '30 Eki 2026', items: 1, total: '₺1.120', status: 'Tamamlandı' },
  { id: '#1044', customer: 'Elif Yılmaz', email: 'elif@example.com', date: '29 Eki 2026', items: 2, total: '₺2.148', status: 'İptal edildi' },
];

const statusClasses = { Hazırlanıyor: 'bg-amber-50 text-amber-700', Kargoda: 'bg-sky-50 text-sky-700', Tamamlandı: 'bg-emerald-50 text-emerald-700', 'İptal edildi': 'bg-rose-50 text-rose-700' };

const AdminOrdersPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="text-sm font-medium text-indigo-600">Satış yönetimi</p><h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Siparişler</h2><p className="mt-2 text-sm text-slate-500">Tüm siparişleri takip et ve durumlarını güncelle.</p></div>
        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50"><Download size={17} />Dışa aktar</button>
      </div>

      <section className="mt-7 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 lg:flex-row lg:items-center lg:justify-between lg:p-5">
          <label className="relative w-full lg:max-w-sm"><span className="sr-only">Sipariş ara</span><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><input type="search" placeholder="Sipariş veya müşteri ara..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" /></label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"><CalendarDays size={17} />Son 30 gün</button>
            <select aria-label="Sipariş durumu" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"><option>Tüm durumlar</option><option>Hazırlanıyor</option><option>Kargoda</option><option>Tamamlandı</option></select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] text-left text-sm">
            <thead className="bg-slate-50/80 text-xs uppercase tracking-wide text-slate-400"><tr><th className="px-6 py-3 font-medium">Sipariş</th><th className="px-6 py-3 font-medium">Müşteri</th><th className="px-6 py-3 font-medium">Tarih</th><th className="px-6 py-3 font-medium">Ürün</th><th className="px-6 py-3 font-medium">Toplam</th><th className="px-6 py-3 font-medium">Durum</th><th className="px-6 py-3" /></tr></thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/70"><td className="px-6 py-4 font-semibold text-indigo-600">{order.id}</td><td className="px-6 py-4"><span className="block font-semibold text-slate-800">{order.customer}</span><span className="mt-0.5 block text-xs text-slate-400">{order.email}</span></td><td className="px-6 py-4 text-slate-500">{order.date}</td><td className="px-6 py-4 text-slate-600">{order.items} ürün</td><td className="px-6 py-4 font-semibold text-slate-800">{order.total}</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses[order.status]}`}>{order.status}</span></td><td className="px-6 py-4 text-right"><button type="button" aria-label={`${order.id} seçenekleri`} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><MoreHorizontal size={18} /></button></td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 text-xs text-slate-500"><span>1.429 siparişten 1-5 arası</span><div className="flex gap-2"><button type="button" className="rounded-lg border border-slate-200 px-3 py-2 text-slate-400">Önceki</button><button type="button" className="rounded-lg border border-slate-200 px-3 py-2 font-medium text-slate-700 hover:bg-slate-50">Sonraki</button></div></div>
      </section>
    </div>
  );
};

export default AdminOrdersPage;
