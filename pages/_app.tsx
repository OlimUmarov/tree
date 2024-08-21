import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import * as React from 'react';
import '@/app/styles/index.scss';

import { ReactElement, ReactNode } from 'react';
import { createEmotionCache } from '@/app/config/createEmotionCache';
import { theme } from '@/app/config/theme';
import type { AppProps } from '@/app/types/app';
import type { NextPage } from 'next';

const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta
            content='initial-scale=1, width=device-width' name='viewport'
          />
        </Head>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </CacheProvider>
    </ThemeProvider>
  );
};

export default App;
