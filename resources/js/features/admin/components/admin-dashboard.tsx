import AdminLayout from '../layouts/admin-layout';
import { DashboardChart } from './admin-chart';

const Dashboard = () => {
  return (
    <>
      <AdminLayout title="Dashboard" />
      <DashboardChart />
    </>
  );
};

export default Dashboard;
