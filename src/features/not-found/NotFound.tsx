// File: src/features/not-found/NotFound.tsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1>Página no encontrada</h1>
      <p>La ruta solicitada no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}
