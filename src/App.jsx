import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProductsPage from './pages/ProductsPage';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import ReactTest from './pages/ReactTest';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';

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
  return <RouterProvider router={router} />;
}

export default App;
