import BeritaDetailContainer from '@/features/berita/berita-detail/containers/berita-detail-container';
import BaseLayout from '@/shared/Layouts/HomeLayout';
import { daftarBerita } from '@/features/berita/data/dummy';

const BeritaDetail = ({ id }: { id: string }) => {
  const beritaToShow = daftarBerita.find((item) => item.id === id);
  if (!beritaToShow) {
    return <div className="text-center p-10">Berita tidak ditemukan. aa</div>;
  }

  return <BeritaDetailContainer berita={beritaToShow} />;
};

BeritaDetail.layout = (page: React.ReactNode) => (
  <BaseLayout title="Detail Berita">{page}</BaseLayout>
);

export default BeritaDetail;
