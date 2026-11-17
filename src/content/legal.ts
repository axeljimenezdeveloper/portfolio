// File: src/content/legal.ts
import type { LegalSection } from './schema';

export const privacyPolicy: readonly LegalSection[] = [
  {
    heading: 'Datos que se recopilan',
    body:
      'Este sitio no recopila datos personales. No hay formularios, no hay cookies de seguimiento y no hay analytics de terceros. ' +
      'La preferencia de tema visual (claro u oscuro) se guarda únicamente en el almacenamiento local del navegador y no se transmite a ningún servidor.',
  },
  {
    heading: 'Servicios de terceros',
    body:
      'El sitio se sirve a través de GitHub Pages. GitHub puede registrar direcciones IP con fines de seguridad y funcionamiento del servicio, ' +
      'según su propia política de privacidad.',
  },
  {
    heading: 'Contacto',
    body: 'Para cualquier consulta sobre este sitio, puedes escribir a axeljimenez.latest@gmail.com.',
  },
];
