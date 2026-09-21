import { useEffect } from 'react';

export function useQuizShortcuts(
  options: { id: string; isCorrect: boolean }[],
  onSelect: (id: string, isCorrect: boolean) => void,
  disabled: boolean
) {
  useEffect(() => {
    if (disabled || options.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if focus is in an input, textarea, or select
      const activeElement = document.activeElement;
      if (activeElement) {
        const tag = activeElement.tagName.toLowerCase();
        if (
          tag === 'input' ||
          tag === 'textarea' ||
          tag === 'select' ||
          tag === 'button' ||
          (activeElement as HTMLElement).isContentEditable
        ) {
          return;
        }
      }

      // Check for keys 1-4
      const keyMap: Record<string, number> = {
        '1': 0,
        '2': 1,
        '3': 2,
        '4': 3,
      };

      if (e.key in keyMap) {
        const index = keyMap[e.key];
        if (index < options.length) {
          e.preventDefault();
          e.stopPropagation();
          const option = options[index];
          onSelect(option.id, option.isCorrect);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [options, onSelect, disabled]);
}
