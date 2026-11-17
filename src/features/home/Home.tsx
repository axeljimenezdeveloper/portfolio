// File: src/features/home/Home.tsx
import { profile } from '../../content/profile';

export default function Home() {
  return (
    <section>
      <h1>{profile.name}</h1>
      <p>{profile.headline}</p>
    </section>
  );
}
