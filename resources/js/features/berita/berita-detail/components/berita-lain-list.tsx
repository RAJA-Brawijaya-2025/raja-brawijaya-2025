import { useState } from 'react';
import { daftarBerita } from '../../data/dummy';
import { ChevronRight } from 'lucide-react';
import BeritaLainCard from './berita-lain-card';
import { usePagination } from '@/shared/hooks/use-pagination';

const BeritaLainList = () => {
  const { paginatedData, nextPage } = usePagination(daftarBerita, 3);

  return (
    <div className="relative  container mx-auto p-4  flex flex-col-reverse lg:flex-col h-fullw items-end w-full ">
      <div className="flex items-center gap-6 ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {paginatedData.map((berita) => (
            <a href={`/berita/${berita.id}`} key={berita.id}>
              <BeritaLainCard berita={berita} />
            </a>
          ))}
        </div>
        <button
          onClick={nextPage}
          className="hidden lg:block rounded-full border bg-white p-2 text-gray-700 shadow-md transition hover:bg-gray-100"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex w-full my items-center my-14 gap-6">
        <h2 className="flex-shrink-0 text-xl lg:text-5xl font-bold text-gr-07">
          Berita Lainnya
        </h2>
        <div className="h-1 w-full bg-black" />
      </div>
    </div>
  );
};

export default BeritaLainList;
