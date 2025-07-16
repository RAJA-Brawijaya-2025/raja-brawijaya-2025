import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Search } from 'lucide-react';
import { Pagination } from './ukm-pagination';
import { Kategori } from '@/features/ukm/configs/filter-data';
import { UkmCard } from './ukm-card';

const UkmMain = () => {
  const BgOrnamen = () => {
    return (
      <>
        <img
          src="/assets/fragments/ukm-background-4.svg"
          alt="orname"
          className="absolute left-0 -top-24 -scale-x-100 w-1/4 pointer-events-none select-none"
        />
        <img
          src="/assets/fragments/ukm-background-4.svg"
          alt="orname"
          className="absolute right-0 -top-24 w-1/4 pointer-events-none select-none"
        />
        <img
          src="/assets/fragments/ukm-background.svg"
          alt="orname"
          className="absolute left-0 bottom-0 -scale-x-100 w-1/4 pointer-events-none select-none"
        />
        <img
          src="/assets/fragments/ukm-background.svg"
          alt="orname"
          className="absolute right-0 bottom-0 w-1/4 pointer-events-none select-none"
        />
      </>
    );
  };

  return (
    <section className="min-h-screen h-max pb-28 relative w-full">
      <BgOrnamen />
      <main className="container mx-auto h-max px-4">
        <div>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <h2 className="text-gr-05 font-extrabold text-4xl md:text-5xl font-sora">
              Kategori
            </h2>
            <div className="relative flex items-center w-full md:w-max">
              <Search
                className="absolute left-1 top-0 mt-2 ml-2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Cari di sini ygy..."
                className="w-full md:w-max pl-10 border-2 border-gr-05"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-10 overflow-scroll">
            {Kategori.map((item, index) => (
              <Button
                variant="tertiary"
                key={index}
                className={`px-9 py-5 border rounded-xl text-center transition-all
                            ${
                              index === 1
                                ? 'bg-gr-05 text-white shadow-[inset_-4px_4px_4px_rgba(255,255,255,0.25),0px_0px_4px_0px_#1D5D77]'
                                : 'text-gr-05 shadow-[0px_0px_2px_0px_#1D5D77] hover:bg-gray-100'
                            }`}
              >
                <p className="font-bold text-base">{item.label}</p>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, idx) => (
            <UkmCard key={idx} />
          ))}
        </div>
        <div className="mt-18">
          <Pagination />
        </div>
      </main>
    </section>
  );
};

export default UkmMain;
