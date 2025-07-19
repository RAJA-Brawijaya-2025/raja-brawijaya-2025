import { Head } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface SiteLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function SiteLayout({ title, children }: SiteLayoutProps) {
  return (
    <>
      <Head title={title} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
