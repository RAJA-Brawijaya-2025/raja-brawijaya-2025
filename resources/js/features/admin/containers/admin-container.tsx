import Sidebar from '@/shared/components/sidebar';
import ContentContainer from './content-container';

import type { ContentContainerProps } from './content-container';

const AdminContainer = ({ slug }: ContentContainerProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10 bg-[#F1F4F9]">
        <ContentContainer slug={slug} />
      </main>
    </div>
  );
};

export default AdminContainer;
