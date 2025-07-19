import Hero from '../components/berita-hero';
import BeritaSection from '../components/berita-section';

const BeritaContainer = () => {
  return (
    <section className="min-h-screen relative">
      <Hero />
      <BeritaSection />
    </section>
  );
};

export default BeritaContainer;
