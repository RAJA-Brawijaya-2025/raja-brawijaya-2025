const UkmHero = () => {
  const OuterFrame = () => (
    <>
      <div className="absolute -top-22 z-20 flex rotate-180">
        <img
          src="/assets/ukm/fragments/outer-hero.svg"
          alt="UKM Hero Outer Frame"
          className="w-full"
        />
        <img
          src="/assets/ukm/fragments/outer-hero.svg"
          alt="UKM Hero Outer Frame"
          className="w-full"
        />
        <img
          src="/assets/ukm/fragments/outer-hero.svg"
          alt="UKM Hero Outer Frame"
          className="w-full"
        />
      </div>
      <div className="absolute -bottom-22 z-20 flex">
        <img
          src="/assets/ukm/fragments/outer-hero.svg"
          alt="UKM Hero Outer Frame"
          className="w-full"
        />
        <img
          src="/assets/ukm/fragments/outer-hero.svg"
          alt="UKM Hero Outer Frame"
          className="w-full"
        />
        <img
          src="/assets/ukm/fragments/outer-hero.svg"
          alt="UKM Hero Outer Frame"
          className="w-full"
        />
      </div>
    </>
  );

  return (
    <section className="min-h-screen text-center relative w-full grid place-items-center">
      <img
        src="/assets/fragments/ukm-background.svg"
        alt="fragments"
        className="absolute right-0 top-0 rotate-180 w-1/3 z-0"
        style={{ transform: 'scaleX(-1)' }}
      />
      <div className="z-10 bg-gr-05 w-full h-1/2 relative">
        <img
          src="/assets/ukm/fragments/inner-hero.svg"
          alt="UKM Hero"
          className="absolute h-full object-contain left-0"
        />
        <img
          src="/assets/ukm/fragments/inner-hero.svg"
          alt="UKM Hero"
          className="absolute h-full object-contain right-0 rotate-180"
        />
        <OuterFrame />
        <div className="h-full space-y-4 grid place-content-center">
          <div className="relative">
            <h1
              className="absolute w-full left-0 text-8xl font-raillinc bg-clip-text text-transparent"
              style={{
                WebkitTextStroke: '2px white',
                color: 'transparent',
                filter: 'drop-shadow(2px 3px 4px rgba(0,0,0,0.3))',
              }}
            >
              UKM
            </h1>
            <h1 className="relative text-8xl font-raillinc bg-gradient-yellow-02 text-transparent bg-clip-text">
              UKM
            </h1>
          </div>
          <div className="relative">
            <p
              className="absolute w-full left-0 text-6xl font-raillinc bg-clip-text text-transparent"
              style={{
                WebkitTextStroke: '2px white',
                color: 'transparent',
                filter: 'drop-shadow(2px 3px 4px rgba(0,0,0,0.3))',
              }}
            >
              Unit Kegiatan Mahasiswa
            </p>
            <p className="relative text-6xl font-raillinc bg-gradient-yellow-02 text-transparent bg-clip-text">
              Unit Kegiatan Mahasiswa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UkmHero;
