import UkmContainer from '@/features/ukm/containers/ukm-container';
import BaseLayout from '@/shared/Layouts/HomeLayout';

const Ukm = () => {
  return <UkmContainer />;
};

Ukm.layout = (page: React.ReactNode) => (
  <BaseLayout title="UKM">{page}</BaseLayout>
);

export default Ukm;
