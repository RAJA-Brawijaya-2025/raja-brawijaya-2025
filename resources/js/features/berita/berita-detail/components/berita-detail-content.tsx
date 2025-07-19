import type { TBeritaItem } from '../../types/berita-types';

const BeritaDetailContent: React.FC<{ Berita: TBeritaItem }> = ({ Berita }) => {
  return (
    <div className="w-full container mx-auto p-4">
      <div className="w-full min-h-[1500px] relative rounded-4xl lg:rounded-[60px] bg-white shadow-[0px_0px_20px_0px] shadow-black/50">
        <div className="flex flex-col items-center lg:pt-24 lg:px-52 px-10 py-20 text-xl   lg:text-5xl ">
          <h2 className="text-center font-bold">{Berita.title}</h2>
          <p className="lg:text-xl text-base mt-16">{Berita.description}</p>
        </div>
        <div className="w-full h-full top-0 absolute">
          <img
            className="w-2/8 lg:w-1/8 absolute left-4 top-4"
            src="/assets/berita/fragments/ornament-card-berita-detail.webp"
            alt=""
          />
          <img
            className="w-2/8 lg:w-1/8 absolute right-4 top-4 scale-x-[-1]"
            src="/assets/berita/fragments/ornament-card-berita-detail.webp"
            alt=""
          />{' '}
          <img
            className="w-2/8 lg:w-1/8 absolute left-4 bottom-4 scale-y-[-1] "
            src="/assets/berita/fragments/ornament-card-berita-detail.webp"
            alt=""
          />
          <img
            className="w-2/8 lg:w-1/8 absolute right-4 bottom-4 scale-x-[-1] scale-y-[-1]"
            src="/assets/berita/fragments/ornament-card-berita-detail.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BeritaDetailContent;
