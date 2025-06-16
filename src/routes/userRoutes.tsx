import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';

const UserList = lazy(() => import('../domains/user/pages/UserList'));

export const userRoutes: RouteObject[] = [
  {
    path: '/users',
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <UserList />
      </Suspense>
    ),
  },
]; 