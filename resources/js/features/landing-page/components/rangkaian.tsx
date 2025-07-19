import FlipCard from './flip-card';
import EntryAnimation from './entry-animation';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Rangkaian = () => {
  const pkkmbFront = (
    <div
      className="w-full h-full gap-y-3 px-3 py-3 flex flex-col items-center justify-center rounded-3xl bg-[linear-gradient(180deg,_#FCC61A_0%,_#96760F_100%)]"
      style={{
        boxShadow:
          'inset -8px 8px 4px 0px #FFFFFF80, 0px 4px 4px 0px #00000040',
        filter: 'drop-shadow(0px 4px 4px 0px #00000040)',
      }}
    >
      <img
        src="/assets/landingpage/rangkaian/ornaments.webp"
        alt="rangkaian"
        className="w-[40vw] sm:w-[20vw]"
      />
      <h2 className="font-raillinc text-[#FFECA1] text-[clamp(1.5vw,7vw,5rem)] sm:text-[clamp(1.5vw,3vw,5rem)] text-center">
        PKKMB
      </h2>
      <img
        src="/assets/landingpage/rangkaian/ornaments.webp"
        alt="rangkaian"
        className="w-[40vw] sm:w-[20vw] rotate-180"
      />
    </div>
  );
  const pkkmbBack = (
    <div
      className="w-full h-full gap-y-3 px-3 py-3 flex text-center flex-col items-center rounded-3xl bg-[#FCC61A]"
      style={{
        boxShadow:
          'inset -8px 8px 4px 0px #FFFFFF80, 0px 4px 4px 0px #00000040',
        filter: 'drop-shadow(0px 4px 4px 0px #00000040)',
      }}
    >
      <h3 className="font-extrabold font-sora text-[clamp(1.5vw,8vw,5rem)] sm:text-[clamp(1.5vw,4vw,5rem)] text-[#917006] sm:text-xl mb-2">
        PKKMB
      </h3>
      <p className="text-[clamp(1.5vw,3vw,5rem)] sm:text-[clamp(1.5vw,0.5vw,5rem)] w-[60vw] sm:w-[25vw] text-[#917006] font-sora ">
        PKKMB atau Pengenalan Kehidupan Kampus Mahasiswa Baru Universitas
        Brawijaya merupakan kegiatan penyambutan mahasiswa baru yang bertujuan
        untuk mengenal lebih dekat Universitas Brawijaya dengan harapan
        terbentuk rasa cinta dan rasa bangga akan almamaternya
      </p>
    </div>
  );
  const openHouseFront = (
    <div
      className="w-full h-full gap-y-3 px-3 py-3 flex flex-col items-center justify-center rounded-3xl bg-[linear-gradient(180deg,_#FCC61A_0%,_#96760F_100%)]"
      style={{
        boxShadow:
          'inset -8px 8px 4px 0px #FFFFFF80, 0px 4px 4px 0px #00000040',
        filter: 'drop-shadow(0px 4px 4px 0px #00000040)',
      }}
    >
      <img
        src="/assets/landingpage/rangkaian/ornaments.webp"
        alt="rangkaian"
        className="w-[40vw] sm:w-[20vw]"
      />
      <h2 className="font-raillinc text-[#FFECA1] text-[clamp(1.5vw,7vw,5rem)] sm:text-[clamp(1.5vw,3vw,5rem)] text-center">
        OPEN HOUSE
      </h2>
      <img
        src="/assets/landingpage/rangkaian/ornaments.webp"
        alt="rangkaian"
        className="w-[40vw] sm:w-[20vw] rotate-180"
      />
    </div>
  );
  const openHouseBack = (
    <div
      className="w-full h-full gap-y-3 px-3 py-3 flex text-center flex-col items-center rounded-3xl bg-[#FCC61A]"
      style={{
        boxShadow:
          'inset -8px 8px 4px 0px #FFFFFF80, 0px 4px 4px 0px #00000040',
        filter: 'drop-shadow(0px 4px 4px 0px #00000040)',
      }}
    >
      <h3 className="font-extrabold font-sora text-[clamp(1.5vw,8vw,5rem)] sm:text-[clamp(1.5vw,4vw,5rem)] text-[#917006]  mb-2">
        Open House
      </h3>
      <p className="text-[clamp(1.5vw,3vw,5rem)] sm:text-[clamp(1.5vw,1vw,5rem)] w-[60vw] sm:w-[25vw] text-[#917006] font-sora ">
        OH merupakan kegiatan penutup dari rangkaian acara RAJA Brawijaya dimana
        mahasiswa baru dapat mengenal dan memilih LKM atau UKM yang ada di
        kampus Universitas Brawijaya sesuai dengan bakat serta minat yang
        dimiliki.
      </p>
    </div>
  );

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: 'center center',
          end: 'bottom bottom',
        },
      });

      tl.to(titleRef.current, {
        scale: 15,
        autoAlpha: 0,
        ease: 'power1.in',
      }).to(
        cardsRef.current,
        { opacity: 1, scale: 1, ease: 'power1.out' },
        '<50%',
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[150vh] sticky top-0 h-screen w-full flex justify-center items-center bg-[#1D5D77] overflow-hidden"
    >
      <img
        ref={titleRef}
        src="/assets/landingpage/rangkaian/title.webp"
        alt="Rangkaian Acara"
        className="absolute w-[40vw] top-[40%] sm:w-[30vw] z-20"
      />
      <img
        src="/assets/landingpage/rangkaian/batik.webp"
        alt="rangkaian"
        className="absolute w-[40vw] right-[10%] top-[10%] sm:w-[30vw] z-10"
      />
      <img
        src="/assets/landingpage/rangkaian/batik.webp"
        alt="rangkaian"
        className="absolute w-[40vw] left-[10%] bottom-[10%] sm:w-[30vw] z-10"
      />
      <div
        ref={cardsRef}
        className="absolute w-full flex flex-col gap-y-5 sm:gap-x-0 sm:flex-row items-center justify-center bottom-0 sm:bottom-[20%] sm:justify-between sm:px-10 z-10"
      >
        <EntryAnimation
          type="slide"
          direction="left"
          duration={1}
          delay={0.5}
          className="w-[12vw] ml-[-7vw] sm:block hidden"
        >
          <img
            src="/assets/landingpage/rangkaian/burung.webp"
            alt="rangkaian"
          />
        </EntryAnimation>
        <div className="w-[80vw] sm:w-[30vw] h-[60vw] sm:h-[35vw] cursor-pointer">
          <FlipCard frontContent={pkkmbFront} backContent={pkkmbBack} />
        </div>
        <div className="w-[80vw] sm:w-[30vw] h-[60vw] sm:h-[35vw] mb-5 sm:mb-0 cursor-pointer">
          <FlipCard frontContent={openHouseFront} backContent={openHouseBack} />
        </div>
        <EntryAnimation
          type="slide"
          direction="left"
          duration={1}
          delay={0.5}
          className="w-[12vw] mr-[-7vw] scale-x-[-1] sm:block hidden"
        >
          <img
            src="/assets/landingpage/rangkaian/burung.webp"
            alt="rangkaian"
          />
        </EntryAnimation>
      </div>
    </div>
  );
};

export default Rangkaian;
