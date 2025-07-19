import { Head } from '@inertiajs/react';
import MainSection from '../components/MainSection';

const NotFound = () => {
  return (
    <>
      <Head title="Not Found" />
      <section className="h-screen w-full relative overflow-hidden flex items-center justify-center">
        <img
          src="/assets/notfound/center.png"
          alt="bg"
          className="absolute inset-0 object-contain object-center w-full h-full lg:scale-75 z-0"
        />
        <MainSection />
      </section>
    </>
  );
};

export default NotFound;
