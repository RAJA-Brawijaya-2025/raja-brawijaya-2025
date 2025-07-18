import AdminLayout from '../layouts/admin-layout';

const AbsensiContainer = () => {
  return (
    <>
      <AdminLayout
        title="Absensi"
        hasButton
        buttonText="Buat Presensi"
        buttonAction={() => {
          alert('Button Clicked');
        }}
      />
      <div>Absensi Content</div>
    </>
  );
};

export default AbsensiContainer;
