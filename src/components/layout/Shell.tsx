// File: src/components/layout/Shell.tsx
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SkipLink } from '../ui/SkipLink';

function RouteFallback() {
  return (
    <p aria-live="polite" role="status">
      Cargando…
    </p>
  );
}

export function Shell() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
