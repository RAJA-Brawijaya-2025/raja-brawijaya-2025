import { Head } from '@inertiajs/react';
import Loader from '../components/loader';
import CloudFrame from '../components/cloud-frame';
import Main from '../components/main-section';

const ComingSoon = () => {
  return (
    <>
      <Head title="Coming Soon" />
      <section className="bg-gradient-to-t from-[#1D5D77] via-[#83B3B6] to-white flex h-screen w-full relative overflow-hidden">
        <img
          src="/assets/comingsoon/center.png"
          alt="bg"
          className="absolute inset-0 object-contain object-center w-full h-full scale-75"
        />
        <CloudFrame />
        <Loader />
        <Main />
      </section>
    </>
  );
};

export default ComingSoon;
