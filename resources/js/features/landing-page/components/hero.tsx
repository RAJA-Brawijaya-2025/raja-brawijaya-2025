import React, { useEffect, useState, useRef } from 'react';
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
    <div className="min-h-screen relative z-20 flex sm:gap-y-0 gap-y-3 flex-col justify-center items-center w-full bg-[linear-gradient(360deg,_#83CDCE_0%,_#19485C_81.73%)] overflow-hidden">
      <img
        src="/assets/landingpage/rajaBrawijaya.webp"
        alt="Hero"
        className={`sm:w-[50vw] w-[80vw] relative z-20 ${getAnimationClasses('animate-slide-from-bottom')}`}
        ref={(element) => (animatedElementsRef.current[0] = element)}
        style={{ animationDelay: '0s' }}
      />
      <p
        className={`bg-gradient-to-b from-[#FCC61A] to-[#C99C0B] relative z-20 bg-clip-text text-transparent font-raillinc sm:text-[clamp(1.5vw,6vw,5rem)] text-[clamp(1.5vw,7vw,5rem)] ${getAnimationClasses('animate-slide-from-bottom')}`}
        style={{
          WebkitTextStroke: '0.1vw white',
          animationDelay: '0.4s',
        }}
      >
        2025
      </p>
      <h1
        className={`font-raillinc text-white bg-clip-text sm:text-[clamp(1.5vw,2.5vw,4rem)] text-[clamp(1.5vw,5vw,4rem)] relative z-20 text-center ${getAnimationClasses('animate-slide-from-bottom')}`}
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
          className={`absolute bottom-0 w-[80vw] sm:block hidden ${getAnimationClasses('animate-slide-from-bottom')}`}
          ref={(element) => (animatedElementsRef.current[4] = element)}
          style={{ left: '10vw', animationDelay: '2s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.01} zIndex={10}>
        <img
          src="/assets/landingpage/mobile/istana.webp"
          alt="istana"
          className={`absolute bottom-0 w-[80vw] mx-auto block sm:hidden ${getAnimationClasses('animate-slide-from-bottom')}`}
          ref={(element) => (animatedElementsRef.current[4] = element)}
          style={{ left: '10vw', animationDelay: '2s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.015} zIndex={9}>
        <img
          src="/assets/landingpage/istanaShadow.webp"
          alt="istana shadow"
          className={`absolute w-[95vw] bottom-0 sm:block hidden ${getAnimationClasses('animate-slide-from-bottom')}`}
          ref={(element) => (animatedElementsRef.current[5] = element)}
          style={{ animationDelay: '1.5s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.015} zIndex={9}>
        <img
          src="/assets/landingpage/mobile/shadow.webp"
          alt="istana shadow"
          className={`absolute w-[50vw] left-0 bottom-0 sm:hidden block ${getAnimationClasses('animate-slide-from-bottom')}`}
          ref={(element) => (animatedElementsRef.current[5] = element)}
          style={{ animationDelay: '1.5s' }}
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.015} zIndex={9}>
        <img
          src="/assets/landingpage/mobile/shadow.webp"
          alt="istana shadow"
          className={`absolute w-[50vw] right-0 bottom-0 sm:hidden block ${getAnimationClasses('animate-slide-from-bottom')}`}
          ref={(element) => (animatedElementsRef.current[5] = element)}
          style={{ animationDelay: '1.5s' }}
        />
      </MouseParallax>

      <MouseParallax isAbsolutelyPositioned strength={0.03} zIndex={1}>
        <img
          src="/assets/landingpage/awan.webp"
          alt="awan"
          className="absolute w-[45vw] sm:w-[25vw] right-[-2%] bottom-[50%] sm:top-[8%]"
        />
      </MouseParallax>

      <MouseParallax isAbsolutelyPositioned strength={-0.02} zIndex={20}>
        <img
          src="/assets/landingpage/awan.webp"
          alt="awan"
          className="absolute w-[40vw] sm:w-[23vw] left-[-2%] top-[0%] sm:top-[45%] scale-x-[-1]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={-0.04} zIndex={15}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute w-[10vw] left-[8%] top-[25%]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={-0.06} zIndex={15}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute w-[10vw] sm:w-[6vw] sm:left-[39%] right-[39%] top-[5%]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.04} zIndex={1}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute w-[10vw] right-[28%] scale-x-[-1] bottom-[50%]"
        />
      </MouseParallax>
      <MouseParallax isAbsolutelyPositioned strength={0.025} zIndex={10}>
        <img
          src="/assets/landingpage/burung.webp"
          alt="burung"
          className="absolute w-[12vw] sm:w-[7vw] right-[8%] scale-x-[-1] bottom-[20%]"
        />
      </MouseParallax>

      <div
        className={`curved-edge absolute bottom-0 w-full z-20 sm:block hidden ${getAnimationClasses('animate-slide-from-bottom')}`}
        style={{ animationDelay: '0s' }}
      />
      <img
        src="/assets/landingpage/ornaments.webp"
        alt="ornament kiri"
        className={`absolute bottom-[-0.2%] z-20 left-0 w-3/14 sm:block hidden ${getAnimationClasses('animate-slide-from-left')}`}
        ref={(element) => (animatedElementsRef.current[0] = element)}
        style={{ animationDelay: '1s' }}
      />
      <img
        src="/assets/landingpage/ornaments.webp"
        alt="ornament kanan"
        className={`absolute bottom-0 right-0 scale-x-[-1] w-3/14 z-20 sm:block hidden ${getAnimationClasses('animate-slide-from-left')}`}
        ref={(element) => (animatedElementsRef.current[2] = element)}
        style={{ animationDelay: '1s' }}
      />
      <img
        src="/assets/landingpage/ornamentsbottom.webp"
        alt="ornament bawah"
        className={`absolute bottom-0 z-30 w-full sm:w-1/3 z-20 ${getAnimationClasses('animate-slide-from-bottom')}`}
        ref={(element) => (animatedElementsRef.current[3] = element)}
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};

export default Hero;
