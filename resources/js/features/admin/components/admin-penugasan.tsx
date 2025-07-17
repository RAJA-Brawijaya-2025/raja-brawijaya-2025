import AdminLayout from '../layouts/admin-layout';

const Penugasan = () => {
  return (
    <>
      <AdminLayout
        title="Penugasan"
        hasButton
        buttonText="Tambah Penugasan"
        buttonAction={() => alert('Tambah Penugasan')}
      />
      <div>UKM Content</div>
    </>
  );
};

export default Penugasan;
