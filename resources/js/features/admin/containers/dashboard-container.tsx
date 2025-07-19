import AdminLayout from '../layouts/admin-layout';
import { DashboardChart } from '../components/dashboard-chart';
import DashboardDesc from '../components/dashboard-desc';

const DashboardContainer = () => {
  return (
    <>
      <AdminLayout title="Dashboard" />
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          <DashboardChart />
        </div>
        <div className="w-full md:w-1/4">
          <DashboardDesc />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
