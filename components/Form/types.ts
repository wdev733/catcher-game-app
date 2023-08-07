import type { ReactNode } from 'react';

export type Variant = 'primary' | 'dark';

export interface FormControlWrapperProps {
  title?: string | ReactNode | ReactNode[];
  show?: boolean;
  stacked?: boolean;
  className?: string;
  showErrors?: boolean;
  placeholder?: string;
  error?: string;
  value: string;
  onChange?: (value: string) => void;
  required?: boolean;
  variant?: Variant;
}
