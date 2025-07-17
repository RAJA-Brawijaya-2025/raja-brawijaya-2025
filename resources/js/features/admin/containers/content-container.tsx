import AdminDashboard from '@/features/admin/components/admin-dashboard';
import AdminPenugasan from '@/features/admin/components/admin-penugasan';
import AdminAbsensi from '@/features/admin/components/admin-absensi';
import AdminMahasiswaBaru from '@/features/admin/components/admin-mahasiswa-baru';
import AdminPerizinan from '@/features/admin/components/admin-perizinan';
import AdminRajaHub from '@/features/admin/components/admin-raja-hub';
import AdminBerita from '@/features/admin/components/admin-berita';
import AdminUkm from '@/features/admin/components/admin-ukm';
import AdminAgenda from '@/features/admin/components/admin-agenda';

export const componentMap = {
  dashboard: AdminDashboard,
  penugasan: AdminPenugasan,
  absensi: AdminAbsensi,
  'mahasiswa-baru': AdminMahasiswaBaru,
  perizinan: AdminPerizinan,
  'raja-hub': AdminRajaHub,
  berita: AdminBerita,
  ukm: AdminUkm,
  agenda: AdminAgenda,
};

export interface ContentContainerProps {
  slug: keyof typeof componentMap;
}

const ContentContainer = ({ slug }: ContentContainerProps) => {
  const Component = componentMap[slug] || AdminDashboard;
  return <Component />;
};

export default ContentContainer;
