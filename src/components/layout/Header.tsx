// File: src/components/layout/Header.tsx
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav aria-label="Principal">
        <Link to="/">Inicio</Link>
        <Link to="/work">Proyectos</Link>
        <Link to="/about">Sobre mí</Link>
      </nav>
    </header>
  );
}
