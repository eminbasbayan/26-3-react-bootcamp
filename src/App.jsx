import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProductsPage from './pages/ProductsPage';
import NotFound from './pages/NotFound';
import Counter from './components/UI/Counter';
import CartPage from './pages/CartPage';
import ReactTest from './pages/ReactTest';

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
    path: '*',
    Component: NotFound,
  },
]);

function App() {
  return (
    <div className="app">
      <ReactTest />
      {/*      <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
