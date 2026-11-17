// File: src/components/ui/SkipLink.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  it('renders an accessible link to the main content', () => {
    render(<SkipLink />);

    // Busca el enlace por su rol y nombre accesible (texto)
    const link = screen.getByRole('link', { name: /saltar al contenido/i });

    // Verifica que el enlace existe en el DOM
    expect(link).toBeInTheDocument();
    // Verifica que apunta al id correcto
    expect(link).toHaveAttribute('href', '#main-content');
    // Verifica que tiene la clase de estilos correcta
    expect(link).toHaveClass('skip-link');
  });
});
