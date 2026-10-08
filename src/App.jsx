import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [{ path: '/', Component: HomePage }],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [{ path: 'login', Component: LoginPage }],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
