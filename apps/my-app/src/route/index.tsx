import { createBrowserRouter, redirect } from 'react-router-dom';
import ErrorPage from '../view/error/error';
import workspaceRoutes from './workspace';
import articleRoutes from './article';
import dashboardRoutes from './dashboard';
import loginRoutes from './login';
import Root, { rootLoader } from '../view/root/root';

function catchAllLoader() {
  if (!localStorage.getItem('token')) {
    return redirect('/login');
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    loader: rootLoader,
    element: <Root></Root>,
    children: [
      {
        ...dashboardRoutes,
      },
      {
        ...workspaceRoutes,
      },
      {
        ...articleRoutes,
      },
    ],
  },
  {
    ...loginRoutes,
  },
  {
    path: '*',
    loader: catchAllLoader,
  },
]);

export default router;
