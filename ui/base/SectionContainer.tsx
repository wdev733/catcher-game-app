import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import style from 'ui/base/SectionContainer.module.scss';

interface SectionContainerProps {
  fullWidth?: boolean;
  className?: string;
}

const SectionContainer = ({ fullWidth, className, children }: PropsWithChildren<SectionContainerProps>) => (
  <div
    className={classNames(style.container, className, {
      [style['w-max-full']]: fullWidth,
    })}
  >
    {children}
  </div>
);

export default SectionContainer;
