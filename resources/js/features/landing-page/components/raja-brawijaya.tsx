import EntryAnimation from './entry-animation';

const RajaBrawijaya = () => {
  return (
    <div className="min-h-screen flex-col flex gap-y-3 justify-center z-30 bg-white items-center relative">
      <EntryAnimation
        delay={1.8}
        duration={1}
        className="z-20 items-center flex-col flex justify-center"
        amount="all"
        direction="down"
      >
        <p className="z-20 font-sora text-[#1D5D77] sm:text-[clamp(1.5vw,3vw,5rem)] text-[clamp(1.5vw,8vw,10rem)]">
          Pengenalan
        </p>
        <h1 className="z-20 font-raillinc text-[#372D6F] sm:text-[clamp(1.5vw,5vw,5rem)] text-[clamp(1.5vw,8vw,10rem)]">
          RAJA Brawijaya
        </h1>
      </EntryAnimation>
      <EntryAnimation delay={1} duration={1} type="scale" className="z-20">
        <div
          className="sm:w-[40vw] w-[90vw] h-[60vw] sm:h-[20vw] bg-[#1D5D77] px-3 py-3 rounded-3xl flex flex-col justify-between overflow-hidden z-20"
          style={{
            boxShadow:
              'inset -4px 4px 8px 0 rgba(255,255,255,0.5), -4px 4px 8px rgba(0,0,0,0.25)',
            filter: 'drop-shadow(-4px 4px 8px rgba(0,0,0,0.25))',
          }}
        >
          <div className="flex justify-between flex-row">
            <img
              src="/assets/landingpage/rajabrawijaya/ornaments.webp"
              alt="raja-brawijaya"
              className="w-[20vw] sm:w-[10vw]"
            />
            <img
              src="/assets/landingpage/rajabrawijaya/ornaments.webp"
              alt="raja-brawijaya"
              className="scale-x-[-1] w-[20vw] sm:w-[10vw]"
            />
          </div>
          <div className="flex justify-between flex-row ">
            <img
              src="/assets/landingpage/rajabrawijaya/ornaments-bottom.webp"
              alt="raja-brawijaya"
              className="w-[20vw] sm:w-[10vw]"
            />
            <img
              src="/assets/landingpage/rajabrawijaya/ornaments-bottom.webp"
              alt="raja-brawijaya"
              className="scale-x-[-1] w-[20vw] sm:w-[10vw]"
            />
          </div>
        </div>
      </EntryAnimation>
      <EntryAnimation delay={1.8} duration={1}>
        <p className="mb-[10vw] sm:mb-0 z-20 text-center text-[#1D5D77] w-[85vw] sm:w-[50vw] sm:text-[clamp(1vw,1.5vw,2rem)] text-[clamp(1.5vw,4.75vw,5rem)] text-center ">
          <span className="text-[#C99C0B]">RAJA Brawijaya</span> atau{' '}
          <span className="text-[#C99C0B]">
            Rangkaian Acara Jelajah Almamater Universitas Brawijaya
          </span>{' '}
          merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi
          mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal terkait
          kehidupan kampus dimana RAJA Brawijaya terdiri dari dua rangkaian
          yaitu PKKMB, OH.
        </p>
      </EntryAnimation>
      <EntryAnimation
        className="w-[20vw] absolute left-0 rotate-[-25.65deg] top-[35%]"
        type="fade"
        duration={3}
        delay={0}
      >
        <img
          src="/assets/landingpage/rajabrawijaya/burung.webp"
          alt="raja-brawijaya"
        />
      </EntryAnimation>
      <EntryAnimation
        className="w-[35vw] absolute right-[5%] top-[9%]"
        type="fade"
        duration={3}
        delay={0}
      >
        <img
          src="/assets/landingpage/rajabrawijaya/burung.webp"
          alt="raja-brawijaya"
        />
      </EntryAnimation>
      <EntryAnimation
        direction="right"
        className="w-[45vw] absolute right-[-23%] sm:block hidden animate-spin"
        duration={1}
        delay={1}
      >
        <img
          src="/assets/landingpage/rajabrawijaya/roda.webp"
          alt="raja-brawijaya"
        />
      </EntryAnimation>
      <EntryAnimation
        className="w-[20vw] absolute left-[-10%] top-10 sm:block hidden animate-spin"
        duration={1}
        delay={1}
        direction="left"
      >
        <img
          src="/assets/landingpage/rajabrawijaya/roda.webp"
          alt="raja-brawijaya"
        />
      </EntryAnimation>
      <EntryAnimation
        className="w-[20vw] absolute left-[-10%] bottom-0 sm:block hidden animate-spin-inverted"
        duration={1}
        delay={1}
        direction="left"
      >
        <img
          src="/assets/landingpage/rajabrawijaya/roda.webp"
          alt="raja-brawijaya"
        />
      </EntryAnimation>
    </div>
  );
};

export default RajaBrawijaya;
