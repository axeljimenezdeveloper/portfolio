// File: src/features/work/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { projects } from '../../content/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section>
        <h1>Proyecto no encontrado</h1>
        <p>El proyecto solicitado no existe.</p>
      </section>
    );
  }

  return (
    <article>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
    </article>
  );
}
