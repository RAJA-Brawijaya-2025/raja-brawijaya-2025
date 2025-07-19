import { Head } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

interface SiteLayoutProps extends PropsWithChildren {
  title: string;
}

export default function SiteLayout({ title, children }: SiteLayoutProps) {
  return (
    <>
      <Head title={title} />
      {children}
    </>
  );
}
