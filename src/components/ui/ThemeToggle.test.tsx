// File: src/components/ui/ThemeToggle.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme');
    localStorage.clear();
    // Force the system preference to "dark" so the initial state is deterministic.
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation((query: string) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );
  });

  it('renders a button and toggles the theme on click', async () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button', { name: /cambiar tema/i });
    expect(button).toBeInTheDocument();

    // Initial state: dark (because matchMedia mocked as dark)
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    const user = userEvent.setup();
    await user.click(button);

    // After click: light
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });
});
