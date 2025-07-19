import { TBeritaItem } from '../../types/berita-types';
import BeritaDetailContent from '../components/berita-detail-content';
import BeritaLainList from '../components/berita-lain-list';

const BeritaDetailContainer = ({ berita }: { berita: TBeritaItem }) => {
  return (
    <div className="min-h-screen  font-sora relative my-20 lg:mt-40">
      <div className="flex flex-col-reverse lg:block">
        <BeritaLainList />
        <BeritaDetailContent Berita={berita} />
        <div className="absolute hidden lg:block -top-96 z-10 left-0">
          <img
            className="w-2/3"
            src="/assets/berita/background/bg-batik-berita.webp"
            alt=""
          />
        </div>
      </div>
      <div className="w-screen flex lg:justify-end container mx-auto justify-center">
        <button
          onClick={() => window.history.back()}
          className=" bg-yl-03 text-white px-6 py-2 rounded-2xl text-xl shadow-lg hover:bg-primary/90 transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
};
export default BeritaDetailContainer;
