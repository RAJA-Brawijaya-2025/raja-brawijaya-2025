import { Button } from '@/shared/components/ui/button';

export const UkmCard = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-8">
      <header className="grid place-items-center gap-1">
        <img
          src="/assets/ukm/fragments/top-card.svg"
          alt="fragments"
          className="max-w-24 pointer-events-none"
        />
        <div className="relative flex justify-center items-center">
          <img
            src="/assets/ukm/fragments/title-card.svg"
            alt="fragments"
            className="max-w-56"
          />
          <p className="absolute inset-0 flex justify-center items-center text-white font-bold font-sora text-xl">
            UABT
          </p>
        </div>
      </header>
      <article className="px-4 grid place-items-center relative">
        <img src="/assets/ukm/fragments/content-card.svg" alt="content" />
        <div className="absolute inset-0 flex gap-4 justify-center items-center">
          <span className="size-16 bg-active rounded-full" />
          <div className="max-w-44 space-y-2">
            <p className="text-[1.5em] leading-7 font-bold font-sora text-gr-05">
              Unit Aktivitas Bulu Tangkis
            </p>
            <Button className="rounded-[8px] bg-gradient-to-t from-[#13B2BE] to-[#0C4C66] shadow-[inset_0px_4px_4px_rgba(255,255,255,0.25),0px_0px_4px_0px_rgba(29,93,119,0.04)] text-white font-bold w-3/4 text-xs">
              Baca Selengkapnya
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};
