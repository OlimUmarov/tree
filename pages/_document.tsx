/* eslint-disable  */
import createEmotionServer from '@emotion/server/create-instance';
import type { AppType } from 'next/app';
import type {
  DocumentProps,
  DocumentContext,
} from 'next/document';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import * as React from 'react';

import type { AppProps } from '@/app/types/app';
import { theme, createEmotionCache, fontFamily } from '@/app';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

const MyDocument = ({ emotionStyleTags }: MyDocumentProps) => (
  <Html className={fontFamily.className} lang="ru">
    <Head>
      <meta content={theme.palette.primary.main} name="theme-color" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link rel="icon" href="/images/logo.png" sizes="any" />
      <meta content="" name="emotion-insertion-point" />
      {emotionStyleTags}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (
      App: React.ComponentType<React.ComponentProps<AppType> & AppProps>,
    ) => function EnhanceApp(props) {
      return <App emotionCache={cache} {...props} />;
    },
  });
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
