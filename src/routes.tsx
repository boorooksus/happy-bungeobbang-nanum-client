import { lazy } from 'react';
import GlobalLayout from './pages/_layout';

const Index = lazy(() => import('./pages/index'));
const ManagerPage = lazy(() => import('./pages/ManagerPage'));

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/manager2', element: <ManagerPage /> },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/manager' }];
