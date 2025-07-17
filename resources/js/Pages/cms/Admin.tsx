import type { AdminProps } from '@/shared/types/admin';
import AdminContainer from '@/features/admin/containers/admin-container';

const Admin = ({ slug }: AdminProps) => {
  return <AdminContainer slug={slug} />;
};

export default Admin;
