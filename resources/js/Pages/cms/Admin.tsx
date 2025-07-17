import type { AdminProps } from '@/shared/types/admin';
import AdminContainer from '@/features/admin/containers/admin-container';
import { Head } from '@inertiajs/react';

const Admin = ({ slug }: AdminProps) => {
  return (
    <>
      <Head title={slug.toUpperCase()} />
      <AdminContainer slug={slug} />
    </>
  );
};

export default Admin;
