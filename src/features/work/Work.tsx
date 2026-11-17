// File: src/features/work/Work.tsx
import { Link } from 'react-router-dom';
import { projects } from '../../content/projects';

export default function Work() {
  return (
    <section>
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link to={`/work/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
