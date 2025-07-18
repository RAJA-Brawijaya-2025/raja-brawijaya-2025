import AdminLayout from '../layouts/admin-layout';
import { DashboardChart } from '../components/dashboard-chart';
import DashboardDesc from '../components/dashboard-desc';

const DashboardContainer = () => {
  return (
    <>
      <AdminLayout title="Dashboard" />
      <div className="flex gap-4">
        <div className="w-3/4">
          <DashboardChart />
        </div>
        <div className="w-1/4">
          <DashboardDesc />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
