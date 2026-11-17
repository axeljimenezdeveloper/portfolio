// File: src/components/layout/Footer.tsx
import { profile } from '../../content/profile';

export function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
