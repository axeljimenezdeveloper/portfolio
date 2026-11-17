// File: src/content/schema.ts
// Typed content contract. Components consume these types, never raw objects.
// If a CMS is adopted later, replace src/content/*.ts with a fetcher that
// returns the same types — components remain untouched.

export type ProjectStatus = 'shipped' | 'in-progress';

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly role: string;
  readonly year: string;
  readonly stack: readonly string[];
  readonly status: ProjectStatus;
  readonly featured: boolean;
  readonly summary: string;
  readonly problem: string;
  readonly decision: string;
  readonly result: string;
  readonly links?: readonly ProjectLink[];
}

export interface TimelineEntry {
  readonly period: string;
  readonly description: string;
}

export interface EducationEntry {
  readonly institution: string;
  readonly program: string;
  readonly period: string;
  readonly details: string;
}

export interface LanguageEntry {
  readonly language: string;
  readonly level: string;
}

export interface Profile {
  readonly name: string;
  readonly headline: string;
  readonly location: string;
  readonly email: string;
  readonly github: string;
  readonly summary: string;
  readonly timeline: readonly TimelineEntry[];
  readonly education: readonly EducationEntry[];
  readonly languages: readonly LanguageEntry[];
}

export interface LegalSection {
  readonly heading: string;
  readonly body: string;
}
