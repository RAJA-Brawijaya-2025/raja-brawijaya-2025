import type { TBeritaItem } from '../../types/berita-types';

const BeritaLainCard: React.FC<{ berita: TBeritaItem }> = ({ berita }) => {
  return (
    <div className="flex lg:max-w-48 hover:scale-105 transition-all duration-300 w-full h-full lg:aspect-[3/4] flex-col justify-between rounded-2xl bg-gradient-to-t from-[#184D62] via-[#1D5D77] to-[#184D62] p-4 shadow-lg">
      <div className="w-full px-3 py-1">
        <img
          className="h-6"
          src="/assets/berita/fragments/sticker-berita.svg"
          alt="Raja Brawijaya"
        />
      </div>
      <div>
        <h3 className="mb-2 text-2xl line-clamp-2 font-bold text-yellow-400">
          {berita.title}
        </h3>
        <p className="text-sm text-white">{berita.date}</p>
      </div>
    </div>
  );
};

export default BeritaLainCard;
