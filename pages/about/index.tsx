import { ReactElement } from 'react';
import Layout from 'components/layout/Layout';
import { SEO } from '@/shared/ui/SEO/SEO';
import { AboutPage } from '@/pages';


const Page = () => {
  return (
    <>
      <SEO title='Biz xaqimizda' />
      <AboutPage />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout className='shopPage'>
      {page}
    </Layout>
  );
};

export default Page;
