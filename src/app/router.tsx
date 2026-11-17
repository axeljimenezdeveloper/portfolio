// File: src/app/router.tsx
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Shell } from '../components/layout/Shell';

const Home = lazy(() => import('../features/home/Home'));
const Work = lazy(() => import('../features/work/Work'));
const ProjectDetail = lazy(() => import('../features/work/ProjectDetail'));
const About = lazy(() => import('../features/about/About'));
const Privacy = lazy(() => import('../features/privacy/Privacy'));
const NotFound = lazy(() => import('../features/not-found/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
      { path: 'work/:slug', element: <ProjectDetail /> },
      { path: 'about', element: <About /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
