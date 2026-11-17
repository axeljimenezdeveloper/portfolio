// File: src/content/projects.ts
import type { Project } from './schema';

export const projects: readonly Project[] = [
  {
    slug: 'inventory-billing',
    title: 'Sistema de inventario y facturación para PYMES',
    role: 'Architecture & Full-stack Development',
    year: '2025',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API'],
    status: 'shipped',
    featured: true,
    summary:
      'Aplicación full-stack para gestión de inventario y facturación en pequeñas y medianas empresas.',
    problem:
      'PYMES sin herramientas integradas para control de existencias, validación de SKU y facturación, ' +
      'operando con hojas de cálculo frágiles y propensas a error.',
    decision:
      'Arquitectura en capas con frontend React + TypeScript y backend Node.js + PostgreSQL expuesto como API REST. ' +
      'Validación de SKU centralizada en el backend; el frontend consume el contrato tipado. ' +
      'Temas claro/oscuro resueltos con design tokens. Implementación asistida por agentes de IA bajo especificación y revisión propias.',
    result:
      'Sistema completo entregado con pruebas automatizadas, releases versionados siguiendo SemVer y control de existencias determinista.',
  },
  {
    slug: 'daily-budget',
    title: 'Daily Budget',
    role: 'Architecture & Mobile Development',
    year: '2024',
    stack: ['React Native', 'Expo', 'Expo Router', 'Zustand', 'TypeScript'],
    status: 'shipped',
    featured: true,
    summary:
      'Aplicación móvil de finanzas personales con foco en privacidad y control de gasto diario.',
    problem:
      'Apps de finanzas personales con estado global frágil, sin soporte multi-idioma serio y con datos sensibles expuestos en respaldos no cifrados.',
    decision:
      'Estado global con Zustand por su simplicidad y ausencia de boilerplate. Navegación con Expo Router (file-based). ' +
      'Internacionalización español/inglés resuelta con recursos tipados. Respaldos cifrados en reposo. ' +
      'Autenticación biométrica delegada al sistema operativo mediante SecureStore. Exportación a CSV para interoperabilidad.',
    result:
      'App con ciclo de gasto diario cerrado, autenticación biométrica funcional y exportación de datos verificable por el usuario.',
  },
  {
    slug: 'mobile-app-template',
    title: 'Plantilla base para apps móviles',
    role: 'Architecture',
    year: '2024',
    stack: ['React Native', 'Expo', 'Atomic Design', 'Design Tokens', 'Testing'],
    status: 'shipped',
    featured: false,
    summary: 'Plantilla reutilizable que estandariza el arranque de nuevos proyectos móviles.',
    problem:
      'Cada nuevo proyecto móvil repetía setup de design tokens, temas claro/oscuro, navegación y testing automatizado, ' +
      'acumulando deuda desde el día uno.',
    decision:
      'Plantilla con Atomic Design aplicado en la organización de componentes, design tokens versionados en el repositorio, ' +
      'temas claro/oscuro resueltos por variables y navegación con Expo Router. ' +
      'Testing automatizado configurado desde el scaffold, no como añadido posterior.',
    result:
      'Arranque de proyectos móviles reducido de días a horas, con testing, temas y navegación ya resueltos y versionados.',
  },
];
