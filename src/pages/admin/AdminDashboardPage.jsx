import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDollarSign,
  Package,
  ReceiptText,
  ShoppingBag,
  Users,
} from 'lucide-react';

const stats = [
  { label: 'Toplam Ciro', value: '₺184.240', change: '+12,5%', icon: CircleDollarSign, color: 'indigo' },
  { label: 'Siparişler', value: '1.429', change: '+8,2%', icon: ShoppingBag, color: 'emerald' },
  { label: 'Müşteriler', value: '3.842', change: '+5,7%', icon: Users, color: 'sky' },
  { label: 'Aktif Ürün', value: '248', change: '-1,4%', icon: Package, color: 'amber', negative: true },
];

const recentOrders = [
  { id: '#1048', customer: 'Selin Arslan', product: 'Minimal Sırt Çantası', total: '₺1.249', status: 'Hazırlanıyor' },
  { id: '#1047', customer: 'Mert Aydın', product: 'Kablosuz Kulaklık', total: '₺2.899', status: 'Kargoda' },
  { id: '#1046', customer: 'Derya Şen', product: 'Seramik Kahve Seti', total: '₺749', status: 'Tamamlandı' },
  { id: '#1045', customer: 'Can Demir', product: 'Masa Lambası', total: '₺1.120', status: 'Tamamlandı' },
];

const colorClasses = {
  indigo: 'bg-indigo-50 text-indigo-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  sky: 'bg-sky-50 text-sky-600',
  amber: 'bg-amber-50 text-amber-600',
};

const statusClasses = {
  Hazırlanıyor: 'bg-amber-50 text-amber-700',
  Kargoda: 'bg-sky-50 text-sky-700',
  Tamamlandı: 'bg-emerald-50 text-emerald-700',
};

const AdminDashboardPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-indigo-600">31 Ekim 2026, Cumartesi</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Günaydın, Emin 👋</h2>
          <p className="mt-2 text-sm text-slate-500">Mağazanda bugün neler olduğuna hızlıca göz at.</p>
        </div>
        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
          <ReceiptText size={17} />
          Rapor oluştur
        </button>
      </div>

      <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Mağaza özeti">
        {stats.map(({ label, value, change, icon: Icon, color, negative }) => (
          <article key={label} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.025]">
            <div className="flex items-start justify-between">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${colorClasses[color]}`}><Icon size={21} /></span>
              <span className={`flex items-center gap-1 text-xs font-semibold ${negative ? 'text-rose-600' : 'text-emerald-600'}`}>
                {negative ? <ArrowDownRight size={14} /> : <ArrowUpRight size={14} />}
                {change}
              </span>
            </div>
            <p className="mt-5 text-2xl font-bold tracking-tight text-slate-950">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)]">
        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-950">Satış performansı</h3>
              <p className="mt-1 text-xs text-slate-500">Son 7 günlük ciro</p>
            </div>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">Bu hafta</span>
          </div>
          <div className="mt-8 flex h-52 items-end gap-3 sm:gap-5" aria-label="Haftalık satış grafiği">
            {[42, 58, 45, 76, 63, 91, 72].map((height, index) => (
              <div key={height} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div className="group relative flex flex-1 items-end rounded-lg bg-slate-50">
                  <div style={{ height: `${height}%` }} className="w-full rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-400 transition group-hover:from-indigo-700 group-hover:to-indigo-500" />
                </div>
                <span className="text-center text-[11px] font-medium text-slate-400">{['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'][index]}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="font-semibold text-slate-950">Kategori dağılımı</h3>
          <p className="mt-1 text-xs text-slate-500">Satış adedine göre</p>
          <div className="mt-7 space-y-5">
            {[['Elektronik', 74, 'bg-indigo-500'], ['Giyim', 58, 'bg-sky-500'], ['Ev & Yaşam', 43, 'bg-amber-400'], ['Aksesuar', 31, 'bg-emerald-500']].map(([label, value, color]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-xs"><span className="font-medium text-slate-600">{label}</span><span className="text-slate-400">%{value}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
          <div><h3 className="font-semibold text-slate-950">Son siparişler</h3><p className="mt-1 text-xs text-slate-500">En son gelen siparişler</p></div>
          <span className="text-sm font-semibold text-indigo-600">Tümünü gör</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50/80 text-xs uppercase tracking-wide text-slate-400"><tr><th className="px-6 py-3 font-medium">Sipariş</th><th className="px-6 py-3 font-medium">Müşteri</th><th className="px-6 py-3 font-medium">Ürün</th><th className="px-6 py-3 font-medium">Tutar</th><th className="px-6 py-3 font-medium">Durum</th></tr></thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => <tr key={order.id} className="hover:bg-slate-50/70"><td className="px-6 py-4 font-semibold text-indigo-600">{order.id}</td><td className="px-6 py-4 font-medium text-slate-700">{order.customer}</td><td className="px-6 py-4 text-slate-500">{order.product}</td><td className="px-6 py-4 font-semibold text-slate-800">{order.total}</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses[order.status]}`}>{order.status}</span></td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;
