import { useState, useEffect } from 'react';
import EntryAnimation from './entry-animation';

const fakultasData = [
  {
    id: 1,
    name: 'Fakultas Ilmu Komputer',
    description:
      'PK2MABA - Pengenalan Kehidupan Kampus bagi Mahasiswa Baru Fakultas Ilmu Komputer selanjutnya disingkat PK2MABA FILKOM adalah suatu kegiatan yang memberikan pembekalan kepada mahasiswa tentang kehidupan kampus, baik dari segi akademik maupun non akademik. STARTUP ACADEMY - Merupakan kelanjutan setelah PK2MABA FILKOM yang memfasilitasi mahasiswa dalam pembinaan karya ilmiah, pengenalan organisasi mahasiswa, dan pelaksanaan krida mahasiswa tingkat Program Studi.',
    img: '/assets/landingpage/fakultas/filkom.webp',
  },
  {
    id: 2,
    name: 'Fakultas Ekonomi dan Bisnis',
    description: 'Deskripsi fakultas FEB',
    img: '/assets/landingpage/fakultas/filkom.webp',
  },
  {
    id: 3,
    name: 'Fakultas Ekonomi dan Bisnis',
    description: 'Deskripsi fakultas FEB',
    img: '/assets/landingpage/fakultas/filkom.webp',
  },
  {
    id: 4,
    name: 'Fakultas Ekonomi dan Bisnis',
    description: 'Deskripsi fakultas FEB',
    img: '/assets/landingpage/fakultas/filkom.webp',
  },
  {
    id: 5,
    name: 'Fakultas Ekonomi dan Bisnis',
    description: 'Deskripsi fakultas FEB',
    img: '/assets/landingpage/fakultas/filkom.webp',
  },
  {
    id: 6,
    name: 'Fakultas Ekonomi dan Bisnis',
    description: 'Deskripsi fakultas FEB',
    img: '/assets/landingpage/fakultas/filkom.webp',
  },
  {
    id: 7,
    name: 'Fakultas Ekonomi dan Bisnis',
    description: 'Deskripsi fakultas FEB',
    img: '/assets/landingpage/fakultas/filkom.webp',
  },
];

const VISIBLE_ITEMS = 7;
const CLONE_COUNT = Math.floor(VISIBLE_ITEMS / 2);

