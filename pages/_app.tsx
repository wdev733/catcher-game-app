import MainContainer from 'containers/main/Main';
import { HydrationProvider, Client } from 'react-hydration-provider';
import { Provider } from 'react-redux';
import { store } from 'stores';

import type { AppProps } from 'next/app';

import 'styles/global.css';

const App = ({ Component, pageProps }: AppProps) =>
  typeof window !== 'undefined' ? (
    <HydrationProvider>
      <Client>
        <Provider store={store}>
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </Provider>
      </Client>
    </HydrationProvider>
  ) : null;

export default App;
