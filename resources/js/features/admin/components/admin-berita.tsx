import AdminLayout from '../layouts/admin-layout';

const Berita = () => {
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

export default Berita;
