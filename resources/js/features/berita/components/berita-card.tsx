import type { FC } from 'react';
import type { TBeritaItem } from '../types/berita-types';

const BeritaCard: FC<{ berita: TBeritaItem }> = ({ berita }) => {
  return (
    <div className="w-full z-20 hover:scale-105 transition-all duration-300 flex aspect-video font-sora   h-full overflow-hidden border-6 bg-gr-07 border-white rounded-3xl shadow-2xl">
      <div className=" px-3 py-4 w-4/7 flex flex-col justify-between relative">
        <div className="flex flex-col z-20  h-full justify-between ">
          <img
            className=" w-3/4"
            src="/assets/berita/fragments/sticker-berita.svg"
            alt=""
          />
          <div>
            <h4 className="text-yl-03 font-bold lg:text-2xl sm:text-2xl line-clamp-2 ">
              {berita.title}
            </h4>
            <span className="text-white">{berita.date}</span>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={berita.image}
            alt={berita.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#164659]/95 from-30% via-[#164659]/60 to-transparent"></div>
        </div>
      </div>
      <div className="w-3/7 relative p-4 flex flex-col justify-between items-center  lg:p-9 gap-y-4">
        <p className="text-sm lg:text-sm z-20 sm:text-xl xl:text-lg text-white xl:line-clamp-[10] line-clamp-6 md:line-clamp-none lg:line-clamp-6  ">
          {berita.description}
        </p>
        <a
          href={`/berita/${berita.id}`}
          className="bg-yl-03 text-xs md:text-base p-8 py-2 z-20 rounded-xl text-white"
        >
          More
        </a>
        <div className="absolute top-0 z-10 items-end flex flex-col justify-between h-full w-full">
          <img
            className="w-2/3 scale-y-[-1]"
            src="/assets/berita/background/card-bg-berita.webp"
            alt=""
          />{' '}
          <img
            className="w-2/3"
            src="/assets/berita/background/card-bg-berita.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BeritaCard;
