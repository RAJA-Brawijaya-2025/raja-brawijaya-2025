import type React from 'react';
import Sidebar from '@/shared/components/sidebar';

const AdminContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10 bg-[#F1F4F9]">{children}</main>
    </div>
  );
};

export default AdminContainer;
