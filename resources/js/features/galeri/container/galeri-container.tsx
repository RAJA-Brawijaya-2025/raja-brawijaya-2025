import GaleriBackground from '../components/galeri-background';
import GaleriCard from '../components/galeri-card';
import GaleriHero from '../components/galeri-hero';

const GaleriContainer = () => {
  return (
    <section className="relative overflow max-w-screen overflow-hidden min-h-screen  bg-galeri ">
      <div className="flex flex-col gap-y-40 md:gap-y-44 xl:gap-0 xl:px-20  xl:flex-row px-5 relative z-20 mx-auto container ">
        <GaleriHero />
        <GaleriCard />
      </div>
      <GaleriBackground />
    </section>
  );
};

export default GaleriContainer;