const Fakultas = () => {
  const [extendedFakultasData] = useState([
    ...fakultasData.slice(-CLONE_COUNT),
    ...fakultasData,
    ...fakultasData.slice(0, CLONE_COUNT),
  ]);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width: windowWidth } = windowSize;
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isMobile = windowWidth < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 768;
  const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (currentIndex === fakultasData.length + CLONE_COUNT) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(CLONE_COUNT);
      }, 500);
    }
    if (currentIndex < CLONE_COUNT) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(fakultasData.length + CLONE_COUNT - 1);
      }, 500);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const angleSpacing = 25;
  const radius = isMobile ? 350 : isTablet ? 500 : 700;
  const bend = isMobile ? 80 : isTablet ? 70 : 150;
  const activeScale = isMobile ? 1 : isTablet ? 1.3 : 1.7;
  const inactiveScale = isMobile ? 0.6 : isTablet ? 0.8 : 1;
  const flatteningFactor = isMobile ? 0.5 : isTablet ? 0.4 : 0.3;

  const activeOriginalIndex =
    (currentIndex - CLONE_COUNT + fakultasData.length) % fakultasData.length;
  const currentFaculty = fakultasData[activeOriginalIndex] || {};

  return (
    <div className="relative flex flex-col items-center justify-between bg-[linear-gradient(180deg,_#18070A_0%,_#372D6F_100%)] overflow-hidden z-20">
      <img
        src="/assets/landingpage/rangkaian/ukiran.webp"
        alt="buku-panduan"
        className="w-full rotate-180 mt-[-1vw]"
      />
      <div className="flex flex-col mt-[2vw] items-center w-full gap-y-10">
        <div className="flex flex-row justify-between w-full">
          <EntryAnimation
            type="slide"
            direction="left"
            delay={0.5}
            duration={1.5}
          >
            <img
              src="/assets/landingpage/fakultas/bunga-kiri.webp"
              alt="buku-panduan"
              className="w-[15vw] mt-[-1vw] ml-[-1vw] animate-rotate2 "
            />
          </EntryAnimation>

          <EntryAnimation type="scale" delay={0.5} duration={1.5}>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-raillinc bg-gradient-to-b from-[#FCC61A] to-[#C99C0B] bg-clip-text text-transparent text-[clamp(1.5vw,5vw,5rem)]">
                Ragam Brawijaya
              </h1>

              <h2 className="font-bold text-white text-[clamp(1.5vw,3vw,5rem)]">
                {currentFaculty.name}
              </h2>
            </div>
          </EntryAnimation>

          <EntryAnimation
            type="slide"
            direction="right"
            delay={0.5}
            duration={1.5}
          >
            <img
              src="/assets/landingpage/fakultas/bunga.webp"
              alt="buku-panduan"
              className="w-[15vw] mt-[-1vw] mr-[-1vw] animate-rotate "
            />
          </EntryAnimation>
        </div>

        {isMobile && (
          <div className="flex flex-col items-center gap-y-8 w-full px-5">
            <EntryAnimation type="fade" delay={1} duration={2}>
              <p className="text-white text-sm w-full text-justify">
                {currentFaculty.description}
              </p>
            </EntryAnimation>
            <div className="flex items-center justify-around w-full mb-[-27vw] cursor-pointer z-20">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 cursor-pointer rounded-full bg-white flex items-center justify-center"
              >
                <img
                  src="/assets/landingpage/fakultas/arrow.webp"
                  alt="sebelumnya"
                  className="w-4"
                />
              </button>
              <img
                src={currentFaculty.img}
                alt={currentFaculty.name}
                className="w-40 h-40 rounded-full object-cover "
              />
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 cursor-pointer rounded-full bg-white flex items-center justify-center"
              >
                <img
                  src="/assets/landingpage/fakultas/arrow.webp"
                  alt="berikutnya"
                  className="w-4 scale-x-[-1]"
                />
              </button>
            </div>
          </div>
        )}

        {!isMobile && (
          <>
            <div className="flex flex-row justify-center items-center gap-x-10 mb-[2vw] w-full px-[2vw] ">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 cursor-pointer rounded-full bg-white flex items-center justify-center"
              >
                <img
                  src="/assets/landingpage/fakultas/arrow.webp"
                  alt="fakultas"
                  className="w-3 mr-0.5"
                />
              </button>
              <EntryAnimation type="fade" delay={1} duration={2}>
                <p className="text-white text-[clamp(1.5vw,1.8vw,5rem)] sm:text-[clamp(1.5vw,1vw,5rem)] w-[70vw] h-[10vw] items-center flex flex-row text-justify">
                  {currentFaculty.description}
                </p>
              </EntryAnimation>
              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 cursor-pointer rounded-full bg-white flex items-center justify-center"
              >
                <img
                  src="/assets/landingpage/fakultas/arrow.webp"
                  alt="fakultas"
                  className="w-3 ml-0.5 scale-x-[-1]"
                />
              </button>
            </div>
            <div className="relative w-full flex items-center justify-center ">
              {extendedFakultasData.map((fakultas, index) => {
                const relativeIndex = index - currentIndex;
                if (Math.abs(relativeIndex) > CLONE_COUNT) return null;

                const angle = relativeIndex * angleSpacing;
                const angleRad = angle * (Math.PI / 180);
                const x = radius * Math.sin(angleRad);
                const y =
                  -radius * (1 - Math.cos(angleRad)) * flatteningFactor + bend;
                const isActive = index === currentIndex;
                const scale = isActive ? activeScale : inactiveScale;
                const zIndex = isActive ? 10 : 1;

                return (
                  <img
                    key={`${fakultas.id}-${index}`}
                    src={fakultas.img}
                    alt={fakultas.name}
                    className="absolute rounded-full object-cover"
                    style={{
                      width: '150px',
                      height: '150px',
                      zIndex,
                      transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
                      transition: isTransitioning ? 'all 600ms' : 'none',
                      opacity: Math.abs(relativeIndex) > CLONE_COUNT ? 0 : 1,
                    }}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="curved-edge2 bg-[linear-gradient(180deg,_#FCC61A_0%,_#C99C0B_100%)] flex items-center w-full">
        <img
          src="/assets/landingpage/fakultas/batik.webp"
          alt="fakultas"
          className="w-[40vw] sm:w-[30vw] ml-[-3.5vw] sm:mr-[-4.5vw] mr-[-6vw]"
        />
        <img
          src="/assets/landingpage/fakultas/batik.webp"
          alt="fakultas"
          className="w-[40vw] sm:w-[30vw] mr-[-4.5vw] sm:mr-[-4.5vw] mr-[-6vw]"
        />
        <img
          src="/assets/landingpage/fakultas/batik.webp"
          alt="fakultas"
          className="w-[40vw] sm:w-[30vw] mr-[-4.5vw] sm:mr-[-4.5vw] mr-[-6vw]"
        />
        <img
          src="/assets/landingpage/fakultas/batik.webp"
          alt="fakultas"
          className="w-[40vw] sm:w-[30vw] mr-[-4.5vw]"
        />
        <img
          src="/assets/landingpage/fakultas/batik.webp"
          alt="fakultas"
          className="w-[40vw] sm:w-[30vw] mr-[-4.5vw]"
        />
      </div>
    </div>
  );
};
export default Fakultas;
