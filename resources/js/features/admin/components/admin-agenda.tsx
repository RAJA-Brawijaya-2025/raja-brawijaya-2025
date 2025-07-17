import AdminLayout from '../layouts/admin-layout';

const Agenda = () => {
  return (
    <>
      <AdminLayout
        title="Agenda"
        hasButton
        buttonText="Buat Agenda"
        buttonAction={() => {
          alert('Button Clicked');
        }}
      />
      <div>Agenda Content</div>
    </>
  );
};

export default Agenda;
