import { MainPage } from '@/pages';
import { SEO } from '@/shared/ui/SEO/SEO';
import { ReactElement } from 'react';
import Layout from 'components/layout/Layout';

const Page = () => (
  <>
    <SEO
      title='Daraxtlarni joylashishi xaqida ma’lumot'
    />
    <MainPage  />
  </>
);

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
