import RajaHub from '@/features/raja-hub/containers/raja-hub-container';
import BaseLayout from '@/shared/Layouts/HomeLayout';

const Rajahub = () => {
  return <RajaHub />;
};
Rajahub.layout = (page: React.ReactNode) => (
  <BaseLayout title="Raja Hub">{page}</BaseLayout>
);

export default Rajahub;
