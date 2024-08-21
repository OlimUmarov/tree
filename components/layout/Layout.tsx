import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Header } from '@/sections';

import cls from './Layout.module.scss';


interface ILayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children }: ILayoutProps) => {

  return (
    <>
      <header className={cls.header}>
        <Header />
      </header>
      <main className={cls.main}>
        {children}
      </main>
      <footer className={cls.footer}>
      </footer>
    </>
  );
};

export default Layout;
