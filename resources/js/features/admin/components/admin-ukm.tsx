import AdminLayout from '../layouts/admin-layout';

const Ukm = () => {
  return (
    <>
      <AdminLayout
        title="UKM"
        hasButton
        buttonText="Tambah UKM"
        buttonAction={() => {
          alert('Button Clicked');
        }}
      />
      <div>UKM Content</div>
    </>
  );
};

export default Ukm;
