import * as cs from 'color-string';

export interface ColorConfig {
  keywords: {
    fontWeight: string;
    overviewRulerColor: string;
    color: string;
  };
  link: { color: string };
  message: { color: string };
}

export function get(color: string): cs.ColorDescriptor | null {
  return cs.get(color);
}

export function check(color: string): boolean {
  return get(color) !== null;
}

export function create(color: cs.ColorDescriptor): ColorConfig {
  const hex = cs.to.hex(color.value);
  const result = {
    keywords: {
      fontWeight: 'bold',
      overviewRulerColor: hex,
      color: hex,
    },
    link: { color: hex },
    message: { color: hex },
  };
  return result;
}
