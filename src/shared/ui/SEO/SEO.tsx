/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

interface ISEOProps {
	title: string;
	description?: string;
}

export const SEO = (props: ISEOProps) => {
  const { title, description } = props;

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <link
          rel='icon' href='./favicon.ico'
        />
        <meta
          name='description'
          content={description}
        />
        <meta
          name='yandex-verification' content='3f133a14a8e19e1c'
        />
        <meta
          name='google-site-verification' content='f3mz1cQ317pX6LsSBGwzwT671ovDGuE5DNYk1qgMjh8'
        />
      </Head>
    </>
  );
};
