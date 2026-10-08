import { useMemo, useState } from 'react';
import {
  ArrowDownUp,
  ArrowRight,
  Boxes,
  Package,
  Plus,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Trash2,
  X,
} from 'lucide-react';
import { productsData } from '../data/productsData';

const categories = [
  { value: 'all', label: 'Tüm ürünler' },
  { value: 'electronics', label: 'Elektronik' },
  { value: 'jewelery', label: 'Takı' },
  { value: "men's clothing", label: 'Erkek giyim' },
  { value: "women's clothing", label: 'Kadın giyim' },
  { value: 'other', label: 'Diğer' },
];

const categoryLabel = (category) =>
  categories.find((item) => item.value === category)?.label ?? 'Diğer';

const formatPrice = (price) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 2,
  }).format(price);

const emptyForm = {
  title: '',
  price: '',
  image: '',
  description: '',
  category: 'electronics',
};

const HomePage = () => {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState(emptyForm);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase('tr-TR');
    const result = products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        !query ||
        `${product.title} ${product.description}`
          .toLocaleLowerCase('tr-TR')
          .includes(query);

      return matchesCategory && matchesSearch;
    });

    return result.sort((first, second) => {
      if (sortBy === 'price-asc') return first.price - second.price;
      if (sortBy === 'price-desc') return second.price - first.price;
      if (sortBy === 'rating') {
        return (second.rating?.rate ?? 0) - (first.rating?.rate ?? 0);
      }
      return 0;
    });
  }, [products, searchTerm, activeCategory, sortBy]);

  const ratedProducts = products.filter((product) => product.rating?.rate > 0);
  const averageRating = ratedProducts.length
    ? (
        ratedProducts.reduce((total, product) => total + product.rating.rate, 0) /
        ratedProducts.length
      ).toFixed(1)
    : '—';
  const categoryCount = new Set(products.map((product) => product.category)).size;

  function handleAddProduct(event) {
    event.preventDefault();

    const product = {
      ...newProduct,
      id: `custom-${Date.now()}`,
      price: Number(newProduct.price),
      rating: { rate: 0, count: 0 },
    };

    setProducts((currentProducts) => [product, ...currentProducts]);
    setNewProduct(emptyForm);
    setIsAddDialogOpen(false);
  }

  function handleDeleteProduct(productId, productTitle) {
    if (window.confirm(`“${productTitle}” ürününü silmek istiyor musunuz?`)) {
      setProducts((currentProducts) =>
        currentProducts.filter((product) => product.id !== productId),
      );
    }
  }

  function closeAddDialog() {
    setIsAddDialogOpen(false);
    setNewProduct(emptyForm);
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#overview" className="flex items-center gap-3" aria-label="Katalog ana sayfa">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
              <Package size={21} strokeWidth={2.2} />
            </span>
            <span className="text-[15px] font-bold tracking-tight text-slate-950">
              katalog<span className="text-indigo-600">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
            <a
              href="#overview"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Genel bakış
            </a>
            <a
              href="#products"
              className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700"
            >
              Ürünler
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-right sm:block">
              <span className="block text-sm font-semibold text-slate-800">Mağaza yöneticisi</span>
              <span className="block text-xs text-slate-400">Yönetim paneli</span>
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 ring-4 ring-amber-50">
              MY
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <section
          id="overview"
          className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo-700 via-indigo-700 to-violet-800 px-6 py-8 text-white shadow-xl shadow-indigo-900/10 sm:px-10 sm:py-10 lg:px-12"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full border border-white/10" />
            <div className="absolute -right-4 -top-24 h-[300px] w-[300px] rounded-full border border-white/10" />
            <div className="absolute -bottom-48 right-1/4 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
            <div className="max-w-2xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-indigo-100">
                <Sparkles size={14} />
                MAĞAZA YÖNETİMİ
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Kataloğun, <span className="text-indigo-200">kontrolünde.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-indigo-100/85 sm:text-base">
                Ürünlerini tek bir yerden görüntüle, ara ve mağazana yenilerini ekle.
              </p>
              <a
                href="#products"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-950/10 transition hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Kataloğa göz at
                <ArrowRight size={16} />
              </a>
            </div>

            <div aria-hidden="true" className="relative hidden h-48 w-52 items-center justify-center md:flex">
              <div className="absolute right-3 top-2 h-36 w-36 rounded-[32px] border border-white/15 bg-white/10 rotate-12" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-white/20 bg-white/15 shadow-2xl shadow-indigo-950/20 backdrop-blur">
                <Boxes size={52} strokeWidth={1.3} className="text-white" />
              </div>
              <span className="absolute bottom-3 left-0 rounded-2xl border border-white/15 bg-white/15 px-4 py-3 text-xs font-medium text-white shadow-lg backdrop-blur">
                Her şey yerli yerinde
              </span>
              <span className="absolute right-0 top-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300 text-amber-950 shadow-lg shadow-indigo-950/15">
                <Sparkles size={20} />
              </span>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-3" aria-label="Katalog özeti">
          <article className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02]">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Package size={22} />
            </span>
            <span>
              <span className="block text-2xl font-semibold tracking-tight text-slate-950">{products.length}</span>
              <span className="mt-0.5 block text-sm text-slate-500">Toplam ürün</span>
            </span>
          </article>
          <article className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02]">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <Boxes size={22} />
            </span>
            <span>
              <span className="block text-2xl font-semibold tracking-tight text-slate-950">{categoryCount}</span>
              <span className="mt-0.5 block text-sm text-slate-500">Ürün kategorisi</span>
            </span>
          </article>
          <article className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02]">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <Star size={22} fill="currentColor" />
            </span>
            <span>
              <span className="block text-2xl font-semibold tracking-tight text-slate-950">{averageRating}</span>
              <span className="mt-0.5 block text-sm text-slate-500">Ortalama ürün puanı</span>
            </span>
          </article>
        </section>

        <section id="products" className="scroll-mt-24 pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold text-indigo-600">MAĞAZA ENVANTERİ</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Ürün kataloğu
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Mağazandaki ürünleri incele ve yönet.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsAddDialogOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <Plus size={18} strokeWidth={2.4} />
              Yeni ürün ekle
            </button>
          </div>

          <div className="mt-7 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-900/[0.02] sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Ürün adı veya açıklama ara"
                  aria-label="Ürünlerde ara"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <label className="flex items-center gap-2.5 text-sm text-slate-500">
                <SlidersHorizontal size={16} aria-hidden="true" />
                <span className="shrink-0">Sırala:</span>
                <span className="relative">
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    aria-label="Ürünleri sırala"
                    className="min-w-40 appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-700 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="featured">Öne çıkanlar</option>
                    <option value="price-asc">Fiyat: artan</option>
                    <option value="price-desc">Fiyat: azalan</option>
                    <option value="rating">En yüksek puan</option>
                  </select>
                  <ArrowDownUp size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </span>
              </label>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto border-t border-slate-100 pt-4 pb-1">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  aria-pressed={activeCategory === category.value}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${activeCategory === category.value ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/15' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4 mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500" aria-live="polite">
              <span className="font-semibold text-slate-800">{filteredProducts.length}</span>{' '}
              ürün listeleniyor
            </p>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                Aramayı temizle
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/[0.025] transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/[0.07]"
                >
                  <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100/80 p-7">
                    <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur">
                      {categoryLabel(product.category)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(product.id, product.title)}
                      aria-label={`${product.title} ürününü sil`}
                      title="Ürünü sil"
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-400 shadow-sm transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-red-100"
                    >
                      <Trash2 size={16} />
                    </button>
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex min-h-6 items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600">
                        {categoryLabel(product.category)}
                      </span>
                      {product.rating?.rate > 0 ? (
                        <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                          <Star size={13} fill="currentColor" className="text-amber-400" />
                          {product.rating.rate.toFixed(1)}
                          <span className="font-normal text-slate-400">({product.rating.count})</span>
                        </span>
                      ) : (
                        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                          Yeni
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-900">
                      {product.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-lg font-bold tracking-tight text-slate-950">
                        {formatPrice(product.price)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                        Detaylar <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Search size={24} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">Ürün bulunamadı</h3>
              <p className="mt-1 text-sm text-slate-500">
                Arama kelimeni veya seçtiğin kategoriyi değiştirebilirsin.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Filtreleri temizle
              </button>
            </div>
          )}
        </section>
      </main>

      {isAddDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-product-title"
            className="my-auto w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl shadow-slate-950/20 sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Plus size={21} />
                </span>
                <h2 id="add-product-title" className="text-xl font-semibold tracking-tight text-slate-950">
                  Yeni ürün ekle
                </h2>
                <p className="mt-1 text-sm text-slate-500">Ürün bilgilerini doldurarak kataloğa ekle.</p>
              </div>
              <button
                type="button"
                onClick={closeAddDialog}
                aria-label="Pencereyi kapat"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-100"
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Ürün adı
                <input
                  required
                  autoFocus
                  value={newProduct.title}
                  onChange={(event) => setNewProduct({ ...newProduct, title: event.target.value })}
                  placeholder="Örn. Günlük sırt çantası"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Fiyat (₺)
                  <input
                    required
                    min="0.01"
                    step="0.01"
                    type="number"
                    value={newProduct.price}
                    onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}
                    placeholder="0,00"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Kategori
                  <select
                    value={newProduct.category}
                    onChange={(event) => setNewProduct({ ...newProduct, category: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    {categories.filter((category) => category.value !== 'all').map((category) => (
                      <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Görsel bağlantısı
                <input
                  required
                  type="url"
                  value={newProduct.image}
                  onChange={(event) => setNewProduct({ ...newProduct, image: event.target.value })}
                  placeholder="https://ornek.com/urun.jpg"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Açıklama
                <textarea
                  required
                  rows={3}
                  value={newProduct.description}
                  onChange={(event) => setNewProduct({ ...newProduct, description: event.target.value })}
                  placeholder="Ürünün özelliklerini kısaca anlat"
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </label>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeAddDialog}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                >
                  <Plus size={17} />
                  Ürünü ekle
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
