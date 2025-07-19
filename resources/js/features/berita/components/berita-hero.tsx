const Hero = () => {
  return (
    <div className="h-screen w-full relative flex-col my-10 lg:my-30 top-0 flex items-center ">
      <div className="w-full h-full z-20">
        <div className="w-full min-h-24 bg-contain bg-center repeat-x bg-[url('/assets/berita/fragments/batik-head-berita.webp')] -mb-6 relative scale-y-[-1] " />
        <div className="bg-gradient-to-t overflow-hidden relative flex items-center justify-center w-full h-2/3 from-[#184D62] via-[#1D5D77] to-[#184D62] via-[52.88%] to-[96.63%]">
          <img
            className="w-full md:w-2/3 lg:w-1/2 z-20 absolute top-1/2 -translate-y-1/2"
            src="/assets/berita/fragments/hero-title-berita.webp"
            alt=""
          />
          <img
            className="w-full md:w-2/4 lg:w-2/5 top-6 lg:top-1/2 lg:-translate-y-1/2 blur-[1px] absolute left-0"
            src="/assets/berita/background/hero-batik-berita.webp"
            alt=""
          />{' '}
          <img
            className="w-full md:w-2/4 scale-y-[-1] lg:scale-y-[1] lg:w-2/5 bottom-6 lg:top-1/2 lg:-translate-y-1/2 blur-[1px] absolute right-0 scale-x-[-1]"
            src="/assets/berita/background/hero-batik-berita.webp"
            alt=""
          />
        </div>
        <div className="w-full min-h-24 bg-contain bg-center repeat-x bg-[url('/assets/berita/fragments/batik-head-berita.webp')] -mt-6 " />
      </div>
      <div className="absolute hidden lg:block -top-96 z-10 left-0">
        <img
          className="w-2/3"
          src="/assets/berita/background/bg-batik-berita.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
