import AdminLayout from '../layouts/admin-layout';
import { DashboardChart } from '../components/admin-chart';

const DashboardContainer = () => {
  return (
    <>
      <AdminLayout title="Dashboard" />
      <DashboardChart />
    </>
  );
};

export default DashboardContainer;
