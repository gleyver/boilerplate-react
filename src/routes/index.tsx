import { useRoutes } from 'react-router-dom';
import { userRoutes } from './userRoutes';

// Aqui você pode importar outras rotas de outros domínios futuramente

const routes = [
  ...userRoutes,
  // ...outras rotas
];

export function AppRoutes() {
  return useRoutes(routes);
} 