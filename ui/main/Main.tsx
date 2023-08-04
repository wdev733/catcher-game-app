import type { PropsWithChildren } from 'react';

import Head from 'next/head';
import style from 'ui/main/Main.module.scss';

const MainContainer = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>Catcher</title>
      <meta name="description" content="Catcher game" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
    <main>
      <div className={style.container}>{children}</div>
    </main>
  </>
);

export default MainContainer;
