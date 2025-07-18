import AdminLayout from '../layouts/admin-layout';

const BeritaContainer = () => {
  return (
    <>
      <AdminLayout
        title="Berita"
        hasButton
        buttonText="Buat Berita"
        buttonAction={() => {
          alert('Button Clicked');
        }}
      />
      <div>Berita Content</div>
    </>
  );
};

export default BeritaContainer;
