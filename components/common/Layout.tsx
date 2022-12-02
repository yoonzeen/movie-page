import React from 'react';
import Header from './Header';
import Nav from './Nav';

type AppLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: AppLayoutProps) {
  return (
    <div>
      <Header />
      <Nav />
      {children}
    </div>
  );
}

export default Layout;