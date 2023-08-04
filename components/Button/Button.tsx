import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import style from 'components/Button/Button.module.scss';

import type { ButtonType, ButtonVariantType } from 'components/Button';

interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariantType;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  className,
  onClick,
  children,
  disabled,
  fullWidth,
}: PropsWithChildren<ButtonProps>) => (
  <button
    type={type}
    className={classNames(style.container, style[variant], className, { [style.fullWidth]: fullWidth })}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick={(e) => onClick?.()}
    disabled={disabled}
  >
    {children}
  </button>
);
