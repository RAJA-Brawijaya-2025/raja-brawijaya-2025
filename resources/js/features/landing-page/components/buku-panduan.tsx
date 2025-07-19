import EntryAnimation from './entry-animation';

const BukuPanduan = () => {
  return (
    <div className="flex flex-col justify-between items-center sm:mt-0 mt-[20vw] sm:px-0 px-2 relative ">
      <div className="flex flex-row items-center mt-[-2vw] ">
        <div className="flex flex-col sm:items-center gap-y-10">
          <EntryAnimation type="scale" delay={0.5} duration={1}>
            <div className="flex flex-col items-start sm:items-center mt-[-2vw] leading-[10vw] sm:leading-[5vw] w-[60vw]">
              <p className="font-sora text-[#1D5D77] text-[clamp(1.5vw,12vw,10rem)] sm:text-[clamp(1.5vw,5vw,10rem)] font-bold ">
                Buku Panduan
              </p>
              <h1 className="font-raillinc text-[#372D6F] text-[clamp(1.5vw,6vw,10rem)] sm:text-[clamp(1.5vw,3.5vw,10rem)]">
                RAJA Brawijaya
              </h1>
            </div>
          </EntryAnimation>
          <EntryAnimation
            type="slide"
            direction="left"
            delay={0.5}
            duration={1}
          >
            <div className=" sm:w-[55vw] flex flex-col items-center relative">
              <img
                src="/assets/landingpage/mobile/bg-buku.webp"
                alt="buku-panduan"
                className=" w-full z-10 sm:hidden block"
              />
              <img
                src="/assets/landingpage/bukupanduan/background.webp"
                alt="buku-panduan"
                className="sm:w-[55vw] w-full z-10 sm:block hidden"
              />
              <div
                style={{
                  zIndex: 40,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                }}
              >
                <iframe
                  title="Buku Panduan RAJA Brawijaya 2025"
                  style={{
                    borderRadius: '10px',
                    position: 'absolute',
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                  }}
                  src="https://online.fliphtml5.com/wdgeq/ruqz/"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                  allow="fullscreen"
                />
              </div>
              <img
                src="/assets/landingpage/bukupanduan/ornaments.webp"
                alt="buku-panduan"
                className="absolute top-0 w-[57vw] sm:w-[35vw] z-30 left-0 left-[-7%] sm:left-[-13.5%]"
              />
              <img
                src="/assets/landingpage/bukupanduan/ornaments.webp"
                alt="buku-panduan"
                className="absolute top-0 w-[57vw] sm:w-[35vw] z-30 scale-x-[-1] right-[-7%] sm:right-[-13.5%]"
              />
              <img
                src="/assets/landingpage/bukupanduan/ornaments-bottom.webp"
                alt="buku-panduan"
                className="absolute bottom-[-20%] z-10 sm:bottom-[-21%] w-[57vw] sm:w-[35vw] "
              />
            </div>
          </EntryAnimation>
        </div>
        <EntryAnimation
          type="slide"
          delay={0.5}
          duration={1}
          direction="right"
          amount={0.6}
        >
          <div className="ml-[-10vw] sm:block hidden mr-[-10vw] z-10 mb-[5vw] absolute w-[50vw] z-40 relative">
            <img
              src="/assets/landingpage/bukupanduan/wayang.webp"
              alt="buku-panduan"
              className="w-full sm:w-[50vw] "
            />
            <img
              src="/assets/landingpage/bukupanduan/awan-ungu.webp"
              alt="buku-panduan"
              className="absolute w-[25vw] bottom-[-10%] right-[0%] animate-float"
            />
            <img
              src="/assets/landingpage/bukupanduan/awan-kecil.webp"
              alt="buku-panduan"
              className="absolute w-[12vw] bottom-[0%] left-[30%] animate-float"
            />
            <img
              src="/assets/landingpage/bukupanduan/awan-kecil.webp"
              alt="buku-panduan"
              className="absolute w-[12vw] bottom-[30%] -z-10 scale-x-[-1] right-[0%] animate-float"
            />
          </div>
        </EntryAnimation>
      </div>

      <div className=" z-10 sm:hidden absolute w-[60vw] right-0 top-[-18%]  ">
        <EntryAnimation type="slide" direction="right" delay={0.5} duration={1}>
          <img
            src="/assets/landingpage/bukupanduan/wayang.webp"
            alt="buku-panduan"
            className="w-full sm:w-[50vw] "
          />

          <img
            src="/assets/landingpage/bukupanduan/awan-ungu.webp"
            alt="buku-panduan"
            className="absolute w-[25vw] bottom-[-10%] right-[0%] animate-float"
          />
          <img
            src="/assets/landingpage/bukupanduan/awan-kecil.webp"
            alt="buku-panduan"
            className="absolute w-[12vw] bottom-[0%] left-[30%] animate-float"
          />
          <img
            src="/assets/landingpage/bukupanduan/awan-kecil.webp"
            alt="buku-panduan"
            className="absolute w-[12vw] bottom-[30%] -z-10 scale-x-[-1] right-[0%] animate-float"
          />
        </EntryAnimation>
      </div>
      
      <EntryAnimation
        type="fade"
        delay={0.5}
        duration={1}
        className="-z-10 opacity-10"
      >
        <div className="-z-10 opacity-10">
          <img
            src="/assets/landingpage/bukupanduan/daun.webp"
            alt="daun"
            className="absolute bottom-0 left-0 w-[20vw]"
          />
          <img
            src="/assets/landingpage/bukupanduan/daun.webp"
            alt="daun"
            className="absolute top-0 right-0 w-[20vw]"
          />
          <img
            src="/assets/landingpage/bukupanduan/daun.webp"
            alt="daun"
            className="absolute bottom-0 right-0 w-[15vw]"
          />
          <img
            src="/assets/landingpage/bukupanduan/daun.webp"
            alt="daun"
            className="absolute top-[25%] left-[5%] w-[20vw]"
          />
          <img
            src="/assets/landingpage/bukupanduan/daun.webp"
            alt="daun"
            className="absolute top-[5%] right-[35%] w-[10vw] rotate-[-71.46deg]"
          />
          <img
            src="/assets/landingpage/bukupanduan/daun.webp"
            alt="daun"
            className="absolute bottom-0 right-[30%] w-[15vw] rotate-[134.95deg] "
          />
          <img
            src="/assets/landingpage/bukupanduan/daun.webp"
            alt="daun"
            className="absolute top-0 left-0 w-[10vw] rotate-[134.95deg] "
          />
        </div>
      </EntryAnimation>
      <img
        src="/assets/landingpage/rangkaian/ukiran.webp"
        alt="buku-panduan"
        className="w-full mt-10"
      />
    </div>
  );
};

export default BukuPanduan;
