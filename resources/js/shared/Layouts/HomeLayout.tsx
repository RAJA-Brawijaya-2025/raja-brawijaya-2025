import type { PropsWithChildren } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
