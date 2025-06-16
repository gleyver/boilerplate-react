import { render, screen } from '@testing-library/react';
import UserList from '../pages/UserList';
import { expect, it, describe } from 'vitest';

describe('UserList', () => {
  it('renderiza o título', () => {
    render(<UserList />);
    expect(screen.getByText('Lista de Usuários')).toBeInTheDocument();
  });
});