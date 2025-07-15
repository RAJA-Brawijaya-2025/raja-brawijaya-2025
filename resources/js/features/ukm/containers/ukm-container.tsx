import UkmHero from '../components/hero';
import UkmMain from '../components/main';

const UkmContainer = () => {
  return (
    <main className="min-h-screen w-full mx-auto">
      <UkmHero />
      <UkmMain />
    </main>
  );
};

export default UkmContainer;
