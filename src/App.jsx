import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProductsPage from './pages/ProductsPage';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import ReactTest from './pages/ReactTest';

const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminDashboardPage = lazy(
  () => import('./pages/admin/AdminDashboardPage'),
);
const AdminProductsPage = lazy(() => import('./pages/admin/AdminProductsPage'));
const AdminOrdersPage = lazy(() => import('./pages/admin/AdminOrdersPage'));

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { path: '/', Component: HomePage },
      { path: '/products', Component: ProductsPage },
      { path: '/test', Component: ReactTest },
      { path: '/cart', Component: CartPage },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [{ path: 'login', Component: LoginPage }],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboardPage },
      { path: 'products', Component: AdminProductsPage },
      { path: 'orders', Component: AdminOrdersPage },
    ],
  },

  {
    path: '*',
    Component: NotFound,
  },
]);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <div className="flex flex-col items-center gap-4 text-slate-500">
            <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
            <span className="text-sm font-medium">Yönetim paneli yükleniyor...</span>
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
