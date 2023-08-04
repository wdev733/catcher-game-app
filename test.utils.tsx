import type { ReactElement } from 'react';

import {
  render as defaultRender,
  renderHook as defaultRenderHook,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'stores';
import '@testing-library/jest-dom';
import 'whatwg-fetch';

const InterfaceBase = ({ children }: { children: ReactElement }) => {
  return <Provider store={store}>{children}</Provider>;
};

const render = (ui: ReactElement, options?: object) =>
  defaultRender(ui, {
    wrapper: (props) => <InterfaceBase {...props} {...options} />,
  });

const HookBase = ({ children }: { children: ReactElement }) => {
  return <Provider store={store}>{children}</Provider>;
};

const renderHook = <T,>(hook: () => T, options?: object) =>
  defaultRenderHook(hook, { wrapper: (props) => <HookBase {...props} {...options} /> });

export { render, renderHook, screen, fireEvent, waitFor, act };
