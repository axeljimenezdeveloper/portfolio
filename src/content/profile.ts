// File: src/content/profile.ts
import type { Profile } from './schema';

export const profile: Profile = {
  name: 'Axel Gabriel Jiménez Malaver',
  headline: 'Desarrollador Frontend · Arquitectura de Software',
  location: 'Porlamar, Nueva Esparta, Venezuela',
  email: 'axeljimenez.latest@gmail.com',
  github: 'https://github.com/axeljimenezdeveloper',
  summary:
    'Desarrollador frontend con 7 años de experiencia autodidacta y orientación hacia la arquitectura de software. ' +
    'Mi fortaleza está en React, TypeScript y el diseño de interfaces: arquitectura de componentes, design systems y testing automatizado. ' +
    'Construyo sistemas completos dirigiendo la implementación con agentes de IA: defino la arquitectura, escribo las especificaciones, reviso el código y garantizo la entrega.',
  timeline: [
    { period: '2019', description: 'Inicio autodidacta. HTML, CSS y JavaScript.' },
    { period: '2020', description: 'Sitios web y landing pages completas.' },
    { period: '2021-2022', description: 'Frameworks frontend y maquetación responsiva.' },
    { period: '2022-2023', description: 'React, TypeScript y primeros proyectos con Node.js.' },
    {
      period: '2024+',
      description: 'Full-stack dirigido por IA, plantillas reutilizables y foco en arquitectura.',
    },
  ],
  education: [
    {
      institution: 'Universidad Nacional Abierta (UNA)',
      program: 'Ingeniería en Sistemas',
      period: '2023 - Actualidad',
      details: 'Régimen regular activo · 103 créditos aprobados · nivel 8 de 10.',
    },
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Intermedio · lectura técnica fluida, conversación pausada' },
  ],
};
