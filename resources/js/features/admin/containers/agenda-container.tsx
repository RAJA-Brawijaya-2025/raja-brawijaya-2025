import AdminLayout from '../layouts/admin-layout';

const AgendaContainer = () => {
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

export default AgendaContainer;
