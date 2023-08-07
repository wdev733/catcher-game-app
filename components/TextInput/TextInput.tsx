import classNames from 'classnames';
import style from 'components/TextInput/TextInput.module.scss';

import type { TextInputType } from 'components/TextInput';

interface TextInputProps {
  type?: TextInputType;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export const TextInput = ({
  type = 'text',
  value,
  placeholder,
  disabled,
  fullWidth,
  onChange,
  className,
}: TextInputProps) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    className={classNames(style.input, className, { [style.fullWidth]: fullWidth })}
    onChange={(e) => onChange?.(e.target.value)}
  />
);
