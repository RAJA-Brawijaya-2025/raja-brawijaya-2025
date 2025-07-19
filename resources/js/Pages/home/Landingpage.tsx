import LandingPage from '@/features/landing-page/containers/landing-page-containers';
import BaseLayout from '@/shared/Layouts/HomeLayout';

const Landingpage = () => {
  return <LandingPage />;
};
Landingpage.layout = (page: React.ReactNode) => (
  <BaseLayout title="Landing Page">{page}</BaseLayout>
);

export default Landingpage;
