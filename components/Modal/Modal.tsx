import type { PropsWithChildren } from 'react';
import { useRef } from 'react';

import classNames from 'classnames';
import { Mask } from 'components/Modal/Mask';
import style from 'components/Modal/Modal.module.scss';
import useOnClickOutside from 'shared/hooks/useOnClickOutside';

import type { ModalProps } from 'components/Modal';

export const Modal = ({ show, className, children, modal = true, onClose }: PropsWithChildren<ModalProps>) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (!modal) onClose?.();
  });

  if (!show) {
    return null;
  }

  return (
    <>
      <section className={style.container}>
        <section className={classNames(style.content, className)} ref={ref}>
          {children}
        </section>
      </section>
      <Mask />
    </>
  );
};
