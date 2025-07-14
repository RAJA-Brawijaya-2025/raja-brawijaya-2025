import GaleriContainer from '@/features/galeri/container/galeri-container';
import BaseLayout from '@/shared/Layouts/HomeLayout';

const Galeri = () => {
  return <GaleriContainer />;
};

Galeri.layout = (page: React.ReactNode) => (
  <BaseLayout title="Galeri">{page}</BaseLayout>
);

export default Galeri;
