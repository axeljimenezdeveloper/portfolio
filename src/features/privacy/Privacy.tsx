// File: src/features/privacy/Privacy.tsx
import { privacyPolicy } from '../../content/legal';

export default function Privacy() {
  return (
    <article>
      <h1>Política de privacidad</h1>
      {privacyPolicy.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </article>
  );
}
