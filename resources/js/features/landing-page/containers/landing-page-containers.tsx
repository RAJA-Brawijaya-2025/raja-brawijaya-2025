import { Head } from '@inertiajs/react';
import Hero from '../components/hero';
import RajaBrawijaya from '../components/raja-brawijaya';
import Filosofi from '../components/filosofi';
import BukuPanduan from '../components/buku-panduan';
import Rangkaian from '../components/rangkaian';
import Fakultas from '../components/fakultas';
const LandingPageContainer = () => {
  return (
    <div className="relative w-full flex flex-col overflow-hidden justify-center">
      <Hero />
      <RajaBrawijaya />
      <Filosofi />
      <BukuPanduan />
      <Rangkaian />
      <Fakultas />
    </div>
  );
};
export default LandingPageContainer;
