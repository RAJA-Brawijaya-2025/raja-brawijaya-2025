import Hero from '../components/berita-hero';
import BeritaCardSection from '../components/berita-card-section';

const BeritaContainer = () => {
  return (
    <section className="min-h-screen relative">
      <Hero />
      <BeritaCardSection />
    </section>
  );
};

export default BeritaContainer;
