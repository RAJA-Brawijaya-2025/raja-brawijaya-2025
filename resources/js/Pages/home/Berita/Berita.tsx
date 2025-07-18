import BeritaContainer from '@/features/berita/containers/berita-container';
import BaseLayout from '@/shared/Layouts/HomeLayout';

const Berita = () => {
  return <BeritaContainer />;
};

Berita.layout = (page: React.ReactNode) => (
  <BaseLayout title="Berita">{page}</BaseLayout>
);

export default Berita;
