import DashboardContainer from './dashboard-container';
import PenugasanContainer from './penugasan-container';
import AbsensiContainer from './absensi-container';
import MahasiswaBaruContainer from './mahasiswa-baru-container';
import PerizinanContainer from './perizinan-container';
import RajaHubContainer from './raja-hub-container';
import BeritaContainer from './berita-container';
import UkmContainer from './ukm-container';
import AgendaContainer from './agenda-container';

export const componentMap = {
  dashboard: DashboardContainer,
  penugasan: PenugasanContainer,
  absensi: AbsensiContainer,
  'mahasiswa-baru': MahasiswaBaruContainer,
  perizinan: PerizinanContainer,
  'raja-hub': RajaHubContainer,
  berita: BeritaContainer,
  ukm: UkmContainer,
  agenda: AgendaContainer,
};

export interface ContentContainerProps {
  slug: keyof typeof componentMap;
}

const ContentContainer = ({ slug }: ContentContainerProps) => {
  const Component = componentMap[slug] || DashboardContainer;
  return <Component />;
};

export default ContentContainer;
