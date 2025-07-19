import { useEffect, useState, useRef } from 'react';
import { MouseParallax } from 'react-just-parallax';

const Hero = () => {
  const [isDelayed, setIsDelayed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animatedElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      },
    );

    animatedElementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      animatedElementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const getAnimationClasses = (animationName: string) => {
    return `${isDelayed && isVisible ? animationName : 'opacity-0 invisible'}`;
  };

  return (
    <div className="relative z-20 flex min-h-screen w-full flex-col items-center justify-center gap-y-3 overflow-hidden bg-[linear-gradient(360deg,_#83CDCE_0%,_#19485C_81.73%)] sm:gap-y-0">
      <img
        src="/assets/landingpage/rajaBrawijaya.webp"
        alt="Hero"
        className={`relative z-20 w-[80vw] sm:w-[50vw] ${getAnimationClasses(
          'animate-slide-from-bottom',
        )}`}
        ref={(element) => {
          animatedElementsRef.current[0] = element;
        }}
        style={{ animationDelay: '0s' }}
      />
      <p
        className={`relative z-20 bg-gradient-to-b from-[#FCC61A] to-[#C99C0B] bg-clip-text font-raillinc text-[clamp(1.5vw,7vw,5rem)] text-transparent sm:text-[clamp(1.5vw,6vw,5rem)] ${getAnimationClasses(
          'animate-slide-from-bottom',
        )}`}
        style={{
          WebkitTextStroke: '0.1vw white',
          animationDelay: '0.4s',
        }}
      >
        2025
      </p>
      <h1
        className={`relative z-20 bg-clip-text text-center font-raillinc text-[clamp(1.5vw,5vw,4rem)] text-white sm:text-[clamp(1.5vw,2.5vw,4rem)] ${getAnimationClasses(
          'animate-slide-from-bottom',
        )}`}
        style={{
          WebkitTextStroke: '0.07vw black',
          animationDelay: '0.4s',
        }}
      >
        Rangkaian Jelajah Almamater Universitas Brawijaya
      </h1>
      <MouseParallax isAbsolutelyPositioned strength={0.01} zIndex={10}>
        <img
          src="/assets/landingpage/istana.webp"
          alt="istana"
          className={`absolute bottom-0 hidden w-[80vw] sm:block ${getAnimationClasses(
            'animate-slide-from-bottom',
          )}`}
          ref={(element) => {
            animatedElementsRef.current[4] = element;
          }}
          style={{ left: '10vw', animationDelay: '2s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.01} zIndex={10}>
        <img
          src="/assets/landingpage/mobile/istana.webp"
          alt="istana"
          className={`absolute bottom-0 mx-auto block w-[80vw] sm:hidden ${getAnimationClasses(
            'animate-slide-from-bottom',
          )}`}
          ref={(element) => {
            animatedElementsRef.current[4] = element;
          }}
          style={{ left: '10vw', animationDelay: '2s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.015} zIndex={9}>
        <img
          src="/assets/landingpage/istanaShadow.webp"
          alt="istana shadow"
          className={`absolute bottom-0 hidden w-[95vw] sm:block ${getAnimationClasses(
            'animate-slide-from-bottom',
          )}`}
          ref={(element) => {
            animatedElementsRef.current[5] = element;
          }}
          style={{ animationDelay: '1.5s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.015} zIndex={9}>
        <img
          src="/assets/landingpage/mobile/shadow.webp"
          alt="istana shadow"
          className={`absolute bottom-0 left-0 block w-[50vw] sm:hidden ${getAnimationClasses(
            'animate-slide-from-bottom',
          )}`}
          ref={(element) => {
            animatedElementsRef.current[5] = element;
          }}
          style={{ animationDelay: '1.5s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.015} zIndex={9}>
        <img
          src="/assets/landingpage/mobile/shadow.webp"
          alt="istana shadow"
          className={`absolute bottom-0 right-0 block w-[50vw] sm:hidden ${getAnimationClasses(
            'animate-slide-from-bottom',
          )}`}
          ref={(element) => {
            animatedElementsRef.current[5] = element;
          }}
          style={{ animationDelay: '1.5s' }}
        />
      </MouseParallax>

      <MouseParallax isAbsolutelyPositioned strength={0.03} zIndex={1}>
        <img
          src="/assets/landingpage/awan.webp"
          alt="awan"
          className="absolute right-[-2%] bottom-[50%] w-[45vw] sm:top-[8%] sm:w-[25vw]"
        />
      </MouseParallax>

      <MouseParallax isAbsolutelyPositioned strength={-0.02} zIndex={20}>
        <img
          src="/assets/landingpage/awan.webp"
          alt="awan"
          className="absolute left-[-2%] top-[0%] w-[40vw] scale-x-[-1] sm:top-[45%] sm:w-[23vw]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={-0.04} zIndex={15}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute left-[8%] top-[25%] w-[10vw]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={-0.06} zIndex={15}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute right-[39%] top-[5%] w-[10vw] sm:left-[39%] sm:w-[6vw]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.04} zIndex={1}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute right-[28%] bottom-[50%] w-[10vw] scale-x-[-1]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.025} zIndex={10}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute right-[8%] bottom-[20%] w-[12vw] scale-x-[-1] sm:w-[7vw]"
        />
      </MouseParallax>

      <div
        className={`curved-edge absolute bottom-0 z-20 hidden w-full sm:block ${getAnimationClasses(
          'animate-slide-from-bottom',
        )}`}
        style={{ animationDelay: '0s' }}
      />
      <img
        src="/assets/landingpage/ornaments.webp"
        alt="ornament kiri"
        className={`absolute bottom-[-0.2%] left-0 z-20 hidden w-3/12 sm:block ${getAnimationClasses(
          'animate-slide-from-left',
        )}`}
        ref={(element) => {
          animatedElementsRef.current[0] = element;
        }}
        style={{ animationDelay: '1s' }}
      />
      <img
        src="/assets/landingpage/ornaments.webp"
        alt="ornament kanan"
        className={`absolute bottom-0 right-0 z-20 hidden w-3/12 scale-x-[-1] sm:block ${getAnimationClasses(
          'animate-slide-from-left',
        )}`}
        ref={(element) => {
          animatedElementsRef.current[2] = element;
        }}
        style={{ animationDelay: '1s' }}
      />
      <img
        src="/assets/landingpage/ornamentsbottom.webp"
        alt="ornament bawah"
        className={`absolute bottom-0 z-30 w-full sm:w-1/3 ${getAnimationClasses(
          'animate-slide-from-bottom',
        )}`}
        ref={(element) => {
          animatedElementsRef.current[3] = element;
        }}
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};

export default Hero;
