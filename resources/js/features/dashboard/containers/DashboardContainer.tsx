import type React from 'react';
import Sidebar from '@/shared/components/sidebar';

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
};

export default DashboardContainer;
