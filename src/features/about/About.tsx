// File: src/features/about/About.tsx
import { profile } from '../../content/profile';

export default function About() {
  return (
    <section>
      <h1>Sobre mí</h1>
      <p>{profile.summary}</p>
    </section>
  );
}
