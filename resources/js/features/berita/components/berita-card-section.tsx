import { daftarBerita } from '../data/dummy';
import BeritaCard from './berita-card';
import { BeritaPagination } from './berita-pagination';

const BeritaCardSection = () => {
  return (
    <div className="min-h-screen relative -mt-40 mb-20  bg-white">
      <div className="container  mx-auto">
        <div className="grid gap-12 md:gap-10 lg:gap-24 md:px-12 p-4 lg:px-0 lg:grid-cols-2 grid-cols-1">
          {daftarBerita.map((berita) => (
            <a href={`/berita/${berita.id}`} key={berita.id}>
              <BeritaCard berita={berita} />
            </a>
          ))}
        </div>
      </div>
      <BeritaPagination />
      <div className="absolute w-1/4 z-10 bottom-0 left-0 ">
        <img className="" src="/assets/berita/bg-batik-berita.webp" alt="" />
      </div>
      <div className="absolute scale-x-[-1] w-1/4 z-10 -top-96 right-0 ">
        <img className="" src="/assets/berita/bg-batik-berita.webp" alt="" />
      </div>
    </div>
  );
};

export default BeritaCardSection;
