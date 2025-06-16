import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

function Hello() {
  return <h1>Olá, mundo!</h1>;
}

describe('Hello', () => {
  it('deve renderizar Olá, mundo!', () => {
    render(<Hello />);
    expect(screen.getByText('Olá, mundo!')).toBeDefined();
  });
}); 